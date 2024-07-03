import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/nav/NavBar';
import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';
import Blog from './pages/Blog';
import Manager from './pages/manager/Manager';

import PrivateRoute from './components/manager/PrivateRoute';
import ManagerBlogs from './pages/manager/ManagerBlogs';
import ManagerAddBlog from './pages/manager/ManagerAddBlog';
import UpdateBlog from './pages/manager/UpdateBlog';
import ManagerPosts from './pages/manager/ManagerPosts';
import ManagerAddPost from './pages/manager/ManagerAddPost';
import UpdatePost from './pages/manager/UpdatePost';

import { AuthProvider } from './context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/manager" element={<Manager />} />
            <Route path="/manager/blog" element={<PrivateRoute element={<ManagerBlogs />} />} />
            <Route path="/manager/add-blog" element={<PrivateRoute element={<ManagerAddBlog />} />} />
            <Route path="/manager/posts" element={<PrivateRoute element={<ManagerPosts />} />} />
            <Route path="/manager/add-post" element={<PrivateRoute element={<ManagerAddPost />} />} />
            <Route path="/manager/update-post/:id" element={<PrivateRoute element={<UpdatePost />} />} />
            <Route path="/manager/update-blog/:id" element={<PrivateRoute element={<UpdateBlog />} />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
