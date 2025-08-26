import { useState, useEffect } from 'react';


import Hero from './comp/Hero'
import About from './comp/About'
import College from './comp/College'
import HeroM from './comp/HeroMobile'

function App() {
  const mobileBreakpoint = 768;

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

    </>
  )
}

export default App
