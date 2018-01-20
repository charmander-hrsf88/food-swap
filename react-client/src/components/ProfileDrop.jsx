import React from 'react';
import Dropzone from 'react-dropzone';

const ProfileDrop = ({ imageDrop, uploadedFileCloudinaryUrl }) => {
  return (
    <div className="dropzone">
      <Dropzone
        multiple={false}
        accept="image/*"
        onDrop={imageDrop} >
        { uploadedFileCloudinaryUrl !== '' ? <img src={uploadedFileCloudinaryUrl} width='200px' height='200px'/> :
        <p>Drop an image or click to select a file to upload.</p> }
      </Dropzone>
    </div>
  );
};


export default ProfileDrop;
