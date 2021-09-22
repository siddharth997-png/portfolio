import './project-card.styles.scss';

const ProjectCard = ({item,toggleViewProject,setProject}) => {

  const {imgSrc, projectTitle, employer, desc} = item;
  const handleClick = () => {
    setProject(item);
    toggleViewProject(true);
  }
  return (
    <div className='project-card__container'>
      <div className='project-card__img-container'>
        <img src={imgSrc} alt=''/>
      </div>
      <div className='project-card__name'>{projectTitle}</div>
      <span className='project-card__employer'>{employer}</span>
      <div className='project-card__desc'>{desc}</div>
      <div className='project-card__expand'
        onClick={handleClick}
      >View More</div>
    </div>
  )
}

export default ProjectCard;
