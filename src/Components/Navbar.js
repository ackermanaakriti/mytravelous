import React,{useState} from 'react';
import {Link} from 'react-router-dom';




function Navbar() {
  const [click, Setclick] = useState(false);
  const handleClick=()=>Setclick(!click);
  return (
    <>
<Link  to="/body">Travelous  </Link>
<div className='menu-logo' onClick={handleClick}>
  < i className={click? 'fa-solid fa-bars':"fa-solid fa-xmark"}/>
</div>
<Link to ="/about">About us</Link>
    </>
  )
}

export default Navbar