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
        <div>
          <button onClick={this.logoutUser}>Logout</button>
        </div>
      );
    } else {
      return (
        <div>
          <Link to={'/signup'} className="clicky">Signup</Link>
          <Link to={'/login'} className="clicky">Login</Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <li className="logo-nav">
          <a href="/" id="logo">s</a>
        </li>
        
      </div>
    );
  }
}

export default NavBar;