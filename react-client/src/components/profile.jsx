import React from 'react';
import axios from 'axios';
import EditPage from './EditPage.jsx';
import UserProfile from './userProfile.jsx';
import dummyData from '../dummyData.js';
import userInfo from '../axiosCalls.jsx';
import ProfileList from './ProfileList.jsx';
import Photos from './Photos.jsx';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import ImagePreview from './ImagePreview.jsx';
import DropZone from './PictureDrop.jsx';
import {CLOUDINARY_UPLOAD_PRESET, CLOUDINARY_UPLOAD_URL} from '../config/config.js';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: this.props.user,
      noPic: 'https://u.o0bc.com/avatars/no-user-image.gif',
      showEditPage: false,
      bio: 'I love to cook',
      email: 'dummydata@gmail.com ',
      username: 'Hayden',
      id: '',
      name: '',
      picture: dummyData.friends[0].user_picture,
      foodName: 'Food Name',
      foodDescription: 'Food Description',
      foodPic: '',
      trades: [],
      userDishes: [],
      uploadedFileCloudinaryUrl: '',
      uploadeFile: '',
      uploadeProfileFile: '',
      uploadedProFileCloudinaryUrl: ''
    };
    this.clickHandler = this.clickHandler.bind(this);
    this.updateProfile = this.updateProfile.bind(this);
    this.update = this.update.bind(this);
    this.editProfile = this.editProfile.bind(this);
    this.submitDish = this.submitDish.bind(this);
    this.addFood = this.addFood.bind(this);
    this.onImageDrop = this.onImageDrop.bind(this);
    this.handleImageUpload = this.handleImageUpload.bind(this);
    this.onProfileDrop = this.onProfileDrop.bind(this);
    this.handleProfileUpload = this.handleProfileUpload.bind(this);
  }

  clickHandler() {
    /* If user !== username passed */
    console.log(this.state.showEditPage);
    this.editProfile(this.state.id, this.state.bio, this.state.name, this.state.email, this.state.username, this.state.uploadedProFileCloudinaryUrl);
    this.setState({
      showEditPage: !this.state.showEditPage,
    });
  }

  updateProfile(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  update() {
    console.log(this.state.profile);
    this.setState({
      bio: this.state.profile.bio,
      email: this.state.profile.email,
      username: this.state.profile.username,
      picture: this.state.profile.picture,
      name: this.state.profile.name,
      id: this.state.profile.id,
      showEditPage: !this.state.showEditPage,
    });
  }

  submitDish(event) {
    event.preventDefault();
    let name = this.refs.name.value;
    let description = this.refs.description.value;
    let picture = this.state.uploadedFileCloudinaryUrl;
    this.addFood(name, description, picture, this.state.id);
    this.refs.name.value = '';
    this.refs.description.value = '';
    this.setState({uploadedFileCloudinaryUrl: ''})
  }

  addFood(dishname, description, picture, id) {
    axios({
      method: 'POST',
      url: 'api/food',
      data: {
        dishname: dishname,
        description: description,
        userId: id,
        picture: picture
      }
    }).then((result) => {
      console.log(result);
    }).catch((e) => {
      console.log('Error', e);
    });
  }

  editProfile(id, bio, name, email, username, picture) {
    axios({
      method: 'POST',
      url: 'api/users/edit',
      data: {
        userId: id,
        bio: bio,
        name: name,
        email: email,
        username: username,
        picture: picture,
      },
    }).then((results) => {
      console.log(results);
    }).catch((e) => {
      console.log('Error', e, this);
    });
  }

  onImageDrop(files) {
    this.setState({ uploadeFile: files[0] })
    this.handleImageUpload(files[0]);
  }

  onProfileDrop(files) {
    this.setState({ uploadeProfileFile: files[0] })
    this.handleProfileUpload(files[0]);
  }

  handleProfileUpload(file) {
    const upload = request.post(CLOUDINARY_UPLOAD_URL).field('upload_preset', CLOUDINARY_UPLOAD_PRESET).field('file', file);
    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({ uploadedProFileCloudinaryUrl: response.body.secure_url });
      }
    });
  }

  handleImageUpload(file) {
    const upload = request.post(CLOUDINARY_UPLOAD_URL).field('upload_preset', CLOUDINARY_UPLOAD_PRESET).field('file', file);
    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }
      if (response.body.secure_url !== '') {
        this.setState({ uploadedFileCloudinaryUrl: response.body.secure_url });
      }
    });
  }

  componentDidMount() {
    this.update();
  }

  render() {
    return (<div>
      <div className="profile">
        <div className="info">
          {
            this.state.showEditPage
              ?
              /* Own Profile */
              <UserProfile name={this.state.name} picture={this.state.picture} username={this.state.username} noPic={this.state.noPic} email={this.state.email} bio={this.state.bio} submit={this.clickHandler} />
              :
              /* Edit Page */
              <EditPage picture={this.state.picture} username={this.state.username} submit={this.clickHandler} updateProfile={this.updateProfile} email={this.state.email} bio={this.state.bio} noPic={this.state.noPic} reset={this.update} imageDrop={this.onProfileDrop} uploadedFileCloudinaryUrl={this.state.uploadedProFileCloudinaryUrl}/>
          }
        </div>
        <div className="postTrades">
          <form onSubmit={this.submitDish}>
            <h2>Add Dish</h2>
            Dish Name:
            <input type="text" placeholder={this.state.foodName} ref='name' />
            <br />
            Dish Description:
            <input type="text" placeholder={this.state.foodDescription} ref="description" />
            <br />
            <DropZone imageDrop={this.onImageDrop} />
            <button type="submit">Add Food</button>
          </form>
          <ImagePreview uploadedFileCloudinaryUrl={this.state.uploadedFileCloudinaryUrl} uploadedFile={this.state.uploadedFile} />
        </div>
      </div>
      <div className="feed">
        <Photos />
        <ProfileList />
      </div>
    </div>);
  }
}

export default Profile;
