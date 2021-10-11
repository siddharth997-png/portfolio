import Fade from 'react-reveal/Fade';
import Social from '../../components/social-icons/social.component';
import { Link as LinkS } from 'react-scroll';

import './home.styles.scss';

const Home = () => {
  return (
    <div className='home' id='home'>
      <Fade left>
        <div className='home__img-container'>
          <img src={process.env.PUBLIC_URL + '/assets/avatar.svg'} alt=''/>
        </div>
      </Fade>
      <Fade right>
        <div className='home__content-wrapper'>
          <h3>Hey <span className="wave">👋</span></h3>
          <p className='content-main'>I'm <span className='content-name'>Siddharth</span>.</p>
          <p className='content'>I'm an Aspiring Software Developer based in Mumbai, India.<br/> I love building <span className='content-highlighted'>websites</span> and solving <span className='content-highlighted'>algorithmic problems</span>.</p>

          <a href={process.env.PUBLIC_URL + '/assets/Siddharth_Kothari_VIIT.pdf'} 
          target='_blank' 
          rel="noopener noreferrer"
          className='resume'>My Resume</a>
          <div className='down-arrow'>
            <LinkS
            to='about'
            spy={true}
            smooth={true}
            offset={-70}
            duration={400}
            >
              <img src={process.env.PUBLIC_URL+'/assets/down.svg'} alt=''/>
            </LinkS>
          </div>
        </div>
      </Fade>
      <Social/>
    </div>
  )
}

export default Home
