import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getBlog, updateBlog } from '../../services/api/blogs';

import ManagerNavBar from '../../components/manager/ManagerNavBar';


const UpdateBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const blog = await getBlog(id);
        setTitle(blog.title);
        setDate(blog.date);
        setContent(blog.content);
      } catch (error) {
        console.error('Error fetching blog:', error);
      }
    };
    fetchBlog();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedBlog = {
      title,
      date,
      content
    };
    try {
      await updateBlog(id, updatedBlog);
      navigate('/manager/blog');
    } catch (error) {
      console.error('Error updating blog:', error);
    }
  };
  console.log(date)
  return (
    <div>
      <ManagerNavBar />

      <h1>Update Blog</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="date"
          placeholder="Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button type="submit">Update Blog</button>
      </form>
    </div>
  );
};

export default UpdateBlog;
