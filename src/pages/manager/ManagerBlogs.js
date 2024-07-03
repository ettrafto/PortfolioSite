import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getBlogs, deleteBlog } from '../../services/api/blogs';
import ManagerNavBar from '../../components/manager/ManagerNavBar';

const ManagerBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const blogs = await getBlogs();
      setBlogs(blogs);
    };
    fetchBlogs();
  }, []);
  console.log(blogs)

  const handleDelete = async (_id) => {
    await deleteBlog(_id);
    setBlogs(blogs.filter(blog => blog._id !== _id));
  };

  return (
    <div>
      <ManagerNavBar />
      <h1>Manage Blogs</h1>
      <ul>
        {blogs.map(blog => (
          <li key={blog._id}>
            {blog.title}
            <Link to={`/manager/update-blog/${blog._id}`}>Edit</Link>
            <button onClick={() => handleDelete(blog._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManagerBlogs;
