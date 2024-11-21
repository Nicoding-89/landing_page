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
import TechCards from './TechCards'

const About = () => {
  return (
    <section id='about' className='about-container'>
      <h1 className='about-title'>About me</h1>
      <p className='about-description'>
        My name is Nicolas Labarca. I have a psychology degree and multiple diplomas in clinical psychology and talent management. I've always had a passion for computing. During the pandemic, I decided to learn to program using free online resources like freeCodeCamp and The Odin Project. Later, I attended a full-stack JavaScript web development bootcamp in 2023. This year, I also completed another bootcamp in cybersecurity and earned a Google certificate in IT support.
        <br />
        I am motivated by the opportunity to learn new skills and improve the ones I already have. This portfolio showcases my projects and the journey I've taken in the tech field.
      </p>
      <h2 className='about-skills'>Technologies I work with</h2>
      <div className='cards-container about'>
        <TechCards techName={'HTML'} logo={htmlLogo} imgId={'htmlLogo'} />
        <TechCards techName={'CSS'} logo={cssLogo} imgId={'cssLogo'} />
        <TechCards techName={'JavaScript'} logo={jsLogo} imgId={'jsLogo'} />
        <TechCards techName={'Bootstrap'} logo={bootstrapLogo} imgId={'bootstrapLogo'} />
        <TechCards techName={'React'} logo={reactLogo} imgId={'reactLogo'} /> 
        <TechCards techName={'NodeJs'} logo={nodeJsLogo} imgId={'nodeJsLogo'} />
        <TechCards techName={'PostgreSQL'} logo={postgreSqlLogo} imgId={'postgreSqlLogo'} />
        <TechCards techName={'Linux'} logo={linuxLogo} imgId={'linuxLogo'} />
        <TechCards techName={'AWS'} logo={awsLogo} imgId={'awsLogo'} />
      </div>
    </section>
  )
}

export default About
