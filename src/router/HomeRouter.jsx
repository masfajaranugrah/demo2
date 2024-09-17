import React from 'react'
import Home from '../pages/Home';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
const HomeRouter = () => {
  return (
    <div>
       <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/about" element={<Home />} />
        {/* <Route path="/about" element={<Home />} /> */}
        <Route path="/testimoni" element={<Home />} />
        <Route path="/visi&misi" element={<Home />} />
        <Route path="/pricing" element={<Home />} />
         <Route path="/services" element={<Home />} />
         <Route path="/contact" element={<Home />} />
 
      
      </Routes>
    </Router>
    </div>
  )
}

export default HomeRouter
