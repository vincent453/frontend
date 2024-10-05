// Dropdown.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Dropdown.css';  // Assuming Dropdown specific styles go here
import close from '../Assets/close.png'

const Dropdown = ({ isOpen, toggleDropdown, menu, setMenu }) => {
  return (
    <div className={`dropdown ${isOpen ? 'open' : ''}`}>
        <div className='close'>
            <img src={close} onClick={toggleDropdown}/>
            </div>
            <ul className='dropdown-menu'>
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
        </div>
  );
};

export default Dropdown;
