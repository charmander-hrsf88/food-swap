import React from 'react';
import ProfileDrop from './ProfileDrop.jsx';

const EditPage = ({ picture, username, submit, updateProfile, email, bio, noPic, reset, imageDrop, uploadedFileCloudinaryUrl }) => {
  return (
    <div className="editPage">
      <h2> Edit Profile: </h2>
      <ProfileDrop imageDrop={imageDrop} uploadedFileCloudinaryUrl={uploadedFileCloudinaryUrl} noPic={noPic} picture={picture}/>
      Username: <input id="userName" rows="1" value={username} onChange={updateProfile} /> <br />
      Email: <input type="email" id="email" rows="1" value={email} onChange={updateProfile} /> <br />
      Bio: <br />
      <textarea id="bio" rows="3" value={bio} onChange={updateProfile} placeholder="Tell us about yourself"/>  <br />
      <button type="submit" onClick={() => { submit(); }} > submit changes </button>
      <button onClick={() => { reset(); }} > reset </button>
    </div>
  );
};

export default EditPage;
