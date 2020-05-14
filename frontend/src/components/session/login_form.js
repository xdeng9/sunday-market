import React from 'react';
import { withRouter } from 'react-router-dom';
import './login.css'

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    // this.renderErrors = this.renderErrors.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
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

    })
    this.props.login(demo, this.props.history)
  }


  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.login(user);
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

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <div className="login-form">
            <div className="register-header">
              <h1 >Login</h1>
            </div>
            <br />
            <label htmlFor="email">Email</label>
            <input type="text"
              value={this.state.email}
              onChange={this.update('email')}
              className="login-input"
              placeholder="Email"
            />
            <br />
            <label htmlFor="password">Password</label>
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              className="login-input"
              placeholder="Password"
            />
            <br />
            <button className="clicky">Login</button>
            <button onClick={this.handleDemo} className="clicky" >Demo login</button>
            {this.renderErrors()}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);