import { useState,useEffect } from 'react';
//import Zoom from 'react-reveal/Zoom';

import ProjectMenu from '../../components/project-menu/project-menu.component';
import ProjectCard from '../../components/project-card/project-card.component';

import './projects.styles.scss';

import {
  allProjectsData,
  nodeProjects,
  reactProjects,
  phpProjects } from './project-data';

const Projects = () => {

  const [selected,setSelected] = useState('all');
  const [data,setData] = useState([]);

  useEffect(() => {
    switch(selected) {
      case 'all' : {
        setData(allProjectsData);
          break;
      }
      case 'react' : {
        setData(reactProjects);
        break;
      }
      case 'node' : {
        setData(nodeProjects);
        break;
      }
      case 'php' : {
        setData(phpProjects);
        break;
      }

      default: {
        setData([]);
      }
    }
  },[selected])

  return (
    <div className='projects'>
      <h1 className='projects__heading'>My Projects</h1>
      <ProjectMenu selected={selected} setSelected={setSelected}/>
        <div className='projects__container'>
          {
              data.map(({id,...otherProps}) => (
              
                <ProjectCard key={id} {...otherProps}/>
              
            ))
          }
        </div>
    </div>
  )
}

export default Projects
