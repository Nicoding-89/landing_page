import React from 'react'
import '../styles/Projects.css'
import ProjectCards from './ProjectCards'
import urlShortener from '../assets/img/url_shortener.webp'
import landingPagePic from '../assets/img/landingPagePic.webp'

const Projects = () => {

  const urlShortenerProject = {
    imgSource: urlShortener,
    imgDescription: 'A URL being cut with scissors',
    projectName: 'URL Shortener', 
    projectDescription: 'Easily convert lengthy and cumbersome URLs into concise, shareable links with just a few clicks. Additionally, you can generate a  QR code for your new link.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'React', 'Node.js', 'PostgreSQL'],
    repoLink: 'https://github.com/Nicoding-89/01_url_shortener',
    projectUrl: 'https://zero1-url-shortener-1.onrender.com/',
    deploymentPlatform: 'Render'
  };

  const landingPageProject = {
    imgSource: landingPagePic,
    imgDescription: 'A hello world pic',
    projectName: 'Landing Page', 
    projectDescription: 'As you can see, this project is a personal landing page where I showcase my skills, projects, and a little bit about myself. Want to check the code behind it? Feel free to take a look at the repository!',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'React', 'Node.js'],
    repoLink: 'https://github.com/Nicoding-89/landing_page',
    projectUrl: 'https://zero1-url-shortener-1.onrender.com/',
    deploymentPlatform: 'Render'
  }

  return (
    <section id='projects' className='projects-container'>
      <div className='top-projects-container col-xxl-8 col-xl-9 col-lg-10'>
        <h1 className='project-title'>PROJECTS</h1>
        <p className='project-text'>
          In this section, you can explore some of my projects as I begin my journey in web development. Each project reflects my growing skills and the lessons I've learned along the way. I've aimed to tackle real-world challenges and create user-friendly experiences, and I'm excited to share my progress with you. Feedback is always welcome as I continue to grow and improve!
        </p>
      </div>
      <div className='cards-container project'>
        <ProjectCards projectInfo={urlShortenerProject} />
        <ProjectCards projectInfo={landingPageProject} />
      </div>
    </section>
  )
}

export default Projects
