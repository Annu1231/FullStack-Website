import React from 'react'
import './Testimonials.css'
import img from '../../assets/img1.jpg'
import mobile from '../../assets/mobile.jpg'
export const Testimonials = () => {
  return (
    <div className='container1'>
        
      <h1>Customer Testimonials</h1>
      <p>This tool has transformed my productivity and organization!</p>
      <div className="inside">
        <div className="left">
        <h2>Using this website has made my tasks so much easier! I can't imagine my day without it."</h2>
        </div>
        <div className="right">
        <img src={img} alt="" className='rimg' />
        </div>
      </div>

      <div className="inside1">
        <div className="left1">
            <img src={mobile} alt="" className='ilogo' />
        
        </div>
        <div className="right1">
       
             <h1>
          Start Organizing Your Life Today
        </h1>
        <p>
          Join us now and transform your productivity with our intuitive to-do list platform!
        </p>
        <div className="button">
          <button className="btns first">Sign Up</button>
          <button className="btns second">Learn More</button>
        </div>   
         
        </div>
      </div>
     </div>
    
  )
}
