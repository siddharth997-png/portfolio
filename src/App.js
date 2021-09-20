import './global.styles.scss';
import './app.styles.scss';

import NavComplete from './components/navcomplete/navcomplete.component';
import Home from './pages/home/home.component';
import About from './pages/about/about.component';

function App() {
  return (
    <div className="app">
      <NavComplete/>
      <div className='sections'>
        <Home/>
        <About/>
      </div>
    </div>
  );
}

export default App;
