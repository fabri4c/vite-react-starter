import { Global } from '@emotion/react';

import logo from './assets/images/logo.svg';
import globalStyle from './styles/base/Minireset';
import './styles/main.scss';

function App() {
  return (
    <div className='app'>
      <Global styles={globalStyle} />
      <header className='app-header'>
        <img src={logo} className='app-logo' alt='logo' />
        <p className='header'>Vite React Starter 💯</p>
        <p>
          Vite + ESLint + Prettier + Stylelint + Sass + Emotion + Jest + Testing
          Library
        </p>
      </header>
    </div>
  );
}

export default App;
