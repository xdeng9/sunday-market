import React from 'react';
import { Link } from 'react-router-dom'
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
          <button onClick={this.logoutUser}>Logout</button>
        </div>
      );
    } else {
      return (
        <div className="login-signup">
          <Link to={'/signup'} id="signup" >Signup</Link>
          <Link to={'/login'} id="login">Login</Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div >

        <a href="/" id="logo">.</a>
       { this.getLinks()}
        
      </div>
    );
  }
}

export default NavBar;