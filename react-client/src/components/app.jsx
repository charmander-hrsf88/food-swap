import React from 'react';
import axios from 'axios';
import NavBar from './navBar.jsx';
import dummyData from '../dummyData.js'
import Profile from './profile.jsx';
import Trade from './trades.jsx';
import MainPage from './mainPage.jsx';
import {
  addFriend,
  getSpecificFriend,
  getFriends,
  getAllFood,
  getSpecificFood,
  addFood,
  requestTrade,
  acceptTrade,
  rejectTrade,
  getTrades,
  getAllTradesBetweenTwoUsers,
  getAllUsers,
  getSpecificUser,
} from '../axiosCalls.jsx';

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
    // addFriend();
    // getFriends();
    // getFriend();
    // addFood('cheeseburger', 'bread and meat and cheese', 1);
    // getAllFood();
    // getSpecificFood();
    // requestTrade();
    // getTrades();
    // getAllTradesBetweenTwoUsers();
    // console.log(acceptTrade);
    // acceptTrade();
    // rejectTrade();
    // getAllUsers();
    // getSpecificUser();
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

  postTrade(localUser, localFood, selectedUser, selectedFood) {
    axios({
      method: 'post',
      url: '/api/trade/initiate',
      data: {
        userId1: localUser,
        foodId1: localFood,
        userId2: selectedUser,
        foodId2: selectedFood,
      },
    })
      .then(data => console.log(data))
      .catch(e => console.log('err', e, this));
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
