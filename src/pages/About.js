import React from 'react'
import MultiplePizzas from '../assets/multiplePizzas.jpeg';
import '../styles/About.css';

function About() {
  return (
    <div className='about'>
        <div 
            className='aboutTop'
            style={{ backgroundImage: `url(${MultiplePizzas})` }}

        >
        </div>
      <div className='aboutButtom'>
        <h1>ABOUT US</h1>
        <p>
            jsjsjsjsksjksj
        </p>
      </div>
    </div>
  )
}

export default About
