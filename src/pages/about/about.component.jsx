import Fade from 'react-reveal/Fade';
import Roll from 'react-reveal/Roll';

import ProblemSolving from '../problem-solving/problem-solving.component';
import './about.styles.scss';

const About = () => {
  return (
  <div id='about'>
    <div className='about'>
      <Fade right>
        <div className='about__content-container'>
          <span className='about__content-subheading'>What Do I Do?</span>
          <h1 className='about__content-heading'>Front End Development</h1>
          <span className='about__content-desc'>I am passionate about building beautiful, interactive and functional websites. I'm currently <span className='highlightedText'>Hooked</span> with <span className='highlightedText'>React</span>, pun intended.</span>
        </div>
      </Fade>
      <div className='about__skills-container'>
        <Roll>
          <div className='skill-container'>
            <span className='skill-name'>HTML</span>
            <img src={process.env.PUBLIC_URL + '/assets/front-end/html.svg'} alt=''/>
          </div>
        </Roll>
        <Roll>
          <div className='skill-container'>
            <span className='skill-name'>CSS</span>
            <img src={process.env.PUBLIC_URL + '/assets/front-end/css.svg'} alt=''/>
          </div>
        </Roll>
        <Roll>
          <div className='skill-container'>
            <span className='skill-name'>JavaScript</span>
            <img className='js' src={process.env.PUBLIC_URL + '/assets/front-end/javascript.svg'} alt=''/>
          </div>
        </Roll>
        <Roll>
          <div className='skill-container'>
            <span className='skill-name'>Sass</span>
            <img src={process.env.PUBLIC_URL + '/assets/front-end/sass.svg'} alt=''/>
          </div>
        </Roll>
        <Roll>
          <div className='skill-container'>
            <span className='skill-name'>React</span>
            <img src={process.env.PUBLIC_URL + '/assets/front-end/react.svg'} alt=''/>
          </div>
        </Roll>
      </div>
    </div>
    <div className='about'>
      <Fade left>
        <div className='about__content-container'>
          <h1 className='about__content-heading'>Back End Development and Database Management</h1>
          <span className='about__content-desc'>I'm currently using <span className='highlightedText'>NodeJs</span> combined with <span className='highlightedText'>MongoDB</span> to build highly extensible complex backends. I have worked with each of these technologies extensively.</span>
        </div>
      </Fade>
      <div className='about__skills-container'>
        <Roll>
          <div className='backend-skill-container'>
            <span className='backend-skill-name'>PHP</span>
            <img src={process.env.PUBLIC_URL + '/assets/back-end/php.svg'} alt=''/>
          </div>
        </Roll>
        <Roll>
          <div className='backend-skill-container'>
            <span className='backend-skill-name'>Node</span>
            <img src={process.env.PUBLIC_URL + '/assets/back-end/node.svg'} alt=''/>
          </div>
        </Roll>
        <Roll>
          <div className='backend-skill-container'>
            <span className='backend-skill-name'>C++</span>
            <img src={process.env.PUBLIC_URL + '/assets/back-end/c++.svg'} alt=''/>
          </div>
        </Roll>
        <Roll>
          <div className='backend-skill-container'>
            <span className='backend-skill-name'>Express</span>
            <img src={process.env.PUBLIC_URL + '/assets/back-end/express.svg'} alt=''/>
          </div>
        </Roll>
        <Roll>
          <div className='backend-skill-container'>
            <span className='backend-skill-name'>MySQL</span>
            <img src={process.env.PUBLIC_URL + '/assets/back-end/mysql1.svg'} alt=''/>
          </div>
        </Roll>
        <Roll>
          <div className='backend-skill-container'>
            <span className='backend-skill-name'>Mongo DB</span>
            <img src={process.env.PUBLIC_URL + '/assets/back-end/mongodb.svg'} alt=''/>
          </div>
        </Roll>
      </div>
    </div>
    <ProblemSolving/>
  </div>
  )
}

export default About;
