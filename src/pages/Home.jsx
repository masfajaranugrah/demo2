import React,{useEffect, lazy} from 'react'
import { useLocation } from 'react-router-dom';
 
import Navbar from './../Feature/Navbar';
import Hero from '../Feature/Hero';
import About from '../Feature/About';
import Fitur from '../Feature/Fitur';
 import Process from '../Feature/Process';
import Footer from '../Feature/Footer';
import Jasa from '../Feature/Jasa';
import Preview from '../Feature/Preview';
import Contact from '../Feature/Contact';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const element = document.querySelector(`[id="${path.slice(1)}"]`);
    if (element) {
      const headerOffset = 70; // Sesuaikan dengan tinggi header tetap Anda
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, [location]);
  return (
    <div>
      <Navbar/>
      <Hero id="home"/>
       <About id="about"/>
       <Fitur id="services"/>
      <Process/>
      <Jasa  id="product"/>
      <Preview id="testimoni"/>   
      <Contact id="contact"/>
      <Footer/>
     </div>
  )
}

export default Home
