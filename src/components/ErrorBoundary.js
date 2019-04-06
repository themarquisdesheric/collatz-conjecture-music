import React, { Component, Fragment } from 'react';

import { func } from '../proptypes-constants';

export default class ErrorBoundary extends Component {
  static propTypes = {
    handleError: func.isRequired
  }

  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }
  
  componentDidCatch() {
    setTimeout(() => this.props.handleError(), 5000);
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
            I guess today is The Day the Music Died
          </div>;
        </Fragment>
      ) 
      : this.props.children; 
  }
}
