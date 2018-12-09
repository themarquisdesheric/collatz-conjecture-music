import React from 'react';
import ReactDOM from 'react-dom';
import ReallySmoothScroll from 'really-smooth-scroll';

import App from './App';

import './index.css';

ReallySmoothScroll.shim();

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
