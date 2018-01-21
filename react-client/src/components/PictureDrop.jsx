import React from 'react';
import Dropzone from 'react-dropzone';

const DropZone = ({ imageDrop, uploadedFileCloudinaryUrl }) => {
  return (
    <div className="dropzone">
      <Dropzone
        multiple={false}
        accept="image/*"
        onDrop={imageDrop} >
        <img src={uploadedFileCloudinaryUrl} />
        <p>Drop an image or click to select a file to upload.</p>
      </Dropzone>
    </div>
  );
};


export default DropZone;
