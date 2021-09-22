import Fade from 'react-reveal/Fade';
import Social from '../../components/social-icons/social.component';

import './home.styles.scss';

const Home = () => {
  return (
    <div className='home' id='home'>
      <Fade left>
        <div className='home__img-container'>
          <img src='assets/avatar.svg' alt=''/>
        </div>
      </Fade>
      <Fade right>
        <div className='home__content-wrapper'>
          <h3>Hey <span className="wave">👋</span></h3>
          <p className='content-main'>I'm <span className='content-name'>Siddharth</span>.</p>
          <p className='content'>I'm an Aspiring Software Developer based in Mumbai, India.<br/> I love building <span className='content-highlighted'>websites</span> and solving <span className='content-highlighted'>algorithmic problems</span>.</p>

          <a href='assets/Siddharth_Kothari_Viit.pdf' target='_blank' className='resume'>My Resume!</a>
        </div>
      </Fade>
      <Social/>
    </div>
  )
}

export default Home
