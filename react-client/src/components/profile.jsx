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
      foodName: '',
      foodDescription: '',
      foodPic: '',
      trades: [],
    };
    this.clickHandler = this.clickHandler.bind(this);
    this.updateProfile = this.updateProfile.bind(this);
    this.update = this.update.bind(this);
    this.getTradesByUsername = this.getTradesByUsername.bind(this);
    this.editProfile = this.editProfile.bind(this);
  }

  clickHandler() {
    /* If user !== username passed */
    console.log(this.state.showEditPage);
    this.editProfile(this.state.id, this.state.name, this.state.bio, this.state.email, this.state.userName);
    this.setState({
      showEditPage: !this.state.showEditPage,
    });
  }

  updateProfile(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  update() {
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

  submitTrade(event) {
    event.preventDefault();
    let name = this.refs.name.value;
    let description = this.refs.description.value;
    let picture = this.refs.picture.value;
  }

  getTradesByUsername(username) {
    axios({
      method: 'GET',
      url: `/trade/username/${username}`
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
      url: '/users/edit',
      data: {
        id: id,
        name: name,
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

  componentDidMount() {
    this.update();
    this.getTradesByUsername(this.state.username);
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
          <form onSubmit={this.submitTrade.bind(this)}>
            <h2>Add Trade</h2>
            Food Name: <input type="text" placeholder="FoodName" ref='name' /> <br />
            Food Description: <input type="text" placeholder="Descrpiton" ref="description" /> <br />
            Add Picture: <input type="text" placeholder="Picture" ref="picture" /> <br />
          <button type="submit">Trade Post</button>
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
