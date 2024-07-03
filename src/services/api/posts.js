import axios from 'axios';

const API_URL = 'http://localhost:5000/api/posts';

export const getPosts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getPost = async (_id) => {
  const response = await axios.get(`${API_URL}/${_id}`);
  return response.data;
};

export const createPost = async (post) => {
  const response = await axios.post(API_URL, post);
  return response.data;
};

export const updatePost = async (_id, post) => {
  const response = await axios.patch(`${API_URL}/${_id}`, post);
  return response.data;
};

export const deletePost = async (_id) => {
  const response = await axios.delete(`${API_URL}/${_id}`);
  return response.data;
};
