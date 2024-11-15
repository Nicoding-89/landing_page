import React from 'react'

const SubmissionResponse = ({ responseStyle, responseState, handleOnClick }) => {
  return (
    <div
      className={`${responseStyle} col-xxl-5 col-xl-6 col-lg-7 col-md-8 col-sm-10`}
      aria-live="assertive"
    >
      {responseState.result}
      <button
        type='button'
        className='btn btn-primary ok-btn'
        onClick={handleOnClick}>
        Ok
      </button>
    </div>
  )
}

export default SubmissionResponse
