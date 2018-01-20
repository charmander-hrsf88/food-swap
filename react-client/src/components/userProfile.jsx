import React from 'react';

const UserProfile = ({ name, picture, username, noPic, email, bio, submit }) => (
  <div className="bio">
    <h2 id="profileName" > {name} </h2>
    { picture ? <img id="profilePic" alt={username} src={picture} /> : <img id="profilePic" alt={username} src={noPic} /> } <br />
    <p>
      Username: {username} <br />
      Email: {email} <br />
      Bio: {bio} <br />
      <button type="submit" onClick={() => { submit(); }}> Edit Profile </button>
    </p>
  </div>
);


export default UserProfile;
