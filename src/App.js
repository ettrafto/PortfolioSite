import React from 'react';
import { useLocation, useRoutes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { AuthProvider } from './context/AuthContext';

import './App.css'
import NavBar from './components/nav/NavBar';
import Home from './pages/Home';
/* import HomeAlt from './pages/Home-alt'; */
import Work from './pages/Work';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Mastermind from './pages/live-projects/mastermind/Mastermind';
/*
import Manager from './pages/manager/Manager';
import PrivateRoute from './components/manager/PrivateRoute';
import ManagerBlogs from './pages/manager/ManagerBlogs';
import ManagerAddBlog from './pages/manager/ManagerAddBlog';
import UpdateBlog from './pages/manager/UpdateBlog';
import ManagerPosts from './pages/manager/ManagerPosts';
import ManagerAddPost from './pages/manager/ManagerAddPost';
import UpdatePost from './pages/manager/UpdatePost';
*/




/*
TODO:
- Add a loading screen for the app
- Refactor Cards + Add featured projects section to the home page
- add mobile support
- Update project data
- finish home page
- Add animations to all pages
- add interactive perlin circle


*/
const App = () => {
  const location = useLocation();

  const element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/work", element: <Work /> },
    { path: "/about", element: <About /> },
    { path: "/blog", element: <Blog /> },
    { path: "/contact", element: <Contact /> },
    { path: "/mastermind", element: <Mastermind /> },
    /*
    { path: "/manager", element: <Manager /> },
    { path: "/manager/blog", element: <PrivateRoute element={<ManagerBlogs />} /> },
    { path: "/manager/add-blog", element: <PrivateRoute element={<ManagerAddBlog />} /> },
    { path: "/manager/posts", element: <PrivateRoute element={<ManagerPosts />} /> },
    { path: "/manager/add-post", element: <PrivateRoute element={<ManagerAddPost />} /> },
    { path: "/manager/update-post/:id", element: <PrivateRoute element={<UpdatePost />} /> },
    { path: "/manager/update-blog/:id", element: <PrivateRoute element={<UpdateBlog />} /> },
     */
  ]);

  if (!element) return null;

  return (
    <AuthProvider>
      <div className="App">
        <NavBar />
        <AnimatePresence mode="wait" initial={false}>
          {React.cloneElement(element, { key: location.pathname })}
        </AnimatePresence>
      </div>
    </AuthProvider>
  );
};

export default App;
