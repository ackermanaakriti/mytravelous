import React from 'react'
import './button.css';
import {Link} from 'react-router-dom'
const STYLES=['btn--primary','btn--outline'];
const SIZES=['btn--medium','btn--large'];
function Button({children,type, onClick, buttonStyle,buttonSize}) {
    const checkButtonStyle= STYLES.includes(buttonStyle)?buttonStyle: STYLES[0]
    const checkButtonSize= SIZES.includes(buttonSize)?buttonSize:SIZES[0];
  return (
 <>
 <Link to='/signup' className='btn-mobile'/>
 <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>{children}</button>
 </>
  )
}

export default Button