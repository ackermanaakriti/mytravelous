import React from 'react'

function Footer() {
  return (
    <div className='footer-container'>
        <div className='footer-wrapper'>
            <div className='footer-heading'>
                <h3>Join the Adventure newsletter to receive our best vacation deals</h3>
                <p>You can unsubscribe at any time</p>
            </div>
            <div className='footer-inputs'>
                <input type='email' className='myemail' placeholder='Your email'/>
                <button type='submit' className='subs-button'> Subscribe</button>
            </div>
        </div>
        <div className='footer-links-wrapper'>
            <div className='links-heading'>
                <h2>About Us</h2>

            </div>
        </div>

    </div>
  )
}

export default Footer