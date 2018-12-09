import React from 'react';
import ReactDOM from 'react-dom';
import ReallySmoothScroll from 'really-smooth-scroll';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReallySmoothScroll.shim();

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
registerServiceWorker();
