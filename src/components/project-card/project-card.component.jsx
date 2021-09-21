import './project-card.styles.scss';

const ProjectCard = ({imgSrc,projectTitle,employer,desc}) => {
  return (
    <div className='project-card__container'>
      <div className='project-card__img-container'>
        <img src={imgSrc} alt=''/>
      </div>
      <div className='project-card__name'>{projectTitle}</div>
      <span className='project-card__employer'>{employer}</span>
      <div className='project-card__desc'>{desc}</div>
      <div className='project-card__expand'>View More</div>
    </div>
  )
}

export default ProjectCard;
