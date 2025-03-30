import Navbar from './components/Header/Navbar'
import './App.css'
import Footer from './components/Footer/Footer';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

function App() {
  const[loading, setLoading] = useState(true);

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
    <div id="main">
      <Navbar />
        <Outlet /> 
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
