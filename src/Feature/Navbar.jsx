import React, { useState } from 'react';

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  // This will toggle the collapse state
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  // Close the navigation menu after clicking a link
  const handleLinkClick = () => {
    setIsCollapsed(true);
  };

  return (
    <div>
      <nav className="navbar" id="navbar">
        <div className="container relative flex flex-wrap items-center justify-between">
          <a className="navbar-brand md:me-8 nav-items" href="index.html">
            <h1 className='text-[30px] nav-link font-bold'>Demo1</h1>
          </a>

          <div className="nav-icons flex items-center lg_992:order-2 ms-auto md:ms-8">
        

            {/* Animated burger icon */}
            <div
              className={`burger ms-2 sm:block lg:hidden xl:hidden ${!isCollapsed ? 'open' : ''}`}
              onClick={toggleCollapse}
            >
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>

          {/* Navigation menu */}
          <div
            className={`navigation lg_992:order-1 lg_992:flex ms-auto ${isCollapsed ? 'hidden' : ''}`}
            id="menu-collapse"
          >
            <ul className="navbar-nav nav-light sidebar-nav" id="navbar-navlist">
              <li className="nav-item">
                <a className="nav-link text-[18px] font-bold active" href="/home" onClick={handleLinkClick}>Beranda</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-[18px] font-bold" href="/about" onClick={handleLinkClick}>Tentang Kami</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-[18px] font-bold" href="/services" onClick={handleLinkClick}>Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-[18px] font-bold" href="/visi&misi" onClick={handleLinkClick}>Visi & Misi</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-[18px] font-bold" href="/testimoni" onClick={handleLinkClick}>Testimonial</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-[18px] font-bold" href="/pricing" onClick={handleLinkClick}>Pricing</a>
              </li>
          
              <li className="nav-item">
                <a className="nav-link text-[18px] font-bold" href="/contact" onClick={handleLinkClick}>Contact us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
