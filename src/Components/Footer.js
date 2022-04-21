import React from 'react'
import {Link} from 'react-router-dom'
import './footer.css';

function Footer() {
  return (
    <div className='footer-container'>
        <div className='footer-wrapper'>
            <div className='footer-heading'>
                <h3 className='footer-first-heading'>Join the Adventure newsletter to receive our best vacation deals</h3>
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
                
                <Link to='/sign in'>How it works?</Link>
                 <Link to='./testonomial'>testonomial</Link>
                 <Link to='./carrer'>Careers</Link>
                 <Link to='./terms'> Terms of use</Link>
            </div>
            <div className='links-heading'>
                <h2>Contact Us</h2>
                <Link to='/sign in'>Contact</Link>
                 <Link to='./testonomial'>testonomial</Link>
                 <Link to='./carrer'>Destination</Link>
                 <Link to='./terms'> Support</Link>
            </div>
            <div className='links-heading'>
                <h2>Socila media</h2>
                <Link to='/sign in'>Instagram</Link>
                 <Link to='./testonomial'>Facebook</Link>
                 <Link to='./carrer'>Youtube</Link>
                 <Link to='./terms'> Twitter</Link>
            </div>
        </div>
               <section className='footer-logo'>travelous</section>
    </div>
  )
}

export default Footer