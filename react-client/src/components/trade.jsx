import React from 'react';
import moment from 'moment';
import { UnRatedStar, RatedStarLike, RatedStarDislike } from '../icons/star.jsx';


moment.updateLocale('en', {
  relativeTime: {
    future: '%s',
    past: 'EXPIRED',
    s: 'a few seconds',
    ss: '%d seconds',
    m: 'a minute',
    mm: '%d minutes',
    h: 'an hour',
    hh: '%d hours',
    d: 'a day',
    dd: '%d days',
    M: 'a month',
    MM: '%d months',
    y: 'a year',
    yy: '%d years',
  },
});

class Trade extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liStatus: '',
      message: '',
      buttons: '',
      currentTime: '',
      truthy: this.props.trade.username1 === this.props.user.name,
      firstStar: '',
      secondStar: '',
      thirdStar: '',
      fourthStar: '',
      fifthStar: '',
      clicked: false,
      setRating: false,
      newRating: false,
    };
    this.updateStars = this.updateStars.bind(this);
    this.hoverStars = this.hoverStars.bind(this);
    this.submitRating = this.submitRating.bind(this);
    this.cancelRating = this.cancelRating.bind(this);
  }
  componentWillMount() {
    if (this.props.trade.response === false) {
      this.setState({ liStatus: 'pendingTrade' });
      if (this.state.truthy) {
        this.setState({
          message: `You asked ${this.props.trade.username2} to trade his 
          ${this.props.trade.food_id2} for your ${this.props.trade.food_id1} on 
          ${moment(this.props.trade.time).format('ddd, MMM DD')} at 
          ${moment(this.props.trade.time).format('h:mm a')}          
          . ${this.props.trade.username2} has 
          ${moment(this.props.trade.time).fromNow()} left to respond.`,
        });
        this.setState({
          buttons:
  <div className="oneButton">
    <span />
    <button>Reject Trade?</button>
  </div>,
        });
      } else {
        this.setState({
          message: `${this.props.trade.username1} wants to trade ${this.props.trade.food_id1} 
          for your ${this.props.trade.food_id2} on 
          ${moment(this.props.trade.time).format('ddd, MMM DD')} 
          at ${moment(this.props.trade.time).format('h:mm a')}. ${this.props.trade.username1}'s 
          lunch swap location is X miles from you.`,
        });
        this.setState({
          buttons:
  <div>
    <button>Accept Trade?</button>
    <button>Reject Trade?</button>
  </div>,
        });
      }
    } else if (this.props.trade.status === true
      && moment(this.props.trade.time).fromNow() !== 'EXPIRED') {
      this.setState({ liStatus: 'acceptedTrade' });
      if (this.state.truthy) {
        this.setState({
          message: `You accepted ${this.props.trade.username2}'s trade for 
          ${this.props.trade.food_id2} with your ${this.props.trade.food_id1} 
          on ${moment(this.props.trade.time).format('ddd, MMM DD')} at 
          ${moment(this.props.trade.time).format('h:mm a')} and have 
          ${moment(this.props.trade.time).fromNow()} left to swap.`,
        });
      } else {
        this.setState({
          message: `${this.props.trade.username1} accepted your trade for his 
          ${this.props.trade.food_id1} with your ${this.props.trade.food_id2} 
          on ${moment(this.props.trade.time).format('ddd, MMM DD')} at 
          ${moment(this.props.trade.time).format('h:mm a')} and have 
          ${moment(this.props.trade.time).fromNow()} left to swap.`,
        });
      }
    } else if (this.props.trade.status === true) {
      this.setState({ liStatus: 'succssfulTrade' });
      this.setState({
        message: `You completed your trade of ${this.props.trade.food_id1} for 
        ${this.props.trade.username2}'s ${this.props.trade.food_id2} on 
        ${moment(this.props.trade.time).format('ddd, MMM DD')}.`,
      });
      this.setState({
        buttons:
  <div>
    <button onClick={() => { this.setState({ newRating: true }); }} >Rate Trade</button>
    <button>Trade Did Not Happen</button>
  </div>,
      });
      if (this.props.trade.rating !== 0) {
        this.updateStars(this.props.trade.rating);
        console.log(this.props.trade.rating);
        this.setState({ newRating: true, setRating: true });
      } else {
        this.hoverStars('default');
      }
    } else {
      this.setState({ liStatus: 'rejectedTrade' });
      if (this.state.truthy) {
        this.setState({
          message: `You  rejected ${this.props.trade.username2}'s trade of 
          ${this.props.trade.food_id2} for your ${this.props.trade.food_id1}.`,
        });
      } else {
        this.setState({
          message: `${this.props.trade.username1} reject your trade of 
          ${this.props.trade.food_id2} for their ${this.props.trade.food_id1}.`,
        });
      }
    }
  }

  updateStars(num) {
    if (this.state.setRating !== true) {
      switch (num) {
        case 1:
          this.setState({
            firstStar: <RatedStarLike location={1} click={this.updateStars} hover={this.hoverStars} conditional={this.state.clicked} />,
            secondStar: <RatedStarDislike location={2} click={this.updateStars} hover={this.hoverStars} conditional={this.state.clicked} />,
            thirdStar: <RatedStarDislike location={3} click={this.updateStars} hover={this.hoverStars} conditional={this.state.clicked} />,
            fourthStar: <RatedStarDislike location={4} click={this.updateStars} hover={this.hoverStars} conditional={this.state.clicked} />,
            fifthStar: <RatedStarDislike location={5} click={this.updateStars} hover={this.hoverStars} conditional={this.state.clicked} />,
            clicked: true,
          });
          break;
        case 2:
          this.setState({
            firstStar: <RatedStarLike location={1} click={this.updateStars} hover={this.hoverStars} conditional={this.state.clicked} />,
            secondStar: <RatedStarLike location={2} click={this.updateStars} hover={this.hoverStars} conditional={this.state.clicked} />,
            thirdStar: <RatedStarDislike location={3} click={this.updateStars} hover={this.hoverStars} conditional={this.state.clicked} />,
            fourthStar: <RatedStarDislike location={4} click={this.updateStars} hover={this.hoverStars} conditional={this.state.clicked} />,
            fifthStar: <RatedStarDislike location={5} click={this.updateStars} hover={this.hoverStars} conditional={this.state.clicked} />,
            clicked: true,
          });
          break;
        case 3:
          this.setState({
            firstStar: <RatedStarLike location={1} click={this.updateStars} hover={this.hoverStars} conditional={this.state.clicked} />,
            secondStar: <RatedStarLike location={2} click={this.updateStars} hover={this.hoverStars} conditional={this.state.clicked} />,
            thirdStar: <RatedStarLike location={3} click={this.updateStars} hover={this.hoverStars} conditional={this.state.clicked} />,
            fourthStar: <RatedStarDislike location={4} click={this.updateStars} hover={this.hoverStars} conditional={this.state.clicked} />,
            fifthStar: <RatedStarDislike location={5} click={this.updateStars} hover={this.hoverStars} conditional={this.state.clicked} />,
            clicked: true,
          });
          break;
        case 4:
          this.setState({
            firstStar: <RatedStarLike location={1} click={this.updateStars} hover={this.hoverStars} conditional={this.state.clicked} />,
            secondStar: <RatedStarLike location={2} click={this.updateStars} hover={this.hoverStars} conditional={this.state.clicked} />,
            thirdStar: <RatedStarLike location={3} click={this.updateStars} hover={this.hoverStars} conditional={this.state.clicked} />,
            fourthStar: <RatedStarLike location={4} click={this.updateStars} hover={this.hoverStars} conditional={this.state.clicked} />,
            fifthStar: <RatedStarDislike location={5} click={this.updateStars} hover={this.hoverStars} conditional={this.state.clicked} />,
            clicked: true,
          });
          break;
        case 5:
          this.setState({
            firstStar: <RatedStarLike location={1} click={this.updateStars} hover={this.hoverStars} conditional={this.state.clicked} />,
            secondStar: <RatedStarLike location={2} click={this.updateStars} hover={this.hoverStars} conditional={this.state.clicked} />,
            thirdStar: <RatedStarLike location={3} click={this.updateStars} hover={this.hoverStars} conditional={this.state.clicked} />,
            fourthStar: <RatedStarLike location={4} click={this.updateStars} hover={this.hoverStars} conditional={this.state.clicked} />,
            fifthStar: <RatedStarLike location={5} click={this.updateStars} hover={this.hoverStars} conditional={this.state.clicked} />,
            clicked: true,
          });
          break;
        default:
          this.setState({
            firstStar: <UnRatedStar location={1} click={this.updateStars} hover={this.hoverStars} conditional={this.state.clicked} />,
            secondStar: <UnRatedStar location={2} click={this.updateStars} hover={this.hoverStars} conditional={this.state.clicked} />,
            thirdStar: <UnRatedStar location={3} click={this.updateStars} hover={this.hoverStars} conditional={this.state.clicked} />,
            fourthStar: <UnRatedStar location={4} click={this.updateStars} hover={this.hoverStars} conditional={this.state.clicked} />,
            fifthStar: <UnRatedStar location={5} click={this.updateStars} hover={this.hoverStars} conditional={this.state.clicked} />,
            clicked: true,
          });
          break;
      }
    }
  }

  hoverStars(num) {
    if (this.state.clicked !== true) {
      switch (num) {
        case 1:
          this.setState({
            firstStar: <RatedStarLike location={1} click={this.updateStars} hover={this.hoverStars} conditional={this.state.clicked} />,
            secondStar: <UnRatedStar location={2} click={this.updateStars} hover={this.hoverStars} conditional={this.state.clicked} />,
            thirdStar: <UnRatedStar location={3} click={this.updateStars} hover={this.hoverStars} conditional={this.state.clicked} />,
            fourthStar: <UnRatedStar location={4} click={this.updateStars} hover={this.hoverStars} conditional={this.state.clicked} />,
            fifthStar: <UnRatedStar location={5} click={this.updateStars} hover={this.hoverStars} conditional={this.state.clicked} />,
          });
          break;
        case 2:
          this.setState({
            firstStar: <RatedStarLike location={1} click={this.updateStars} hover={this.hoverStars} conditional={this.state.clicked} />,
            secondStar: <RatedStarLike location={2} click={this.updateStars} hover={this.hoverStars} conditional={this.state.clicked} />,
            thirdStar: <UnRatedStar location={3} click={this.updateStars} hover={this.hoverStars} conditional={this.state.clicked} />,
            fourthStar: <UnRatedStar location={4} click={this.updateStars} hover={this.hoverStars} conditional={this.state.clicked} />,
            fifthStar: <UnRatedStar location={5} click={this.updateStars} hover={this.hoverStars} conditional={this.state.clicked} />,
          });
          break;
        case 3:
          this.setState({
            firstStar: <RatedStarLike location={1} click={this.updateStars} hover={this.hoverStars} conditional={this.state.clicked} />,
            secondStar: <RatedStarLike location={2} click={this.updateStars} hover={this.hoverStars} conditional={this.state.clicked} />,
            thirdStar: <RatedStarLike location={3} click={this.updateStars} hover={this.hoverStars} conditional={this.state.clicked} />,
            fourthStar: <UnRatedStar location={4} click={this.updateStars} hover={this.hoverStars} conditional={this.state.clicked} />,
            fifthStar: <UnRatedStar location={5} click={this.updateStars} hover={this.hoverStars} conditional={this.state.clicked} />,
          });
          break;
        case 4:
          this.setState({
            firstStar: <RatedStarLike location={1} click={this.updateStars} hover={this.hoverStars} conditional={this.state.clicked} />,
            secondStar: <RatedStarLike location={2} click={this.updateStars} hover={this.hoverStars} conditional={this.state.clicked} />,
            thirdStar: <RatedStarLike location={3} click={this.updateStars} hover={this.hoverStars} conditional={this.state.clicked} />,
            fourthStar: <RatedStarLike location={4} click={this.updateStars} hover={this.hoverStars} conditional={this.state.clicked} />,
            fifthStar: <UnRatedStar location={5} click={this.updateStars} hover={this.hoverStars} conditional={this.state.clicked} />,
          });
          break;
        case 5:
          this.setState({
            firstStar: <RatedStarLike location={1} click={this.updateStars} hover={this.hoverStars} conditional={this.state.clicked} />,
            secondStar: <RatedStarLike location={2} click={this.updateStars} hover={this.hoverStars} conditional={this.state.clicked} />,
            thirdStar: <RatedStarLike location={3} click={this.updateStars} hover={this.hoverStars} conditional={this.state.clicked} />,
            fourthStar: <RatedStarLike location={4} click={this.updateStars} hover={this.hoverStars} conditional={this.state.clicked} />,
            fifthStar: <RatedStarLike location={5} click={this.updateStars} hover={this.hoverStars} conditional={this.state.clicked} />,
          });
          break;
        default:
          this.setState({
            firstStar: <UnRatedStar location={1} click={this.updateStars} hover={this.hoverStars} conditional={this.state.clicked} />,
            secondStar: <UnRatedStar location={2} click={this.updateStars} hover={this.hoverStars} conditional={this.state.clicked} />,
            thirdStar: <UnRatedStar location={3} click={this.updateStars} hover={this.hoverStars} conditional={this.state.clicked} />,
            fourthStar: <UnRatedStar location={4} click={this.updateStars} hover={this.hoverStars} conditional={this.state.clicked} />,
            fifthStar: <UnRatedStar location={5} click={this.updateStars} hover={this.hoverStars} conditional={this.state.clicked} />,
          });
          break;
      }
    }
  }

  cancelRating() {
    this.setState({ newRating: false, clicked: false });
    this.hoverStars('default');
  }

  submitRating() {
    console.log('a:', this.state.firstStar);
    if (this.state.firstStar !== <UnRatedStar location={1} click={this.updateStars} hover={this.hoverStars} conditional={this.state.clicked} />) {
      this.setState({ newRating: true, clicked: true, setRating: true });
    }
  }

  render() {
    return (
      <li className={this.state.liStatus} >
        <hr />
        <p> { this.state.message } </p>
        { this.state.newRating ?
          <div
            className="ratingPanel"
            onMouseLeave={() => { this.hoverStars('default'); }}
          >
            {this.state.firstStar}
            {this.state.secondStar}
            {this.state.thirdStar}
            {this.state.fourthStar}
            {this.state.fifthStar}
            {this.state.setRating === false &&
              <div>
                <button onClick={this.submitRating}>Submit? </button>
                <button onClick={this.cancelRating}>Cancel? </button>
              </div>
            }
          </div>
        :
          this.state.buttons
        }
      </li>
    );
  }
}

export default Trade;
