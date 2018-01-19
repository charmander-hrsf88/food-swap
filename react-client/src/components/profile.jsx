import React from 'react';
import axios from 'axios';
import EditPage from './EditPage.jsx';
import UserProfile from './userProfile.jsx';
import dummyData from '../dummyData.js';
import userInfo from '../axiosCalls.jsx';
import ProfileList from './ProfileList.jsx';
import Photos from './Photos.jsx';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: this.props.user,
      noPic: 'https://u.o0bc.com/avatars/no-user-image.gif',
      showEditPage: false,
      bio: 'I love to cook',
      email: 'dummydata@gmail.com ',
      userName: 'Hayden',
      id: '',
      name: '',
      picture: dummyData.friends[0].user_picture,
      foodName: 'Food Name',
      foodDescription: 'Food Description',
      foodPic: '',
      trades: [],
      userDishes: [],
    };
    this.clickHandler = this.clickHandler.bind(this);
    this.updateProfile = this.updateProfile.bind(this);
    this.update = this.update.bind(this);
    this.getTradesByUsername = this.getTradesByUsername.bind(this);
    this.editProfile = this.editProfile.bind(this);
    this.submitDish = this.submitDish.bind(this);
    this.addFood = this.addFood.bind(this);
    this.getFoodByUserId = this.getFoodByUserId.bind(this);
  }

  clickHandler() {
    /* If user !== username passed */
    console.log(this.state.showEditPage);
    this.editProfile(this.state.id, this.state.bio, this.state.email, this.state.userName);
    this.setState({
      showEditPage: !this.state.showEditPage,
    });
  }

  updateProfile(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  update() {
    console.log(this.state.profile);
    this.setState({
      bio: this.state.profile.user.bio,
      email: this.state.profile.user.email,
      userName: this.state.profile.user.username,
      picture: this.state.profile.user.picture,
      name: this.state.profile.user.name,
      id: this.state.profile.user.id,
      showEditPage: !this.state.showEditPage,
    });
  }

  submitDish(event) {
    event.preventDefault();
    let name = this.refs.name.value;
    let description = this.refs.description.value;
    let picture = this.refs.picture.value;
    this.addFood(name, description, this.state.id);
    this.refs.name.value = '';
    this.refs.description.value = '';
  }

  addFood(dishname, description, id) {
    axios({
      method: 'POST',
      url: 'api/food',
      data: {
        dishname: dishname,
        description: description,
        userId: id
      }
    })
    .then((result) => {
      console.log(result);
    })
    .catch((e) => {
      console.log('Error', e);
    });
  }

  getTradesByUsername(username) {
    axios({
      method: 'GET',
      url: `api/trade/username/${username}`
    })
    .then((results) => {
      console.log(results)
    })
    .catch((e) => {
      console.log('err', e)
    })
  }

  editProfile(id, bio, name, email, username){
    axios({
      method: 'POST',
      url: 'api/users/edit',
      data: {
        userId: id,
        bio: bio,
        email: email,
        username: username
      }
    })
    .then((results) => {
      console.log(results);
    })
    .catch((e) => {
      console.log('Error', e, this);
    })
  }

  getFoodByUserId(id) {
    axios({
      method: 'GET',
      url: `/food/userId/${id}`
    })
    .then((results) => {
      console.log(results);
    })
    .catch((e) => {
      console.log('Error', e);
    })
  }

  componentDidMount() {
    this.update();
    this.getFoodByUserId(this.state.id);
  }

  render() {
    return (
      <div>
        <div className="info">
          {this.state.showEditPage ?
            /* Own Profile */
            <UserProfile name={this.state.name} picture={this.state.picture} username={this.state.userName} noPic={this.state.noPic} email={this.state.email} bio={this.state.bio} submit={this.clickHandler} /> :
            /* Edit Page */
            <EditPage picture={this.state.picture} username={this.state.userName} submit={this.clickHandler} updateProfile={this.updateProfile} email={this.state.email} bio={this.state.bio} noPic={this.state.noPic} reset={this.update} />}
        </div>
        <div className="postTrades">
          <form onSubmit={this.submitDish.bind(this)}>
            <h2>Add Dish</h2>
            Dish Name: <input type="text" placeholder={this.state.foodName} ref='name' /> <br />
            Dish Description: <input type="text" placeholder={this.state.foodDescription} ref="description" /> <br />
            Add Picture: <input type="text" placeholder="Picture" ref="picture" /> <br />
            <button type="submit">Add Food</button>
          </form>
          <div className="profileList">
            <ProfileList />
          </div>
        </div>
        <div className="photos">
          <Photos />
        </div>
      </div>
    );
  }
}

export default Profile;
