import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store.js';
import App from './App.jsx';
import Home from './pages/Home.jsx';
// import Login from './pages/Login.jsx';
import ContactUs from './pages/ContactUs.jsx';
import AboutUs from './pages/AboutUs.jsx';
import PostDetail from './pages/PostDetail.jsx';
import CreatePost from './pages/CreatePost.jsx';
import AuthLayout from './components/AuthLayout.jsx'; 

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      // { path: '/login', element: <Login /> },
      { path: '/contact-us', element: <ContactUs /> },
      { path: '/about-us', element: <AboutUs /> },
      { path: '/:id', element: <PostDetail /> },
      { 
        path: '/create-post', 
        element: (
          <AuthLayout> 
            <CreatePost allowedRoles={['admin', 'author']} /> 
          </AuthLayout>
        ) 
      }, // Protected route
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
