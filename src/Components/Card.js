import React from 'react'
import './card.css'
import img from './MM.jpeg'

function Card() {
  return (
    <div className='card-container'>
        <h1 className='heading'>POPULAR PLACES  </h1>
        <div className= 'cards'>
            <div className='img-container'>
            <img  className='card-img' src={img}/>
            </div>
            <div className='cardinfo'>
            <h4>MANASULU TREK </h4>
            <p>hello you can visit this blah blah</p>
            </div>
            <button className='btn'>read more</button>

        </div>
    </div>
  )
}

export default Card