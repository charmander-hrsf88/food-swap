import React from 'react';
import axios from 'axios';

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      NewUser: true,
      signUpUserName: 'Tester',
      signUpPassword: 'test',
      signUpConfirmPassword: 'test',
      signUpName: 'Hayden Marx',
      signUpEmail: 'haydenmarx@gmail.com',
      logInUserName: 'Tester',
      logInPassword: 'test',
    };
    this.switchType = this.switchType.bind(this);
    this.updateForm = this.updateForm.bind(this);
    this.signUp = this.signUp.bind(this);
    this.logIn = this.LogIn.bind(this);
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

  LogIn(e) {
    e.preventDefault();
    axios.get('/login', {
      username: this.state.logInUserName,
      password: this.state.logInPassword,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  signUp(e) {
    e.preventDefault();
    // let name = this.state.signUpName;
    // let username = this.state.signUpUserName;
    // let password = this.state.signUpPassword;
    // let email = this.state.signUpEmail;
    // console.log(name, username, password, email);
    axios({
      url: '/api/users',
      method: 'post',
      contentType: 'application/json',
      data: {
        name: this.state.signUpName,
        username: this.state.signUpUserName,
        password: this.state.signUpPassword,
        email: this.state.signUpEmail,
      },
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
          <form onSubmit={this.logIn}>
            <h2>Log In</h2>
            <label htmlFor="logInUserName" >Username:</label>
            <br />
            <input
              id="logInUserName"
              required
              placeholder="Enter Username"
              value={this.state.logInUserName}
              onChange={this.updateForm}
            />
            <br />
            <label htmlFor="logInPassword" >Password:</label>
            <br />
            <input
              id="logInPassword"
              type="password"
              required
              placeholder="Enter Password"
              value={this.state.logInUserName}
              onChange={this.updateForm}
            />
            <br />
            <button>Submit</button>
          </form>
        </div>
        :
        <div id="logInForm">
          <button onClick={this.switchType}>Log In</button><button disabled>Sign Up</button>
          <form onSubmit={this.signUp}>
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
