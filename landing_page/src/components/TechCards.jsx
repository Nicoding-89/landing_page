import React from 'react'

const TechCards = ({ techName, logo, imgId }) => {
  return (
    <div className="card about">
      <div className="card-header">
        {techName}
      </div>
      <img src={logo} className="card-img-bottom about-img" id={imgId} alt={`${techName} logo`} />
    </div>
  )
}

export default TechCards
