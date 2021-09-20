import Roll from 'react-reveal/Roll';
import Fade from 'react-reveal/Fade';

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
          <h3>Hey <span class="wave">👋</span></h3>
          <p className='content-main'>I'm <span className='content-name'>Siddharth</span>.</p>
          <p className='content'>I'm an Aspiring Software Developer based in Mumbai, India.<br/> I love building <span className='content-highlighted'>websites</span> and solving <span className='content-highlighted'>algorithmic puzzles</span>.</p>

          <a href='assets/Siddharth_Kothari_Viit.pdf' target='_blank' className='resume'>My Resume!</a>
        </div>
      </Fade>
      
        <div className='home__social-icon-wrapper'>
          <Roll right>
            <a href='mailto:siddharthkothari655@gmail.com'>  
              <img src='assets/social/mail.svg' alt=''/>
            </a>
          </Roll>
          <Roll right>
          <a href='https://www.linkedin.com/in/1-siddharth-kothari/'>  
            <img src='assets/social/linkedin.svg' alt=''/>
          </a>
          </Roll>
          <Roll right>
          <a href='https://github.com/siddharth997-png'>  
            <img src='assets/social/github.svg' alt=''/>
          </a>
          </Roll>
          <Roll right>
          <a href='https://instagram.com/siddharth_997'>  
            <img src='assets/social/instagram.svg' alt=''/>
          </a>
          </Roll>

        </div>
      
    </div>
  )
}

export default Home
