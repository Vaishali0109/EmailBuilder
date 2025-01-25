import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Editor = () => {
  const [layout, setLayout] = useState('');
  const [formData, setFormData] = useState({ title: '', content: '', footer: '' });

  useEffect(() => {
    axios.get('https://emailbuilder-ncqu.onrender.com/api/getEmailLayout')
      .then(res => setLayout(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    axios.post('https://emailbuilder-ncqu.onrender.com/api/uploadEmailConfig', formData)
      .then(() => alert('Template saved successfully'))
      .catch(err => console.log(err));
  };

  return (
    <div>
      <textarea value={layout} readOnly />
      <input name="title" onChange={handleChange} placeholder="Title" />
      <textarea name="content" onChange={handleChange} placeholder="Content" />
      <input name="footer" onChange={handleChange} placeholder="Footer" />
      <button onClick={handleSubmit}>Save</button>
    </div>
  );
};

export default Editor;
