import React from 'react';
import axios from 'axios';
import Trade from './trade.jsx';
import NavBar from './navBar.jsx';
// import NavBar from './navBar.jsx';
// import Friends from './friends.jsx';
// import AddFriends from './addFriends.jsx';
// import TopUsers from './topUsers.jsx';
// import dummyData from '../dummyData.js'

/*
  id SERIAL,
  user_id1 INTEGER NOT NULL REFERENCES users(id),
  food_id1 INTEGER NOT NULL REFERENCES food(id),
  user_id2 INTEGER NOT NULL REFERENCES users(id),
  food_id2 INTEGER NOT NULL REFERENCES food(id),
  status BOOLEAN DEFAULT NULL,
  PRIMARY KEY (id) */

class Trades extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trades: [
        {
          username1: 'Hayden',
          food_id1: 'Cookie Crisp',
          username2: 'Alex',
          food_id2: 'Cheerios',
          status: null,
        },
        {
          username1: 'Hayden',
          food_id1: 'Cookie Crisp',
          username2: 'Alex',
          food_id2: 'Cheerios',
          status: true,
        },
        {
          username1: 'Hayden',
          food_id1: 'Cookie Crisp',
          username2: 'Alex',
          food_id2: 'Cheerios',
          status: false,
        },
        {
          username1: 'Alex',
          food_id1: 'Cookie Crisp',
          username2: 'Hayden',
          food_id2: 'Cheerios',
          status: null,
        },
        {
          username1: 'Alex',
          food_id1: 'Cookie Crisp',
          username2: 'Hayden',
          food_id2: 'Cheerios',
          status: true,
        },
        {
          username1: 'Alex',
          food_id1: 'Cookie Crisp',
          username2: 'Hayden',
          food_id2: 'Cheerios',
          status: false,
        },
      ],
      user: {
        id: 1,
        username: 'Hayden',
        name: 'Hayden',
      },
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
      <div>
        <NavBar />
        <div id="trades">
          <h2>Trades</h2>
          <ol>
            {this.state.trades.map((trade, index) =>
              <Trade key={index} trade={trade} user={this.state.user} />)}
          </ol>
        </div>
      </div>
    );
  }
}

export default Trades;
