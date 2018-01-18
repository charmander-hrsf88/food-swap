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
      errorMessage: '',
    };
    this.switchType = this.switchType.bind(this);
  }

  switchType() {
    if (this.state.NewUser === true) {
      this.setState({ NewUser: false });
    } else {
      this.setState({ NewUser: true });
    }
  }

  render() {
    return (
      this.state.NewUser === true ?
        <div id="logInForm">
          <button disabled>Log In</button><button onClick={this.switchType}>Sign Up</button>
          <form action="/login" method="POST" >
            {console.log('loginpage', this.props.err)}
            <h2>Log In</h2>
            {this.props.err === "Incorrect username" && <h4>Username/password combination did not match any active account.</h4>}
            <label htmlFor="logInUserName" >Username:</label>
            <br />
            <input
              id="logInUserName"
              name="username"
              required
              placeholder="Enter Username"
            />
            <br />
            <label htmlFor="logInPassword" >Password:</label>
            <br />
            <input
              id="logInPassword"
              type="password"
              name="password"
              required
              placeholder="Enter Password"
            />
            <br />
            <button>Submit</button>
          </form>
        </div>
        :
        <div id="logInForm">
          <button onClick={this.switchType}>Log In</button><button disabled>Sign Up</button>
          <form action="/signup" method="POST">
            <h2>Sign Up</h2>
            <label htmlFor="signUpUserName" >Username:</label>
            <br />
            <input
              id="signUpUserName"
              name="username"
              type="text"
              required
              placeholder="Pick a Username"
            />
            <br />
            <label htmlFor="signUpConfirmPassword">Password:</label>
            <br />
            <input
              id="signUpPassword"
              type="password"
              name="password"
              required
              placeholder="Pick a Password"
            />
            <br />
            <label htmlFor="signUpConfirmPassword" >Confirm Password:</label>
            <br />
            <input
              id="signUpConfirmPassword"
              type="password"
              required
              placeholder="Confirm Password"
            />
            <br />
            <label htmlFor="signUpName" >Name:</label>
            <br />
            <input
              id="signUpName"
              name="name"
              required
              placeholder="FirstName LastName"
            />
            <br />
            <label htmlFor="signUpEmail" >Email:</label>
            <br />
            <input
              id="signUpEmail"
              type="email"
              name="email"
              required
              placeholder="Email@email.com"
            />
            <br />
            <button>Submit</button>
          </form>
        </div>
    );
  }
}

export default LogIn;
