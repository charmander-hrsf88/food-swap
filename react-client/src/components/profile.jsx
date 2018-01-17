import React from 'react';
import axios from 'axios';
import EditPage from './EditPage.jsx';
import Trades from './trades.jsx';
import dummyData from '../dummyData.js';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: dummyData.friends[0],
      showEditPage: true,
      bio: 'I love to cook',
      email: 'dummydata@gmail.com ',
      userName: 'Hayden',
      picture: dummyData.friends[0].user_picture,
    };
    this.getById = this.getById.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.updateProfile = this.updateProfile.bind(this);
  }

  getById(id) {
    axios({
      method: 'GET',
      url: `/api/users/${id}`,
    }).then((data) => {
      this.setState({
        profile: data,
        bio: data.bio,
        email: data.email,
        userName: data.name,
        picture: data.picture,
      });
    }).catch((error) => {
      console.log(error);
    });
  }

  clickHandler() {
    console.log(this.state.showEditPage);
    /* If user !== username passed */
    this.setState({
      showEditPage: !this.state.showEditPage,
    });
  }
  updateProfile(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  render() {
    return (
      this.state.showEditPage ?
        /* Own Profile */
        <div className="profile">
          <div className="userProfile">
            <h2 id="profileName" >{this.state.userName}</h2>
            <img id="profilePic" alt={this.state.userName} src={this.state.picture} /> <br />
            <p>
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
          <EditPage picture={this.state.picture} username={this.state.userName} submit={this.clickHandler} updateProfile={this.updateProfile} email={this.state.email} bio={this.state.bio} />
        </div>
    );
  }
}

export default Profile;
