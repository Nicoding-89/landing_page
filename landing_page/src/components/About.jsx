import React from 'react'
import '../styles/About.css'
import htmlLogo from '../assets/img/html.webp'
import cssLogo from '../assets/img/css-3.svg'
import jsLogo from '../assets/img/JS.png'
import bootstrapLogo from '../assets/img/Bootstrap_logo.png'
import reactLogo from '../assets/img/React-icon.png'
import nodeJsLogo from '../assets/img/nodejs.webp'
import postgreSqlLogo from '../assets/img/Postgresql.png'
import linuxLogo from '../assets/img/linux.png'
import awsLogo from '../assets/img/AmazonAWS.png'

const About = () => {
  return (
    <section id='about'>
      <h1 className='about-title'>About me</h1>
      <p className='about-description'>
        My name is Nicolas Labarca. I have a psychology degree and multiple diplomas in clinical psychology and talent management. I've always had a passion for computing. During the pandemic, I decided to learn to program using free online resources like freeCodeCamp and The Odin Project. Later, I attended a full-stack JavaScript web development bootcamp in 2023. This year, I also completed another bootcamp in cybersecurity and earned a Google certificate in IT support.
        <br />
        I am motivated by the opportunity to learn new skills and improve the ones I already have. This portfolio showcases my projects and the journey I've taken in the tech field.
      </p>
      <h2 className='about-skills'>Technologies I work with</h2>
      <div className='cards-container about'>
        <div className="card about" style={{ width: '10rem' }}>
          <div className="card-header">
            HTML
          </div>
          <img src={htmlLogo} className="card-img-bottom about-img" alt="HTML logo" />
        </div>
        <div className="card about" style={{ width: '10rem' }}>
          <div className="card-header">
            CSS
          </div>
          <img src={cssLogo} className="card-img-bottom about-img" alt="CSS logo" />
        </div>
        <div className="card about" style={{ width: '10rem' }}>
          <div className="card-header">
            JavaScript
          </div>
          <img src={jsLogo} className="card-img-bottom about-img" alt="JavaScript logo" />
        </div>
        <div className="card about" style={{ width: '10rem' }}>
          <div className="card-header">
            Bootstrap
          </div>
          <img src={bootstrapLogo} className="card-img-bottom about-img" id='bootstrapLogo' alt="Bootstrap logo" />
        </div>
        <div className="card about" style={{ width: '10rem' }}>
          <div className="card-header">
            React
          </div>
          <img src={reactLogo} className="card-img-bottom about-img" id='reactLogo' alt="React logo" />
        </div>
        <div className="card about" style={{ width: '10rem' }}>
          <div className="card-header">
            NodeJs
          </div>
          <img src={nodeJsLogo} className="card-img-bottom about-img" alt="NodeJs logo" />
        </div>
        <div className="card about" style={{ width: '10rem' }}>
          <div className="card-header">
            PostgreSQL
          </div>
          <img src={postgreSqlLogo} className="card-img-bottom about-img" alt="PostgreSQL logo" />
        </div>
        <div className="card about" style={{ width: '10rem' }}>
          <div className="card-header">
            Linux
          </div>
          <img src={linuxLogo} className="card-img-bottom about-img" alt="Linux penguin" />
        </div>
        <div className="card about" style={{ width: '10rem' }}>
          <div className="card-header">
            AWS
          </div>
          <img src={awsLogo} className="card-img-bottom about-img" alt="AWS logo" />
        </div>
      </div>

    </section>
  )
}

export default About
