import './global.styles.scss';
import './app.styles.scss';

import NavComplete from './components/navcomplete/navcomplete.component';
import Home from './pages/home/home.component';
import About from './pages/about/about.component';
import Projects from './pages/projects/projects.component';

function App() {
  return (
    <div className="app">
      <NavComplete/>
      <div className='sections'>
        <Home/>
        <About/>
        <Projects/>
      </div>
    </div>
  );
}

export default App;
