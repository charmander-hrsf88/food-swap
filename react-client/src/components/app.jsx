import React from 'react';
import NavBar from './navBar.jsx';
import Friends from './friends.jsx';
import AddFriends from './addFriends.jsx';
import TopUsers from './topUsers.jsx';
import dummyData from '../dummyData.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: dummyData.friends,
      topUsers: dummyData.topUsers,
    };
  }

  render() {
    return (
      <div>
        <NavBar />
        {this.state.friends.length > 0 ?
          <Friends const friends={this.state.friends} />
        :
          <AddFriends />
        }
        <TopUsers const topUsers={this.state.topUsers} />
      </div>
    );
  }
}

export default App;
