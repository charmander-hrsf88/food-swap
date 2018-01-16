import React from 'react';
import axios from 'axios';
import NavBar from './navBar.jsx';
import dummyData from '../dummyData.js'
import Profile from './profile.jsx';
import Trade from './trades.jsx';
import MainPage from './mainPage.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: dummyData.friends,
      topUsers: dummyData.topUsers,
      currentUser: '',
      currentPage: <span />,
    };
    this.switchPage = this.switchPage.bind(this);
  }

  componentDidMount() {
    this.switchPage();
  }

  signUp(e) {
    e.preventDefault();
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

  switchPage(name) {
    switch (name) {
      case ('Trades'):
        this.setState({ currentPage: <Trade /> });
        break;
      case ('Profile'):
        this.setState({ currentPage: <Profile /> });
        break;
      default:
        this.setState({
          currentPage:
  <MainPage
    friends={this.state.friends}
    topUsers={this.state.topUsers}
  />,
        });
        break;
    }
  }

  render() {
    return (
      <div>
        <NavBar switchPage={this.switchPage} />
        {this.state.currentPage}
      </div>
    );
  }
}

export default App;
