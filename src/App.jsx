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
}

export default App
