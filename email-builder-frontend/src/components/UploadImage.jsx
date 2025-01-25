import React, { useState } from 'react';
import axios from 'axios';

const UploadImage = () => {
  const [file, setFile] = useState(null);

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('image', file);

    axios.post('https://emailbuilder-ncqu.onrender.com/api/uploadImage', formData)
      .then(res => alert(`Image uploaded: ${res.data.imageUrl}`))
      .catch(err => console.log(err));
  };

  return (
    <div>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload Image</button>
    </div>
  );
};

export default UploadImage;
