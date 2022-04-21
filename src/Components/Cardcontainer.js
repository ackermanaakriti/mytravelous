import React from 'react'

import Card from './Card';
import './Cardcontainer.css'



function Cardcontainer() {
  return (
    <div className='card-container'>
    
        <h1 className='heading'>POPULAR PLACES  </h1>
        <div className='mycards'>
        <Card
        tittle='Manasulu trek'
        Parag='manasulu dn askdhjf asdfjh adsjkfh'/>
        <Card 
        tittle='Sagarmatha Trek'
        Parag='sagarama hdfdsjkdfosdifu sdkjfosdifj sdfj'/>
        <Card
      tittle='Mardi Trek'
      Parag='mardi kjdhfjdhf f dsifj sdf nsdfh sdf '
        />
        
    </div>
    </div>
  )
}

export default Cardcontainer