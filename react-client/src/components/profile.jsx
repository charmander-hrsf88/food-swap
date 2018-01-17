import React from 'react';
import axios from 'axios';
import EditPage from './EditPage.jsx';
import Trades from './trades.jsx';
import dummyData from '../dummyData.js';
import userInfo from '../axiosCalls.jsx';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: this.props.user,
      noPic: 'https://heatherchristenaschmidt.files.wordpress.com/2011/09/facebook_no_profile_pic2-jpg.gif',
      showEditPage: false,
      bio: 'I love to cook',
      email: 'dummydata@gmail.com ',
      userName: 'Hayden',
      name: '',
      picture: dummyData.friends[0].user_picture,
      foodName: '',
      foodDescription: '',
      foodPic: '',
    };
    this.clickHandler = this.clickHandler.bind(this);
    this.updateProfile = this.updateProfile.bind(this);
    this.update = this.update.bind(this);
  }

  clickHandler() {
    /* If user !== username passed */
    console.log(this.state.showEditPage);
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
      showEditPage: !this.state.showEditPage,
    });
  }

  componentDidMount() {
    this.update();
  }
  render() {
    return (
      this.state.showEditPage ?
        /* Own Profile */
        <div className="profile">
          <div className="userProfile">
            <h2 id="profileName" >{this.state.name}</h2>
            { this.state.picture ? <img id="profilePic" alt={this.state.userName} src={this.state.picture} /> : <img id="profilePic" alt={this.state.userName} src={this.state.noPic} /> } <br />
            <p>
              Username: {this.state.userName} <br />
              Email: {this.state.email} <br />
              Bio: {this.state.bio} <br />
              <button type="submit" onClick={() => { this.clickHandler(); }}> Edit Profile </button>
            </p>
          </div>
          <div className="profileTrades">
            <Trades />
          </div>
        </div>
        :
        /* Edit Page */
        <div id="editProfile">
          <EditPage picture={this.state.picture} username={this.state.userName} submit={this.clickHandler} updateProfile={this.updateProfile} email={this.state.email} bio={this.state.bio} noPic={this.state.noPic} reset={this.update} />
        </div>
    );
  }
}

export default Profile;
