import { useState } from 'react';

import ProjectMenu from '../../components/project-menu/project-menu.component';
import ProjectCard from '../../components/project-card/project-card.component';

import './projects.styles.scss';

import {allProjectsData} from './project-data';

const Projects = () => {

  const [selected,setSelected] = useState('all');

  return (
    <div className='projects'>
      <h1 className='projects__heading'>My Projects</h1>
      <ProjectMenu selected={selected} setSelected={setSelected}/>
      <div className='projects__container'>
        {
          allProjectsData.map(({id,...otherProps}) => (
            <ProjectCard key={id} {...otherProps}/>
          ))
        }
      </div>
    </div>
  )
}

export default Projects
