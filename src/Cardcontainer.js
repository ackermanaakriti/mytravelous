import React from 'react'
import Card from './Components/Card';
import './Components/Cardcontainer.css'


function Cardcontainer() {
  return (
    <div className='card-container'>
    <div className='mycards'>
        <h1 className='heading'>POPULAR PLACES  </h1>
        <Card/>
        <Card/>
        <Card/>
    </div>
    </div>
  )
}

export default Cardcontainer