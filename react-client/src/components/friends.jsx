import React from 'react';
import Friend from './friend.jsx';
import { RatedStarLike } from '../icons/star.jsx';
import trades from '../dummyData.js';

class Friends extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trade: {},
      expand: false,
      star: <RatedStarLike location="hello" click={console.log} hover={console.log} />,
    };
    this.selectFriend = this.selectFriend.bind(this);
    this.toggleExpand = this.toggleExpand.bind(this);
  }

  selectFriend(selected) {
    this.setState({ trade: selected });
  }

  toggleExpand(condit) {
    if (this.state.expand === true) {
      this.setState({ expand: false });
    } else {
      condit === undefined && this.setState({ expand: true });
    }
  }

  render() {
    return (
      <div id="friends" onClick={()=>{this.toggleExpand(false)}}>
        {this.state.expand === true ?
          <div className="cover" />
        :
          <span />
        }
        {this.state.expand === true ?
          <div className="popUpInfo" onClick={(e)=>{e.stopPropagation()}}> {/* React Stop click progression */}

            <i className="fa fa-times-circle-o fa-2x" aria-hidden="true" onClick={this.toggleExpand} />
          </div>
        :
          <span />
        }
        {trades.trades.map(trade =>
          (<Friend
            key={trade.id}
            trade={trade}
            selectTrade={this.selectFriend}
            toggleExpand={this.toggleExpand}
            star={this.state.star}
          />))}
      </div>
    );
  }
}

export default Friends;
