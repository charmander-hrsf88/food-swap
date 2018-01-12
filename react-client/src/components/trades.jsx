import React from 'react';
import axios from 'axios';
import Trade from './trade.jsx';
// import NavBar from './navBar.jsx';
// import Friends from './friends.jsx';
// import AddFriends from './addFriends.jsx';
// import TopUsers from './topUsers.jsx';
// import dummyData from '../dummyData.js'

class Trades extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trades: [{}, {}, {}],
      // friends: dummyData.friends,
      // topUsers: dummyData.topUsers,
    };
  }

  // signUp(e) {
  //   e.preventDefault();
  //   // let name = this.state.signUpName;
  //   // let username = this.state.signUpUserName;
  //   // let password = this.state.signUpPassword;
  //   // let email = this.state.signUpEmail;
  //   // console.log(name, username, password, email);
  //   axios({
  //     url: '/api/users',
  //     method: 'post',
  //     contentType: 'application/json',
  //     data: {
  //       name: this.state.signUpName,
  //       username: this.state.signUpUserName,
  //       password: this.state.signUpPassword,
  //       email: this.state.signUpEmail,
  //     },
  //   })
  //     .then(function (response) {
  //     console.log(response);
  //     })
  //     .catch(function (error) {
  //     console.log(error);
  //     });
  // }

  render() {
    return (
      <ol>
        {this.state.trades.map((trade, index) =>
          <Trade key={index} trade={trade} />)}
      </ol>
    );
  }
}

export default Trades;
