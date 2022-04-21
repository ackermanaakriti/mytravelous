import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './travel.jpg'




function Navbar() {
  const [button, SetButton] = useState(true);
  const [click, Setclick] = useState(false);
  const handleClick = () => Setclick(!click);
  const closeMobileMenu = () => {
    Setclick(false);
  }
  
  
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to="/home" className='navbar-logo'> <img   className='nav-img' src={logo}/>ravelous  </Link>
          <div className='menu-logo' onClick={handleClick}>
            < i className={click ? 'fa-solid fa-bars' : "fa-solid fa-xmark"} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to='/home' className='nav-links' onClick={closeMobileMenu}>HOME</Link>

            </li>

            <li className="nav-item">
              <Link to='/servives' className='nav-links' onClick={closeMobileMenu} >SERVICES</Link>

            </li>

            <li className="nav-item">
              <Link to='/product' className='nav-links' onClick={closeMobileMenu}>PRODUCTS</Link>

            </li>

            <li className="nav-item"> 
              <Link to='/sign in' className='nav-links' onClick={closeMobileMenu} >SIGN IN</Link>

            </li>
            <li className="nav-item"> 
              <Link to='/sign in' className='nav-links' onClick={closeMobileMenu} >SIGN UP</Link>

            </li>
          </ul>
          
        </div>
      </nav>
    </>
  )
}

export default Navbar