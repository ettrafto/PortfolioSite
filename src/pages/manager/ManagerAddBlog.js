import React, { useState } from 'react';
import { createBlog } from '../../services/api/blogs';

import ManagerNavBar from '../../components/manager/ManagerNavBar';


const ManagerAddBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createBlog({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <div>
      <ManagerNavBar />

      <h1>Add Blog</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button type="submit">Add Blog</button>
      </form>
    </div>
  );
};

export default ManagerAddBlog;
