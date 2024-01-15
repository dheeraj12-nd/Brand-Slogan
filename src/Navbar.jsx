import React from 'react'
import Logo from './Assets/logo.jpg'
import './Navbar.css';

function Navbar() {
  return (
    <div className='logo animate-pulse'>
        <img src={Logo} alt=''></img>
    </div>
  )
}

export default Navbar