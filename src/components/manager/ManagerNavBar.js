import React from 'react';
import { Link } from 'react-router-dom';
import '../nav/NavBar.css';

const ManagerNavBar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/manager/blog">Manage Blogs</Link></li>
        <li><Link to="/manager/add-blog">Add Blog</Link></li>
        <li><Link to="/manager/posts">Manage Posts</Link></li>
        <li><Link to="/manager/add-post">Add Post</Link></li>
      </ul>
    </nav>
  );
};

export default ManagerNavBar;
