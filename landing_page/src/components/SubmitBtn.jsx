import React from 'react'
import '../styles/SubmitBtn.css';

const SubmitBtn = ({ isDisabled, isLoading }) => {
  return (
    <div className='wrapper-sbt-btn'>
      <button
        type="submit"
        className="btn btn-primary contact-submit-btn"
        aria-busy={isLoading ? 'true' : 'false'} 
        aria-label="Enviar formulario"
        aria-disabled={isDisabled ? 'true' : 'false'} 
        disabled={isDisabled}>
        {isLoading ? (
          <><span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
          <span role="status"> Sending...</span></>
          ) : 
          (
            "Submit"
          )}
      </button>
    </div>
  )
}

export default SubmitBtn
