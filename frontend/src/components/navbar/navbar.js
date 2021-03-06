import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import './navbar.css'


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div className="login-signup">
          <Link to={this.getLinkTo()} id="post" className="hover">Account</Link>
          <button id="logout" className="hover" onClick={this.logoutUser}>Log Out</button>
        </div>
      );
    } else {
      return (
        <div className="login-signup">
          <Link to={'/signup'} id="signup" className="hover">Register</Link>
          <Link to={'/login'} id="login" className="hover">Log In</Link>
        </div>
      );
    }
  }

  getLinkTo() {
    if (!this.props.user || this.props.user.id === undefined) return '/login';
    return `/user/${this.props.user.id}`
  }

  handleSearch() {
    return (event) => {
      console.log(event.target.value)
      this.props.searchListing(event.target.value)
    };
  }

  render() {
    return (
      <div className="navbar-container">
        <div className="logo-container">
          <a href="/" >
            <div id="logo"> 
            </div>
          </a>
        </div>
        {this.props.location.pathname === "/" ? 
        <div className="search-bar-container">
          <input
            className="search-field"
            placeholder="Search"
            onChange={this.handleSearch()}
          ></input>
        </div> : "" }
        <div className="nav-btns-container">
          { this.getLinks()}
        </div>
        
      </div>
    );
  }
}

export default withRouter(NavBar);