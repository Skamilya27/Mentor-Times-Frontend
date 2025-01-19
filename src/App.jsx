import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar'
import './App.css'
import Footer from './components/Footer';
import Home from './pages/Home';
// import CreatePost from './pages/CreatePost';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import PostDetail from './pages/PostDetail';

function App() {

  return (
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
  )
}

export default App
