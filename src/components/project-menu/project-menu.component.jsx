import './project-menu.styles.scss';
import menuItems from './menu-items';

const ProjectMenu = ({selected,setSelected}) => {

  return (
    <div className='projects__menu'>
      {
        menuItems.map(({id,title}) => (
          <span key={id} className={'projects__menu-item '+ 
          (selected === id ? 'active' : '')}
          onClick={() => setSelected(id)}
          >
            {title}
          </span>
        ))
      }
      </div>
  )
}

export default ProjectMenu
