import React from 'react';

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      NewUser: true,
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
          <form>
            <h2>Log In</h2>
            <label>User name:</label>
            <br />
            <input />
            <br />
            <label>Password:</label>
            <br type="password" />
            <input />
            <br />
            <button>Submit</button>
          </form>
        </div>
        :
        <div id="logInForm">
          <button onClick={this.switchType}>Log In</button><button disabled>Sign In</button>
          <form>
            <h2>Sign Up</h2>
            <label>User name:</label>
            <br />
            <input type="text" />
            <br />
            <label>Password:</label>
            <br />
            <input type="password" />
            <br />
            <label>Confirm Password:</label>
            <br />
            <input type="password" />
            <br />
            <label>Name:</label>
            <br />
            <input />
            <br />
            <label>Email:</label>
            <br />
            <input type="email"  />
            <br />
            <button>Submit</button>
          </form>
        </div>
    );
  }
}

export default LogIn;
