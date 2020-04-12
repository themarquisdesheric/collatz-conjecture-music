import React, { Component, Fragment } from 'react';

import { func } from '../proptypes-constants';
import { dispatchAnalytics } from '../utils';

export default class ErrorBoundary extends Component {
  static propTypes = {
    handleError: func.isRequired
  }

  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }
  
  componentDidCatch() {
    dispatchAnalytics('Error', 'Playback Error');
    setTimeout(() => this.props.handleError(), 2500);
  }

  render() {
    return (this.state.hasError)
      ? (
        <Fragment>
          <div className="error-modal">
            <h1>
              Aw, crap 
              <span role="img" aria-label="dead emoji"> 😵</span>
            </h1>
            If this keeps happening, please reload
          </div>;
        </Fragment>
      ) 
      : this.props.children; 
  }
}
