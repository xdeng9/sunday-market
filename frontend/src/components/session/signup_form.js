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

    this.handleDemo = this.handleDemo.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push('/login');
    }

    this.setState({ errors: nextProps.errors })
  }


  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleDemo(e) {
    e.preventDefault();
    const demo = Object.assign({}, {
      email: 'demo@user.com',
      password: '123456',
      phoneNumber: '5302204949',
      firstName: 'Demo',
      lastName: 'User',
      zipCode: '94101'
    })
    this.props.login(demo, this.props.history)
  }

  handleSubmit(e) {
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
        {Object.keys(this.props.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.props.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="sign-form-container">
        <form onSubmit={this.handleSubmit} className="sign-form-box">
          <div className="sign-form">
            <div className="register-header">

              <a href="/" >
                <div id="logo2">

                </div>
              </a>
              <h1 >Create Account</h1>
            </div>
            <br />
            <label htmlFor="email">Email</label>
            <input type="text"
              value={this.state.email}
              onChange={this.update('email')}
              className="sign-input"
              placeholder="Email"
            />
            <br />
            <label htmlFor="passwoed">Password</label>
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              className="sign-input"
              placeholder="Password"
            />
            <br />
            <label htmlFor="phoneNumber">Phone number</label>
            <input type="phoneNumber"
              value={this.state.phoneNumber}
              onChange={this.update('phoneNumber')}
              className="sign-input"
              placeholder="Phone number"
            />
            <br />
            <label htmlFor="firstName">First name</label>
            <input type="firstName"
              value={this.state.firstName}
              onChange={this.update('firstName')}
              className="sign-input"
              placeholder="First name"
            />
            <br />
            <label htmlFor="lastName">Last name</label>
            <input type="lastName"
              value={this.state.lastName}
              onChange={this.update('lastName')}
              className="sign-input"
              placeholder="Last name"
            />
            <br />
            <label htmlFor="zipCode">Zip code</label>
            <input type="zipCode"
              value={this.state.zipCode}
              onChange={this.update('zipCode')}
              className="sign-input"
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