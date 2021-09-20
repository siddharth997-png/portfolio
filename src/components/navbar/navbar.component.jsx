import './navbar.styles.scss';

const Navbar = ({isOpen, toggleIsOpen}) => {
  return (
    <div className={'navbar ' + (isOpen ? 'active' : '')}>
      <div className='navbar__logo unselectable' to='/'>
        {"<Siddharth Kothari/>"}
      </div>
      <div className='navbar__menu'>
        <div className='navbar__item' to='home'>Home</div>
        <div className='navbar__item' to='about'>About</div>
        <div className='navbar__item' to='projects'>Projects</div>
        <div className='navbar__item' to='contact'>Contact Me</div>
      </div>

      <div className='hamburger-menu' onClick={()=>{toggleIsOpen(!isOpen)}}>
        <span className='hamburger-line'></span>
        <span className='hamburger-line'></span>
        <span className='hamburger-line'></span>
      </div>
    </div>
  )
}

export default Navbar 
