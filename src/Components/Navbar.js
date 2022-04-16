import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import Button from './Button.js'




function Navbar() {
  const[button,SetButton]=useState(true);
  const [click, Setclick] = useState(false);
  const handleClick=()=>Setclick(!click);
  const closeMobileMenu=()=>
  {
    Setclick(false);
  }
  const showButton=()=>
  {
    if(window.innerWidth<=960)
    {
      SetButton(false);
    }
    else
    SetButton(true);
  }
  window.addEventListener('resize', showButton
  )
  return (
    <>
    <nav className='navbar'>
      <div className='navbar-conatainer'>
<Link  to="/home" className='navbar-logo'>Travelous  </Link>
<div className='menu-logo' onClick={handleClick}>
  < i className={click? 'fa-solid fa-bars':"fa-solid fa-xmark"}/>
</div>
<ul className={click?'nav-menu-active':'nav-menu'}>
  <li className="nav-item">
    <Link to='/home'className='nav-link' onClick={closeMobileMenu}/>
    HOME
  </li>
  
  <li className="nav-item">
    <Link to='/servives'className='nav-link' onClick={closeMobileMenu}/>
    SERVICES
  </li>

  <li className="nav-item">
    <Link to='/product'className='nav-link' onClick={closeMobileMenu}/>
    PRODUCTS
  </li>

  <li className="nav-item">
    <Link to='/sign in'className='nav-link-mobile' onClick={closeMobileMenu}/>
    SIGN IN
  </li>
</ul>
{button && <Button butonStyle='btn--outline'>Sign Up</Button>}
</div>
</nav>
    </>
  )
}

export default Navbar