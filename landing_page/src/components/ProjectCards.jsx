import React from 'react'

const ProjectCards = ({ projectInfo }) => {
  const { imgSource, imgDescription, projectName, projectDescription, technologies, repoLink, projectUrl, deploymentPlatform } = projectInfo;
  return (
    <div className="card project shadow-lg">
      <div className='img-top-container'>
        <img src={imgSource} className="img-fluid" alt={imgDescription} />
      </div>
      <div className="card-body top">
        <h5 className="card-title project">{projectName}</h5>
        <p className="card-text project">{projectDescription}</p>
      </div>
      <div className='tags-container'>
        <i className="fa-solid fa-tags fa-lg"></i>
        <ul className='tags-list-container'>
          {technologies.map(technology => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </div>
      <div className="card-body project">
        <a href={repoLink} className="card-link" target='_blank' rel='noopener noreferrer'>
          <i className="fa-brands fa-github fa-lg"></i> Repository
        </a>
        <a href={projectUrl} className="card-link" target='_blank' rel='noopener noreferrer'>{`Try it on ${deploymentPlatform}`}</a>
      </div>
    </div>
  )
}

export default ProjectCards
