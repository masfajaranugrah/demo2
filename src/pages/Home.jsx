import React from 'react'
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
  return (
    <div>
      <Navbar/>
      <Hero/>
       <About/>
       <Fitur/>
      <Process/>
      <Jasa/>
      <Preview/>   
      <Contact/>
      <Footer/>
     </div>
  )
}

export default Home
