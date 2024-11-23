import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/ErrorMessage.css'

const ErrorMessage = () => {
  const navigate = useNavigate();

  return (
    <div className='error container'>
      <p className='error-status'>404</p>
      <p className='error-name'>Not found.</p>
      <p className='error-message'>The requested resource could not be found.</p>
      <button onClick={() => navigate(-1)} className='btn btn-primary go-back-btn'>Go back</button>
    </div>
  )
}

export default ErrorMessage
