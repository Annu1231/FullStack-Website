import React from 'react'
import { FaUser, FaTasks, FaShareAlt } from "react-icons/fa";
import './Features.css'
import checklist from '../../assets/checklist.jpg'
import idea from '../../assets/idea.png'
import send from '../../assets/send.png'
import user from '../../assets/user.png'
export const Features = () => {
  return (
    <div className='container'>
       <h1 className='title'>
             Transform Your Productivity with Our <br/> Innovative To-Do List Features
        </h1>
        <div className="features-area">
          <div className="feature-card">
           <img src={user} alt="" className='icon'/>
            <h3>User-Friendly Interface</h3>
            <p>Our platform offers seamless task management to boost your efficiency.</p>
          </div>
          <div className="feature-card">
             <img src={send} alt="" className='icon' />
            <h3>Collaborate & Share Effortlessly</h3>
            <p>Invite team members to work together and achieve your goals faster.</p>
          </div>
          <div className="feature-card">
            <img src={idea} alt="" className='icon'/>
            <h3>Effortless Collaboration</h3>
            <p>Invite team members to work together and achieve your goals faster.</p>
          </div>
          <div className="feature-card">
            <img src={checklist} alt="" className='icon'/>
            <h3>Seamless Access</h3>
            <p>Stay connected and manage your tasks on the go with ease.</p>
          </div>
        </div>
    </div>
  )
}
