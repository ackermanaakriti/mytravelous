import React from 'react'
import './card.css'
import img from './MM.jpeg'
import Cardcontainer from './Cardcontainer'

function Card(props) {
  return (
   <>
        <div className='mycard-container'>
        <div className= 'cards'>
            <div className='img-container'>
            <img  className='card-img' src={img}/>
            </div>
            <div className='cardinfo'>
            <h4>{props.tittle} </h4>
            <p>{props.Parag}</p>
            </div>
            <button className='btn'>read more</button>

        </div>
        </div>
        </>
   
  )
}

export default Card