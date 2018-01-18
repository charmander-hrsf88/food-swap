import React from 'react';
import axios from 'axios';
import NavBar from './navBar.jsx';
import dummyData from '../dummyData.js'
import Profile from './profile.jsx';
import Trade from './trades.jsx';
import MainPage from './mainPage.jsx';
import LogInSignUp from '../log-in-page/logIn.jsx';
import {
  addFriend,
  getSpecificFriend,
  getFriends,
  getAllFood,
  getSpecificFood,
  getFoodByUsername,
  addFood,
  requestTrade,
  acceptTrade,
  rejectTrade,
  getTrades,
  getAllTradesBetweenTwoUsers,
  getAllUsers,
  getSpecificUser,
  userInfo,
} from '../axiosCalls.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: dummyData.friends,
      currentUser: '',
      loggedIn: false,
      currentPage: <span />,
      userFood : [],
    };
    this.switchPage = this.switchPage.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  componentDidMount() {
    this.switchPage();
    // addFriend();
    // getFriends();
    // getFriend();
    // addFood('Whiskey', 'It\'s a drink. You drink it.', 1);
    getAllFood();
    // getSpecificFood();
    // requestTrade();
    // getTrades();
    // getAllTradesBetweenTwoUsers();
    // console.log(acceptTrade);
    // acceptTrade();
    // rejectTrade();
    // getAllUsers();
    // getSpecificUser();
    userInfo(this.updateUser);
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
  />,
        });
        break;
    }
  }

  // postTrade(localUser, localFood, selectedUser, selectedFood) {
  //   axios({
  //     method: 'post',
  //     url: '/api/trade/initiate',
  //     data: {
  //       userId1: localUser,
  //       foodId1: localFood,
  //       userId2: selectedUser,
  //       foodId2: selectedFood,
  //     },
  //   })
  //     .then(data => console.log(data))
  //     .catch(e => console.log('err', e, this));
  // }

  updateUser(obj, bool) {
    this.setState({ currentUser: obj, loggedIn: bool });
    if (obj !== null) {
      getFoodByUsername(obj.user.id);
    }
  }

  render() {
    return (
      <div>
        {/*   Temp disable log in/out rendering
        <NavBar switchPage={this.switchPage} cb={this.updateUser} />
        {this.state.currentPage}
        */}
        {this.state.loggedIn && <NavBar switchPage={this.switchPage} cb={this.updateUser} />}
        {this.state.loggedIn ?
          this.state.currentPage
        :
          <LogInSignUp />
        }
      </div>
    );
  }
}

export default App;

/*

        {this.state.loggedIn && <NavBar switchPage={this.switchPage} cb={this.updateUser} />}
        {this.state.loggedIn ?
          this.state.currentPage
        :
          <LogInSignUp />
        }

*/
