import React, { Component } from 'react';

import Header from './Header';
import RenderContent from './RenderContent';
import Controls from './Controls';
import ErrorBoundary from './ErrorBoundary';
import Music from './Music';
import Footer from './Footer';
import { calculateCollatz, scaleSequence, dispatchAnalytics } from '../utils';

export default class Main extends Component {
  state = {
    sequence: [],
    scaledSequence: null,
    wave: 'sine',
    isPlaying: false
  };

  handleWave = ({ target }) => {
    const wave = target.value;

    dispatchAnalytics('Update Wave Type', wave);
    this.setState({ wave });
  };

  handleCollatz = (startVal) => {
    const sequence = calculateCollatz(startVal);
    
    dispatchAnalytics('Calculate Collatz', startVal);
    this.setState({ 
      sequence,
      scaledSequence: scaleSequence(sequence),
      isPlaying: true
    });
  };

  handlePlaybackStart = () => {
    this.setState({ isPlaying: true });
  };
  
  handlePlaybackEnd = () => {
    this.setState({ 
      isPlaying: false,
      scaledSequence: null
    });
  };
  
  handleRepeat = (startVal) => {
    dispatchAnalytics('Sequence Repeated', startVal);
    this.setState({ sequence: [] }, () => {
      this.handleCollatz(startVal);
    });
  };

  handleError = () => {
    window.scrollTo(0, 0);
    this.handlePlaybackEnd();
  };

  render() {
    const { sequence, scaledSequence, wave, isPlaying } = this.state;

    return (
      <div id="wrapper">
        <Header />
        <RenderContent sequence={sequence} />
        <Controls
          sequence={sequence}
          wave={wave}
          handleCollatz={this.handleCollatz}
          handleWave={this.handleWave}
          handleRepeat={this.handleRepeat}
          handlePlaybackEnd={this.handlePlaybackEnd}
          isPlaying={isPlaying}
        />
        {isPlaying && 
          scaledSequence && 
            <ErrorBoundary handleError={this.handleError}>
              <Music 
                scaledSequence={scaledSequence} 
                wave={wave} 
                handlePlaybackStart={this.handlePlaybackStart} 
                handlePlaybackEnd={this.handlePlaybackEnd}
              />
            </ErrorBoundary>
        }
        <Footer />
      </div>
    );
  }
}
