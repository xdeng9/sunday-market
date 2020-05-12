import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      phoneNumber: '',
      firstName: '',
      lastName: '',
      zipCode: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    let user = {
      email: this.state.email,
      password: this.state.password,
      phoneNumber: this.state.phoneNumber,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      zipCode: this.state.zipCode
    };

    this.props.signup(user, this.props.history);
  }

  render(){
    return(
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit}>
          <div className="login-form">
            <br />
            <label htmlFor="email">Email address</label>
            <input type="text"
              value={this.state.email}
              onChange={this.update('email')}
              placeholder="Email"
            />
            <br />
            <label htmlFor="passwoed">Password</label>
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              placeholder="Password"
            />
            <br />
            <label htmlFor="phoneNumber">Phone Number</label>
            <input type="phoneNumber"
              value={this.state.password}
              onChange={this.update('phoneNumber')}
              placeholder="Phonenumber"
            />
            <br />
            <label htmlFor="firstName">First Name</label>
            <input type="firstName"
              value={this.state.password}
              onChange={this.update('firstName')}
              placeholder="Firstname"
            />
            <br />
            <label htmlFor="lastName">Last Name</label>
            <input type="lastName"
              value={this.state.password}
              onChange={this.update('lastName')}
              placeholder="Lastname"
            />
            <br />
            <label htmlFor="zipCode">Zip Code</label>
            <input type="zipCode"
              value={this.state.password}
              onChange={this.update('zipCode')}
              placeholder="Zipcode"
            />
            <br />
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(SignupForm);