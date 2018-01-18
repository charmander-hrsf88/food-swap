import React from 'react';
import Friend from './friend.jsx';
import { RatedStarLike } from '../icons/star.jsx';
import Question from '../icons/question.jsx';
import trades from '../dummyData.js';
import { addFood } from '../axiosCalls.jsx';

class Friends extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trade: {},
      expand: false,
      star: <RatedStarLike location="hello" click={console.log} hover={console.log} />,
      selectedTradeItem: undefined,
      addFoodItem: false,
      dishname: '',
      description: '',
      picture: '',
    };
    this.selectFriend = this.selectFriend.bind(this);
    this.toggleExpand = this.toggleExpand.bind(this);
    this.selectTradeItem = this.selectTradeItem.bind(this);
    this.toggleAdd = this.toggleAdd.bind(this);
    this.updateForm = this.updateForm.bind(this);
  }

  selectTradeItem(dishname) {
    this.setState({ selectedTradeItem: dishname });
  }

  toggleAdd() {
    const bool = !this.state.addFoodItem;
    this.setState({ addFoodItem: bool });
  }

  selectFriend(selected) {
    this.setState({ trade: selected });
  }

  toggleExpand(condit) {
    if (this.state.expand === true) {
      this.setState({ expand: false, selectedTradeItem: undefined });
    } else {
      condit === undefined && this.setState({ expand: true });
    }
  }

  updateForm(e) {
    this.setState({ [e.target.id]: e.target.value });
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
            {this.state.addFoodItem === false ?
              <div>
                <img alt={this.state.trade.food_name} src={this.state.trade.food_picture} />
                <h2> {this.state.trade.food_dishname} </h2>
                <p> {this.state.trade.food_description} </p>
                <p> ~ {this.state.trade.username1}</p>
                <p> 50 feet away </p>
              </div>
            :
              <div id="addFoodForm">
                <label>Dishname</label>
                <br />
                <input id="dishname" value={this.state.dishname} onChange={this.updateForm} />
                <br />
                <label>Description</label>
                <br />
                <textarea id="description" value={this.state.description} onChange={this.updateForm} />
                <br />
                <label>Picture</label>
                <br />
                <input disabled />
                <br />
                <button onClick={() => {
                  addFood(
                    this.state.dishname,
                    this.state.description,
                    this.props.currentUser.id,
                    this.props.updateUser,
                  );
                  this.toggleAdd();
                  }}
                >
                  Submit
                </button>
                <button onClick={this.toggleAdd}>Cancel</button>
              </div>
            }
            <div>
              <ol>
                <li>
                  {this.state.addFoodItem === false ?
                    <button onClick={this.toggleAdd}>Add a food item to trade</button>
                    :
                    <button className="cancel" onClick={this.toggleAdd}>Switch Back</button>
                  }
                </li>
                {this.props.userFood.map(option =>
                  (
                    <li key={option.id}>
                      {option.picture === null ?
                        <Question />
                      :
                        <img src={option.picture} alt={option.dishname} />
                      }
                      <button onClick={() => { this.selectTradeItem(option.dishname); }}>{option.dishname}</button>
                    </li>
                  ))}
              </ol>
            </div>
            {this.state.selectedTradeItem === undefined ?
              <button disabled>Select an item to trade</button>

            :
              <button>Offer to trade your {this.state.selectedTradeItem}</button>
            }
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
