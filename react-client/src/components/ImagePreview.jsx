import React from 'react';

const ImagePreview = ({uploadedFileCloudinaryUrl, uploadedFile}) => {
  return (
    <div>
      {uploadedFileCloudinaryUrl === '' ? null :
      <div className="preview">
        <h2>Preview</h2>
        {console.log(uploadedFile)}
        {console.log(uploadedFileCloudinaryUrl)}
        <p>{uploadedFile}</p>
        <img src={uploadedFileCloudinaryUrl} />
      </div>}
    </div>
  );
}



export default ImagePreview;
