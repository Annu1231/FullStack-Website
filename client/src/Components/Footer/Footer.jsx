import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import fb from '../../assets/fb1.png'
import insta from '../../assets/insta.png'
import linked from '../../assets/linkedin.png'
import you from '../../assets/you.png'
const Footer = () => {
  return (
    <footer>
    <div class="foot-panel2">
        <div className="contain">
            <img src={logo} alt="" className='flogo'/>
            <p>Subscribe to our newsletter for the latest features and updates delivered to you.</p>
            <h2><input type="text" placeholder='Your email here' className='text'/> <button>Join</button></h2>
            <p className='p1'>By subscribing, you consent to our Privacy Policy and agree to receive updates.</p>
        </div>
        <ul>
           <p> Useful Links </p>
           <a> Home Page</a>
           <a> About Us     </a>          
           <a> Coontact US </a>
           <a> Blog Post </a>
           <a> FAQs </a>
        </ul>
        <ul>
            <p> Resources </p>
            <a> Help Center </a>
            <a> User Guid </a>
            <a> Community Forum</a>
            <a> Feedback </a>
            <a> Support </a>
         </ul>
         <ul>
            <p> Connect With Us </p>
            <a> <i class="fa-brands fa-facebook"></i> Facebook</a>
            <a> <i class="fa-brands fa-instagram"></i> Instagram </a>          
            <a> <i class="fa-brands fa-linkedin"></i> Linkedin </a>
            <a> <i class="fa-brands fa-youtube"></i> Youtube </a>
            <a>  </a>
            
         </ul>
         
    </div>
    <div class="foot-panel3">
        <div class="logo"></div>
    </div>
</footer>
  )
}

export default Footer 