import React from 'react'
import './button.css';
import {Link} from 'react-router-dom'
const STYLES=['btn--primary','btn--outline'];
const SIZES=['btn--medium','btn--large'];
function Button({children,type, onClick, buttonSize}) {
    const checkButtonStyle= STYLES.includes('btn--outline')?STYLES[0]: STYLES[1]
    const checkButtonSize= SIZES.includes(buttonSize)?buttonSize:SIZES[0];
  return (
 <>
 <Link to='/signup' className='btn-mobile'/>
 <button className={`${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>{children}</button>
 </>
  )
}

export default Button