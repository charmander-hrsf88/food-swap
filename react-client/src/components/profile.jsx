import React from 'react';
import axios from 'axios';
import dummyData from '../dummyData.js'

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: dummyData.friends[0],
      showTextField: true,
      bio: 'I love to cook',
    };
    this.getById = this.getById.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.updateBio = this.updateBio.bind(this);
  }

  getById(id) {
    axios.get('/user', {
      params: { id: id }
    }).then((data) => {
      this.setState({
        profile: data,
        bio: data.bio,
      });
    }).catch((error) => {
      console.log(error);
    });
  }

  clickHandler() {
    this.setState({
      showTextField: !this.state.showTextField,
    });
  }
  updateBio(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  render() {
    return (
      <div id="userProfile">
        <h2>Profile: </h2>
        {false && <img alt={this.state.profile.user_name} src={this.state.profile.user_picture} />}
        Username: {this.state.profile.user_name} <br />
        email: {this.state.profile.user_email} <br />
      Bio:{' '}
        {this.state.showTextField ? this.state.bio :
        <textarea id="bio" rows="2" value={this.state.bio} onChange={this.updateBio}>{this.state.bio}</textarea> }{' '}
        <button type="submit" onClick={() => { this.clickHandler(); }}> edit</button>
      </div>
    );
  }
}

export default Profile;
