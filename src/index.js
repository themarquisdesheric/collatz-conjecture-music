import React from 'react';
import ReactDOM from 'react-dom';
import ReallySmoothScroll from 'really-smooth-scroll';

import Main from './components/Main';

import './index.css';

ReallySmoothScroll.shim();

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);
