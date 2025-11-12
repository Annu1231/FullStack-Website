import React from 'react'
import logo from '../../assets/logo.png'
import './Navbar.css'
const Navbar = () => {
  return (
    <nav className='container'>
        <img src={logo} alt="" className='nlogo'/>
        <ul>
            <li>About Us</li>
            <li>Features</li>
            <li>More Opetion</li>
            <li>Contact</li>
            <li><button className='btn'>Login</button></li>
            <li><button className='btn1'>Sign Up</button></li>
        </ul>
    </nav>
  )
}

export default Navbar

