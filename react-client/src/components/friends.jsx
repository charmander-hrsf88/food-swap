import React from 'react';
import Friend from './friend.jsx';

class Friends extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friend: {},
      expand: false,
    };
    this.selectFriend = this.selectFriend.bind(this);
    this.toggleExpand = this.toggleExpand.bind(this);
  }

  selectFriend(selected) {
    this.setState({ friend: selected });
  }

  toggleExpand() {
    if (this.state.expand === true) {
      this.setState({ expand: false });
    } else {
      this.setState({ expand: true });
    }
  }

  render() {
    return (
      <div id="friends" onClick={()=>{this.toggleExpand()}}>
        {this.state.expand === true ?
          <div className="cover" />
        :
          <span />
        }
        <h2>Your Friends' Swaps: </h2>
        {this.state.expand === true ?
          <div className="popUpInfo" onClick={(e)=>{e.stopPropagation()}}> {/* React Stop click progression */}
            <img alt={this.state.friend.food_name} src={this.state.friend.food_picture} />
            <hr />
            <div>
              <h2> {this.state.friend.food_name} </h2>
              <p> {this.state.friend.food_description} </p>
              <button>
                Send a swap request to {this.state.friend.user_name} for {this.state.friend.food_name}
              </button>
            </div>
            <div>
              <img alt={this.state.friend.user_name} src={this.state.friend.user_picture} />
              <h2> {this.state.friend.user_name} </h2>
              <p> {this.state.friend.user_bio} </p>
            </div>
            <i className="fa fa-times-circle-o fa-2x" aria-hidden="true" onClick={this.toggleExpand} />
          </div>
        :
          <span />
        }
        {this.props.friends.map((friend, i) =>
          <Friend key={i} friend={friend} selectFriend={this.selectFriend} toggleExpand={this.toggleExpand} />)}
      </div>
    );
  }
}


export default Friends;
