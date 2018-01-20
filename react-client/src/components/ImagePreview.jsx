import React from 'react';

const ImagePreview = ({uploadedFileCloudinaryUrl, uploadedFile}) => {
  return (
    <div>
      {uploadedFileCloudinaryUrl === '' ? null :
      <div>
        {console.log(uploadedFile)}
        {console.log(uploadedFileCloudinaryUrl)}
        <p>{uploadedFile}</p>
        <img src={uploadedFileCloudinaryUrl} />
      </div>}
    </div>
  );
}



export default ImagePreview;
