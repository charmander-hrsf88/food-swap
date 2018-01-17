import React from 'react';
import axios from 'axios';
import Trade from './trade.jsx';
import NavBar from './navBar.jsx';
import AddTrade from './addTrade.jsx';

class Trades extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trades: [
        {
          id: 1,
          username1: 'Alex',
          food_id1: 'Cookie Crisp',
          username1_latitude: 37.782206,
          username1_longitude: -122.409892,
          username2: 'Hayden',
          username2_latitude: 37.783692,
          username2_longitude: -122.408967,
          food_id2: 'Cheerios',
          status: true,
          rating: 0,
          time: '2018-01-17T22:31:16+00:00',
          response: false,
        },
        {
          id: 2,
          username1: 'Hayden',
          food_id1: 'Cheerios',
          username2: 'Alex',
          food_id2: 'Cookie Crisp',
          status: true,
          rating: 0,
          time: '2018-01-17T22:31:16+00:00',
          response: false,
        },
        {
          id: 3,
          username1: 'Hayden',
          food_id1: 'Cheerios',
          username2: 'Alex',
          food_id2: 'Cookie Crisp',
          status: true,
          rating: 0,
          time: '2018-01-17T22:31:16+00:00',
          response: true,
        },
        {
          id: 4,
          username1: 'Alex',
          food_id1: 'Cookie Crisp',
          username2: 'Hayden',
          food_id2: 'Cheerios',
          status: true,
          rating: 0,
          time: '2018-01-17T22:31:16+00:00',
          response: true,
        },
        {
          id: 5,
          username1: 'Hayden',
          food_id1: 'Cheerios',
          username2: 'Alex',
          food_id2: 'Cookie Crisp',
          status: true,
          rating: 0,
          time: '2018-01-13T22:31:16+00:00',
          response: true,
        },
        {
          id: 6,
          username1: 'Alex',
          food_id1: 'Cookie Crisp',
          username2: 'Hayden',
          food_id2: 'Cheerios',
          status: true,
          rating: 0,
          time: '2018-01-13T22:31:16+00:00',
          response: true,
        },
        {
          id: 7,
          username1: 'Hayden',
          food_id1: 'Cheerios',
          username2: 'Alex',
          food_id2: 'Cookie Crisp',
          status: true,
          rating: 2,
          time: '2018-01-13T22:31:16+00:00',
          response: true,
        },
        {
          id: 8,
          username1: 'Alex',
          food_id1: 'Cookie Crisp',
          username2: 'Hayden',
          food_id2: 'Cheerios',
          status: true,
          rating: 5,
          time: '2018-01-13T22:31:16+00:00',
          response: true,
        },
        {
          id: 9,
          username1: 'Hayden',
          food_id1: 'Cheerios',
          username2: 'Alex',
          food_id2: 'Cookie Crisp',
          status: false,
          rating: 0,
          time: '2018-01-11T22:31:16+00:00',
          response: true,
        },
        {
          id: 10,
          username1: 'Alex',
          food_id1: 'Cookie Crisp',
          username2: 'Hayden',
          food_id2: 'Cheerios',
          status: false,
          rating: 0,
          time: '2018-01-11T22:31:16+00:00',
          response: true,
        },
      ],
      user: {
        id: 1,
        username: 'Hayden',
        name: 'Hayden',
      },
    };
  }

  getTrades(user) {
    let urlStr = `/api/trade/${user}`;
    axios({
      method: 'get',
      url: '/api/trade/1',
    })
      .then((result) => {
        console.log(result.data);
      })
      .catch((e) => {
        console.log('err', e);
        console.log(this);
      });
  }

  render() {
    return (
      <div>
      <div id="trades">
        <h2>Your Trades</h2>
        <ol>
          {this.state.trades.map(trade =>
            <Trade key={trade.id} trade={trade} user={this.state.user} />)}
        </ol>
      </div>
      <AddTrade />
      </div>
    );
  }
}

export default Trades;
