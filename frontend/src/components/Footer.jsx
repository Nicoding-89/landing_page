import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer className="footer bg-body-tertiary">
      <div className="container text-center">
        <div className="footer-navigation">
          <ul className="list-inline">
            <li className="list-inline-item">
              <a href="/" className="footer-link">Home</a>
            </li>
            <li className="list-inline-item">
              <a href="#about" className="footer-link">About</a>
            </li>
            <li className="list-inline-item">
              <a href="#projects" className="footer-link">Projects</a>
            </li>
            <li className="list-inline-item">
              <a href="#contact" className="footer-link">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-social my-3">
          <a href="https://github.com/Nicoding-89" className="footer-social-link mx-2" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github fa-xl"></i>
          </a>
          <a href="https://www.linkedin.com/in/nicolas-labarca-sierra/" className="footer-social-link mx-2" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin fa-xl"></i>
          </a>
          <a href="mailto:nicoding9@gmail.com" className="footer-social-link mx-2" target="_blank" rel="noopener noreferrer">
            <i className="fa-regular fa-envelope fa-xl"></i>
          </a>
        </div>
        <p className="footer-text my-2">
          © {new Date().getFullYear()} NiCoding <i class="fa-solid fa-laptop-code fa-lg"></i>. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
