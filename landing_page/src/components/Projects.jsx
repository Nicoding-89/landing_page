import React from 'react'
import '../styles/Projects.css'
import urlShortener from '../assets/img/url_shortener.webp'

const Projects = () => {
  return (
    <section id='projects' className='projects-container'>
      <div className='top-projects-container col-xxl-8 col-xl-9 col-lg-10'>
        <h1 className='project-title'>PROJECTS</h1>
        <p className='project-text'>
          In this section, you can explore some of my projects as I begin my journey in web development. Each project reflects my growing skills and the lessons I've learned along the way. I've aimed to tackle real-world challenges and create user-friendly experiences, and I'm excited to share my progress with you. Feedback is always welcome as I continue to grow and improve!
        </p>
      </div>
      <div className='cards-container project'>
        <div className="card project shadow-lg">
          <div className='img-top-container'>
            <img src={urlShortener} className="img-fluid" alt="A URL being cut with scissors"/>
          </div>
          <div className="card-body top">
            <h5 className="card-title project">URL Shortener</h5>
            <p className="card-text project">Easily convert lengthy and cumbersome URLs into concise, shareable links with just a few clicks. Additionally, you can generate a QR code for your new link.</p>
          </div>
          <div className='tags-container'>
            <i className="fa-solid fa-tags fa-lg"></i>
            <ul className='tags-list-container'>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Bootstrap</li>
              <li>React</li>
              <li>Node.js</li>
              <li>PostgreSQL</li>
            </ul>
          </div>
          <div className="card-body">
            <i className="fa-brands fa-github fa-lg"></i><a href="https://github.com/Nicoding-89/01_url_shortener" className="card-link"> Repository</a>
            <a href="https://zero1-url-shortener-1.onrender.com/" className="card-link">Try it on Render</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
