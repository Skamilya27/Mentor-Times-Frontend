import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar'
import './App.css'
import Footer from './components/Footer';
import Home from './pages/Home';
// import CreatePost from './pages/CreatePost';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import PostDetail from './pages/PostDetail';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import authService from './services/auth';
import { login, logout } from './store/authSlice';

function App() {
  const[loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    // authService.isAuthenticated()
    //   .then((res) => {
    //     if(res) {
    //       dispatch(login({res}));
    //     } else {
    //       dispatch(logout());
    //     }
    //   })
    //   .finally(() => setLoading(false));
    setLoading(false);
  }, []);

  return !loading ? (
    <div id='main'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<PostDetail />} />

        {/* TODO: implement editor */}
        {/* <Route path='/create-post' element={<CreatePost />} /> */}
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/about-us' element={<AboutUs />} />
      </Routes>
      <Footer />
    </div>
  ) : (null);

  // return (
  //   <div id='main'>
  //     <Navbar />
  //     <Routes>
  //       <Route path='/' element={<Home />} />
  //       <Route path='/:id' element={<PostDetail />} />

  //       {/* TODO: implement editor */}
  //       {/* <Route path='/create-post' element={<CreatePost />} /> */}
  //       <Route path='/contact-us' element={<ContactUs />} />
  //       <Route path='/about-us' element={<AboutUs />} />
  //     </Routes>
  //     <Footer />
  //   </div>
  // )
}

export default App
