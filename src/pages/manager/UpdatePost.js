import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPost, updatePost } from '../../services/api/posts';

import ManagerNavBar from '../../components/manager/ManagerNavBar';

const UpdatePost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [skills, setSkills] = useState('');
  const [link, setLink] = useState('');
  const [date, setDate] = useState('');
  const [gitlink, setGitlink] = useState('');
  const [iconImg, setIconImg] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const post = await getPost(id);
        setTitle(post.title);
        setDescription(post.description);
        setImage(post.image);
        setSkills(post.skills.join(', '));
        setLink(post.link);
        setDate(post.date);
        setGitlink(post.gitlink);
        setIconImg(post.iconImg);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };
    fetchPost();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedPost = {
      title,
      description,
      image,
      skills: skills.split(',').map(skill => skill.trim()),
      link,
      date,
      gitlink,
      iconImg
    };
    try {
      await updatePost(id, updatedPost);
      navigate('/manager/posts');
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  return (
    <div>
      <ManagerNavBar />

      <h1>Update Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Skills (comma-separated)"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Project Link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          required
        />
        <input
          type="date"
          placeholder="Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="GitHub Link"
          value={gitlink}
          onChange={(e) => setGitlink(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Icon Image URL"
          value={iconImg}
          onChange={(e) => setIconImg(e.target.value)}
          required
        />
        <button type="submit">Update Post</button>
      </form>
    </div>
  );
};

export default UpdatePost;
