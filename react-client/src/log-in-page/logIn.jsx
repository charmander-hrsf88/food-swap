import React from 'react';
import axios from 'axios';

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      NewUser: true,
      signUpUserName: '',
      signUpPassword: '',
      signUpConfirmPassword: '',
      signUpName: '',
      signUpEmail: '',
    };
    this.switchType = this.switchType.bind(this);
    this.updateForm = this.updateForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.signUp = this.signUp.bind(this);
  }

  switchType() {
    if (this.state.NewUser === true) {
      this.setState({ NewUser: false });
    } else {
      this.setState({ NewUser: true });
    }
  }

  updateForm(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.signUp();
  }

  LogIn() {
    axios.get('/signup', {
      firstName: 'Fred',
      lastName: 'Flintstone'
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  signUp() {
    axios.post('/signup', {
      name: this.state.signUpName,
      username: this.state.signUpUserName,
      password: this.state.signUpPassword,
      email: this.state.signUpEmail,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      this.state.NewUser === true ?
        <div id="logInForm">
          <button disabled>Log In</button><button onClick={this.switchType}>Sign Up</button>
          <form onSubmit={this.handleSubmit}>
            <h2>Log In</h2>
            <label htmlFor="logInUserName" >Username:</label>
            <br />
            <input id="logInUserName" required placeholder="Enter Username" />
            <br />
            <label htmlFor="logInPassword" >Password:</label>
            <br />
            <input id="logInPassword" type="password" required placeholder="Enter Password" />
            <br />
            <button>Submit</button>
          </form>
        </div>
        :
        <div id="logInForm">
          <button onClick={this.switchType}>Log In</button><button disabled>Sign In</button>
          <form onSubmit={this.handleSubmit}>
            <h2>Sign Up</h2>
            <label htmlFor="signUpUserName" >Username:</label>
            <br />
            <input
              id="signUpUserName"
              type="text"
              required
              placeholder="Pick a Username"
              value={this.state.signUpUserName}
              onChange={this.updateForm}
            />
            <br />
            <label htmlFor="signUpConfirmPassword">Password:</label>
            <br />
            <input
              id="signUpPassword"
              type="password"
              required
              placeholder="Pick a Password"
              value={this.state.signUpPassword}
              onChange={this.updateForm}
            />
            <br />
            <label htmlFor="signUpConfirmPassword" >Confirm Password:</label>
            <br />
            <input
              id="signUpConfirmPassword"
              type="password"
              required
              placeholder="Confirm Password"
              value={this.state.signUpConfirmPassword}
              onChange={this.updateForm}
            />
            <br />
            <label htmlFor="signUpName" >Name:</label>
            <br />
            <input
              id="signUpName"
              required
              placeholder="FirstName LastName"
              value={this.state.signUpName}
              onChange={this.updateForm}
            />
            <br />
            <label htmlFor="signUpEmail" >Email:</label>
            <br />
            <input
              id="signUpEmail"
              type="email"
              required
              placeholder="Email@email.com"
              value={this.state.signUpEmail}
              onChange={this.updateForm}
            />
            <br />
            <button>Submit</button>
          </form>
        </div>
    );
  }
}

export default LogIn;
