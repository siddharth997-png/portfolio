import './global.styles.scss';
import './app.styles.scss';

import NavComplete from './components/navcomplete/navcomplete.component';
import Home from './pages/home/home.component';

function App() {
  return (
    <div className="app">
      <NavComplete/>
      <div className='sections'>
        <Home/>
      </div>
    </div>
  );
}

export default App;
