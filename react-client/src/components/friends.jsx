import React from 'react';
import Friend from './friend.jsx';
import { RatedStarLike, RatedStarSpin } from '../icons/star.jsx';
import Question from '../icons/question.jsx';
import trades from '../dummyData.js';
import { addFood } from '../axiosCalls.jsx';

class Friends extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trade: {},
      expand: false,
      star: <RatedStarLike />,
      selectedTradeItem: undefined,
      addFoodItem: false,
      dishname: '',
      description: '',
      picture: '',
      location: { top: '80px' },
      cover: { top: '30px' },
      selectedTrades: this.props.trades[0],
      selectedTradesNum: 4,
      fullTrades: this.props.trades,
      fullTradesNum: this.props.tradeNumber,
    };
    this.selectFriend = this.selectFriend.bind(this);
    this.toggleExpand = this.toggleExpand.bind(this);
    this.selectTradeItem = this.selectTradeItem.bind(this);
    this.toggleAdd = this.toggleAdd.bind(this);
    this.updateForm = this.updateForm.bind(this);
    this.setSpin = this.setSpin.bind(this);
    this.scrolling = this.scrolling.bind(this);
    this.viewMoreTrades = this.viewMoreTrades.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrolling);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrolling);
  }

  setSpin(bool) {
    console.log(bool, ' . ', this);
  }

  scrolling() {
    const updated = (document.documentElement.scrollTop + 80) + 'px';
    const coverMove = (document.documentElement.scrollTop + 30) + 'px';
    this.setState({ location: { top: updated }, cover: { top: coverMove } });
    if (document.documentElement.scrollTop + window.innerHeight + 100 >=
      document.documentElement.scrollHeight) {
      this.viewMoreTrades();
    }
  }

  viewMoreTrades() {
    if (this.state.selectedTradesNum < this.state.fullTradesNum) {
      const newTotal = this.state.selectedTradesNum + 4;
      const newTrades = this.state.fullTrades.slice(0, newTotal);
      this.setState({
        selectedTradesNum: newTotal,
        selectedTrades: newTrades,
      });
    }
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
          <div className="cover" style={this.state.cover} />
        :
          <span />
        }
        {this.state.expand === true ?
          <div
            className="popUpInfo"
            onClick={(e)=>{e.stopPropagation()}}
            style={this.state.location}
          > {/* React Stop click progression */}
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
                    this.props.updateFood,
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
        {console.log('error friends: ', this.state.selectedTrades)}

        <br />
        {this.state.selectedTradesNum < this.state.fullTradesNum ?
          <button className="loadTrades" onClick={this.viewMoreTrades}>
            View more trades
          </button>
        :
          <button className="loadTrades end" disabled onClick={this.viewMoreTrades}>
            End of offered trades made since last reload
          </button>
        }
      </div>
    );
  }
}

export default Friends;
