import React from 'react';
import axios from 'axios';
import Trade from './trade.jsx';
import NavBar from './navBar.jsx';

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
          status: null,
          rating: undefined,
          time: '2018-01-17T22:31:16+00:00',
        },
        {
          id: 2,
          username1: 'Hayden',
          food_id1: 'Cheerios',
          username2: 'Alex',
          food_id2: 'Cookie Crisp',
          status: null,
          rating: undefined,
          time: '2018-01-17T22:31:16+00:00',
        },
        {
          id: 3,
          username1: 'Hayden',
          food_id1: 'Cheerios',
          username2: 'Alex',
          food_id2: 'Cookie Crisp',
          status: true,
          rating: undefined,
          time: '2018-01-16T22:31:16+00:00',
        },
        {
          id: 4,
          username1: 'Alex',
          food_id1: 'Cookie Crisp',
          username2: 'Hayden',
          food_id2: 'Cheerios',
          status: true,
          rating: undefined,
          time: '2018-01-16T22:31:16+00:00',
        },
        {
          id: 5,
          username1: 'Hayden',
          food_id1: 'Cheerios',
          username2: 'Alex',
          food_id2: 'Cookie Crisp',
          status: true,
          rating: undefined,
          time: '2018-01-13T22:31:16+00:00',
        },
        {
          id: 6,
          username1: 'Alex',
          food_id1: 'Cookie Crisp',
          username2: 'Hayden',
          food_id2: 'Cheerios',
          status: true,
          rating: undefined,
          time: '2018-01-13T22:31:16+00:00',
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
        },
        {
          id: 9,
          username1: 'Hayden',
          food_id1: 'Cheerios',
          username2: 'Alex',
          food_id2: 'Cookie Crisp',
          status: false,
          rating: undefined,
          time: '2018-01-11T22:31:16+00:00',
        },
        {
          id: 10,
          username1: 'Alex',
          food_id1: 'Cookie Crisp',
          username2: 'Hayden',
          food_id2: 'Cheerios',
          status: false,
          rating: undefined,
          time: '2018-01-11T22:31:16+00:00',
        },
      ],
      user: {
        id: 1,
        username: 'Hayden',
        name: 'Hayden',
      },
    };
  }

  render() {
    return (
      <div id="trades">
        <h2>Your Trades</h2>
        <ol>
          {this.state.trades.map(trade =>
            <Trade key={trade.id} trade={trade} user={this.state.user} />)}
        </ol>
      </div>
    );
  }
}

export default Trades;
