import React, { useState } from 'react';

const Header = () => {
  const [isNavActive, setIsNavActive] = useState(false);

  const toggleMenu = () => {
    setIsNavActive(!isNavActive);
  };

  return (
    <header className="header-section">
      <div className="top-bar">
        <div className="marquee-container">
          <marquee behavior="scroll" direction="left" scrollamount="5">
            Welcome to Sri Satya Sai University of Technology and Medical Sciences
            the Premier University in Madhya Pradesh.
          </marquee>
        </div>
        <div className="contact-admission">
          <span>For Admission: +91-7748900028 | +91-7562292740</span>
        </div>
        <div className="social-links">
          <a href="#" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
      <nav className="nav-bar">
        <img
          src="https://cdn.universitykart.com//Content/upload/admin/ay4ntnmw.uhq.jpg"
          alt="SSSUTMS Logo"
          className="logo"
        />
        <ul className={`nav-links ${isNavActive ? 'active' : ''}`}>
          <li><a href="#">Home</a></li>
          <li><a href="#">AboutUs</a></li>
          <li><a href="#">Officers</a></li>
          <li><a href="#">Examination</a></li>
          <li><a href="#">Sections</a></li>
          <li><a href="#">Facilities</a></li>
          <li><a href="#">Students</a></li>
          <li><a href="#">Academics</a></li>
          <li><a href="#">Gallery</a></li>
        </ul>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </nav>
    </header>
  );
};

export default Header;