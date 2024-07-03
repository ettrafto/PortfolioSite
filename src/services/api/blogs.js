import axios from 'axios';

const API_URL = 'http://localhost:5000/api/blogs';

export const getBlogs = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getBlog = async (_id) => {
  const response = await axios.get(`${API_URL}/${_id}`);
  return response.data;
};

export const createBlog = async (blog) => {
  const response = await axios.post(API_URL, blog);
  return response.data;
};

export const updateBlog = async (_id, blog) => {
  const response = await axios.patch(`${API_URL}/${_id}`, blog);
  return response.data;
};

export const deleteBlog = async (_id) => {
  const response = await axios.delete(`${API_URL}/${_id}`);
  return response.data;
};
