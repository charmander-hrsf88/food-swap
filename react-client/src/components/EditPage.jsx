import React from 'react';

const EditPage = ({ picture, username, submit, updateProfile, email, bio }) => {
  return (
    <div id="editPage">
      <h2> Edit Profile: </h2>
      {false && <img alt={username} src={picture} />}
      Username: <input id="userName" rows="1" value={username} onChange={updateProfile} /> <br />
      Email: <input type="email" id="email" rows="1" value={email} onChange={updateProfile} /> <br />
      Bio: <br />
      <textarea id="bio" rows="3" value={bio} onChange={updateProfile} />  <br />
      <button type="submit" onClick={() => { submit(); }} > submit changes </button>
    </div>
  );
};

export default EditPage;
