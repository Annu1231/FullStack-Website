import React from 'react'
import './Hero.css'
import img from '../../assets/img.png'
import google from '../../assets/google.png'
import youtube from '../../assets/youtube.png'
import pinterest from '../../assets/pinterest-logo.png'
import twitch from '../../assets/twitch.png'
import amazon from '../../assets/amazon-pay.png'
const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
          <h1>Simplify Your Life with Our Todo App</h1>
            <p>Stay organized and boost your productivity with our intuitive todo website.
             Experience a modern approach to task management that fits your lifestyle.</p>
             <ul>
              <li><button className='hbtn'>Get started</button></li>
              <li><button className='hbtn1'>Learn more</button></li>
             </ul>
             <div className='section'>
      
              <div className="hero-left">
             <h1>
          <span>Organize.</span><br />
          <span>Achieve.</span><br />
          <span>Relax.</span>
        </h1>
        <p>
          Turn clutter into clarity, chaos into control, and dreams into done. Bold visions into market success.
        </p>
        <div className="buttons">
          <button className="btn primary">Get Started Today</button>
          <button className="btn secondary">Discover Features</button>
        </div>   
        </div>   
              <div className="hero-right">
                <img src={img} alt="" />
              </div>
              </div>

              <div className="company">
               
                <div className="logos">
                  <img src={google} alt="" />
                  <img src={youtube} alt="" />
                  <img src={pinterest} alt="" />
                  <img src={twitch} alt="" />
                  <img src={amazon} alt="" />
                </div>
                
              </div>
             </div>
             
             {/* <div className="contain">
             <h1 className='title'>
             Transform Your Productivity with Our <br/> Innovative To-Do List Features
             </h1>
             </div>
             <div className="features-area">
              <div className="feature-card">

              </div>
             </div> */}
             
        </div>
    
  )
}

export default Hero