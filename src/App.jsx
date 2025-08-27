import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';


import Hero from './comp/Hero'
import About from './comp/About'
import College from './comp/College'
import HeroM from './comp/HeroMobile'
import Footer from './comp/Footer';
import Events from './comp/page/Events';

function Home() {
  const mobileBreakpoint = 600;

  const [isMobile, setIsMobile] = useState(window.innerWidth < mobileBreakpoint);


  useEffect(() => {

    const handleResize = () => {
      setIsMobile(window.innerWidth < mobileBreakpoint);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



  return (
    <>

      {isMobile ? <HeroM /> : <Hero />}
      <About></About>
      <College></College>
      <Footer></Footer>

    </>
  )
}


function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Events" element={<Events />} />


      </Routes>

    </Router>
  )
}
export default App
