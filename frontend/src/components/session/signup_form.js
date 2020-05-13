import React from 'react';
import { withRouter } from 'react-router-dom';
import './signup.css'
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
    this.renderErrors = this.renderErrors.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleDemo(e){
    e.preventDefault();
    const demo = Object.assign({}, {
      email: 'demo@user.com',
      password: '123456',
      phoneNumber: '12345678',
      firstName: 'Demo',
      lastName: 'User',
      zipCode: '94101'
    })
    this.props.signup(demo,this.props.history)
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

  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render(){
    return(
      <div className="sign-form-container">
        <form onSubmit={this.handleSubmit} className="sign-form-box">
          <div className="sign-form">
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
              value={this.state.phoneNumber}
              onChange={this.update('phoneNumber')}
              placeholder="Phonenumber"
            />
            <br />
            <label htmlFor="firstName">First Name</label>
            <input type="firstName"
              value={this.state.firstName}
              onChange={this.update('firstName')}
              placeholder="Firstname"
            />
            <br />
            <label htmlFor="lastName">Last Name</label>
            <input type="lastName"
              value={this.state.lastName}
              onChange={this.update('lastName')}
              placeholder="Lastname"
            />
            <br />
            <label htmlFor="zipCode">Zip Code</label>
            <input type="zipCode"
              value={this.state.zipCode}
              onChange={this.update('zipCode')}
              placeholder="Zipcode"
            />
            <br />
            <button className="clicky2">Sign up</button>
            <button onClick={this.handleDemo} className="clicky2" >Demo login</button>
              {this.renderErrors()} 
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(SignupForm);