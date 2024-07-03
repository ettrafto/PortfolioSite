import React, { useState } from 'react';
import { createPost } from '../../services/api/posts';

import ManagerNavBar from '../../components/manager/ManagerNavBar';

const ManagerAddPost = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [skills, setSkills] = useState('');
  const [link, setLink] = useState('');
  const [date, setDate] = useState('');
  const [gitlink, setGitlink] = useState('');
  const [iconImg, setIconImg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const post = {
      title,
      description,
      image,
      skills: skills.split(',').map(skill => skill.trim()), // Convert comma-separated skills to an array
      link,
      date,
      gitlink,
      iconImg
    };
    try {
      await createPost(post);
      setTitle('');
      setDescription('');
      setImage('');
      setSkills('');
      setLink('');
      setDate('');
      setGitlink('');
      setIconImg('');
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div>
      <ManagerNavBar />

      <h1>Add Post</h1>
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
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
};

export default ManagerAddPost;
