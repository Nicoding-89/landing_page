import React from 'react'
import '../styles/Hero.css'
import heroImg from '../assets/img/hero-img.webp'

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-text'>
        <h1 className='hero-title'>WELCOME!</h1>
        <h2 className='hero-subtitle'>I'm a junior full stack JavaScript Web Developer</h2>
        <p className='hero-description'>I aim to design web projects that not only function well but also resonate with users through a blend of simplicity and elegance.</p>
        <button className='btn btn-primary cta-btn'><a>Projects</a></button>
      </div>
      <div className='hero-img-container'>
        <img src={heroImg} className="img-fluid rounded hero-img" alt="A programmer coding"></img>
      </div>
    </section>
  )
}

export default Hero
