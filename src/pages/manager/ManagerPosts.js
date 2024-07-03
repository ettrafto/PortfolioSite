import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPosts, deletePost } from '../../services/api/posts';
import ManagerNavBar from '../../components/manager/ManagerNavBar';

const ManagerPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts();
      setPosts(posts);
    };
    fetchPosts();
  }, []);

  const handleDelete = async (_id) => {
    try {
      await deletePost(_id);
      setPosts(posts.filter(post => post._id !== _id));
    } catch (error) {
      console.error("Failed to delete the post:", error);
    }
  };

  return (
    <div>
      <ManagerNavBar />
      <h1>Manage Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post._id}>
            {post.title}
            <Link to={`/manager/update-post/${post._id}`}>Edit</Link>
            <button onClick={() => handleDelete(post._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManagerPosts;
