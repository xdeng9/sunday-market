import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import './navbar.css'


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div className="login-signup">
          <button className="logout-btn hover" onClick={this.logoutUser}>Logout</button>
        </div>
      );
    } else {
      return (
        <div className="login-signup">
          <Link to={'/signup'} id="signup" className="hover">Register</Link>
          <Link to={'/login'} id="login" className="hover">Login</Link>
        </div>
      );
    }
  }

  handlePost() {
    if (this.props.user.id === undefined) this.props.history.push('/login');
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
        <div className="search-bar-container">
          <input
            className="search-field"
            placeholder="Search"
          ></input>
        </div>
        <div className="post-btn" onClick={() => this.handlePost()}>
          <Link to={`/user/${this.props.user.id}`} id="post" className="hover">Post</Link>
        </div>
        <div className="nav-btns-container">
          { this.getLinks()}
        </div>
        
      </div>
    );
  }
}

export default withRouter(NavBar);