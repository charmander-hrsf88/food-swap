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
      currentPage: '',
      userFood: [],
      userTrades: [],
      errorMessage: 'none',
      profile: '',
      activeTrades: [],
      activeTradesNumber: 0,
    };
    this.switchPage = this.switchPage.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.updateFood = this.updateFood.bind(this);
  }

  componentDidMount() {
    userInfo(this.updateUser);
  }

  switchPage(name) {
    switch (name) {
      case ('Trades'):
        this.setState({ currentPage: <Trade /> });
        break;
      case ('Profile'):
        this.setState({
          currentPage:
  <Profile
    user={this.state.currentUser}
    updateFood={this.updateFood}
    trades={this.userTrades}
  />,
        });
        break;
      default:
        this.setState({
          currentPage:
  <MainPage
    friends={this.state.friends}
    userFood={this.state.userFood}
    updateFood={this.updateFood}
    currentUser={this.state.currentUser}
    trades={this.state.activeTrades}
    tradeNumber={this.state.activeTradesNumber}
  />,
        });
        break;
    }
  }

  updateUser(userObj, bool) {
    if (userObj.message === 'Incorrect username' || userObj.user === undefined) {
      this.setState({ errorMessage: userObj.message });
    } else {
      const numberOfTrades = userObj.possibleTradesExceptUser === undefined ?
        null
        :
        userObj.possibleTradesExceptUser.length;
      this.setState({
        currentUser: userObj.user,
        loggedIn: bool,
        userFood: userObj.food,
        userTrades: userObj.trades,
        activeTradesNumber: numberOfTrades,
        activeTrades: userObj.possibleTradesExceptUser,
      });
    }
  }

  updateFood(obj) {
    this.setState({ userFood: obj });
  }

  render() {
    return (
      <div onScroll={this.scrolling}>
        {/*   Temp disable log in/out rendering
        <NavBar switchPage={this.switchPage} cb={this.updateUser} />
        {this.state.currentPage}
        */}
        {this.state.loggedIn && <NavBar
          switchPage={this.switchPage}
          cb={this.updateUser}
        />}
        {this.state.loggedIn ?
          this.state.currentPage === '' ?
            <MainPage
              friends={this.state.friends}
              userFood={this.state.userFood}
              updateFood={this.updateFood}
              currentUser={this.state.currentUser}
              trades={this.state.activeTrades}
              tradeNumber={this.state.activeTradesNumber}
              />
          :
            this.state.currentPage
        :
          <LogInSignUp err={this.state.errorMessage}/>
        }
      </div>
    );
  }
}

export default App;
