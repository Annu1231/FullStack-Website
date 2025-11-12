import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import { Features } from './Components/Features/Features'
import { Testimonials } from './Components/Testimonials/Testimonials'
import Footer from './Components/Footer/Footer'
import Page from './Components/Pages/Register'


const App = () => {
  return (
    <div>
     <Navbar/>
    <Hero/>
    <Features/>
    <Testimonials/>
    <Footer/>
    <Page/>
    </div>
  )
}

export default App