import React from 'react'

import Card from './Card';



function Cardcontainer() {
  return (
    <div className='card-container'>
    
        <h1 className='heading'>POPULAR PLACES  </h1>
        <div className='mycards'>
        <Card/>
        <Card/>
        <Card/>
    </div>
    </div>
  )
}

export default Cardcontainer