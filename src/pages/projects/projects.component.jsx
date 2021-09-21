import { useState } from 'react';

import ProjectMenu from '../../components/project-menu/project-menu.component';

import './projects.styles.scss';

const Projects = () => {

  const [selected,setSelected] = useState('all');

  return (
    <div className='projects'>
      <h1 className='projects__heading'>My Projects</h1>
      <ProjectMenu selected={selected} setSelected={setSelected}/>
    </div>
  )
}

export default Projects
