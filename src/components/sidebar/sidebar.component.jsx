import './sidebar.styles.scss';

const Sidebar = ({isOpen, toggleIsOpen}) => {
  return (
    <div className={'sidebar ' + (isOpen ? 'active' : '')}
    onClick={() => toggleIsOpen(false)}
    >
      <div className='sidebar__item' to='home' onClick={() => toggleIsOpen(false)}>Home</div>
      <div className='sidebar__item' to='about' onClick={() => toggleIsOpen(false)}>About</div>
      <div className='sidebar__item' to='projects' onClick={() => toggleIsOpen(false)}>Projects</div>
      <div className='sidebar__item' to='contact' onClick={() => toggleIsOpen(false)}>Contact</div>
      <div className='hamburger-menu active' onClick={()=>{toggleIsOpen(!isOpen)}}>
        <span className='hamburger-line'></span>
        <span className='hamburger-line'></span>
        <span className='hamburger-line'></span>
      </div>
    </div>
  )
}

export default Sidebar
