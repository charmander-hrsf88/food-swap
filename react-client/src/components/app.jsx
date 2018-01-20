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
      tradeNumber: 0,
      errorMessage: 'none',
      profile: '',
    };
    this.switchPage = this.switchPage.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.updateFood = this.updateFood.bind(this);
  }

  componentDidMount() {
    // addFriend();
    // getFriends();
    // getFriend();
    // addFood('Whiskey', 'It\'s a drink. You drink it.', 1);
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
    userInfo(this.updateUser);
  }

  switchPage(name) {
    switch (name) {
      case ('Trades'):
        this.setState({ currentPage: <Trade /> });
        break;
      case ('Profile'):
        this.setState({
          currentPage: <Profile user={this.state.currentUser} updateFood={this.updateFood} />,
        });
        break;
      default:
        this.setState({
          currentPage:
  <MainPage
    friends={this.state.friends}
    userFood={this.state.userFood}
    updateUser={this.updateUser}
    currentUser={this.state.currentUser}
    trades={this.state.userTrades}
    tradeNumber={this.state.tradeNumber}
  />,
        });
        break;
    }
  }

  updateUser(userObj, bool) {
    if (userObj.message === 'Incorrect username' || userObj.user === undefined) {
      this.setState({ errorMessage: userObj.message });
    } else {
      const numberOfTrades = userObj.trades === undefined ? null : userObj.trades.length;
      this.setState({
        currentUser: userObj.user,
        loggedIn: bool,
        userFood: userObj.food,
        userTrades: userObj.trades,
        tradeNumber: numberOfTrades,
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
              trades={this.state.userTrades}
              tradeNumber={this.state.tradeNumber}
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
