import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import ham from '../Assets/menu.png'
import Button from '../Button/Button';
import Dropdown from '../Dropdown/Dropdown'; // Your animated dropdown menu

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Toggle dropdown visibility
  };

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <h2>Lorenzo <span className='remain'>Tekniks</span></h2>
      </div>
  
      <ul className='nav-menu'>
        <Link style={{textDecoration: 'none'}} to={'/'}>
          <li onClick={() => setMenu("home")} className={menu === "home" ? 'differ' : ''}>Home</li>
        </Link>
        <Link style={{textDecoration: 'none'}} to={'/aboutus'}>
          <li onClick={() => setMenu("aboutus")} className={menu === "aboutus" ? 'differ' : ''}>About Us</li>
        </Link>
        <Link style={{textDecoration: 'none'}} to={'/projects'}>
          <li onClick={() => setMenu("projects")} className={menu === "projects" ? 'differ' : ''}>Projects</li>
        </Link>
        <Link style={{textDecoration: 'none'}} to={'/service'}>
          <li onClick={() => setMenu("service")} className={menu === "service" ? 'differ' : ''}>Service</li>
        </Link>
        <Link style={{textDecoration: 'none'}} to={'/pages'}>
          <li onClick={() => setMenu("pages")} className={menu === "pages" ? 'differ' : ''}>Pages</li>
        </Link>
      </ul>
     
      <div className='getquote-button'>
        {/* Hamburger Icon */}
        <img src={ham} alt="Menu" className='ham' onClick={toggleDropdown} />
        <Dropdown isOpen={isOpen} toggleDropdown={toggleDropdown} menu={menu} setMenu={setMenu} />
        <Link to={'/getquote'} style={{textDecoration: 'none'}}>
          <Button name="Get Quote" className="custom-class" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
