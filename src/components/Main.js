import React, { Component } from 'react';

import Header from './Header';
import RenderContent from './RenderContent';
import Controls from './Controls';
import Music from './Music';
import Footer from './Footer';
import { calculateCollatz } from '../utils';

export default class Main extends Component {
  state = {
    sequence: [],
    wave: 'sine',
    isPlaying: false
  };

  handleWave = ({ target }) => {
    this.setState({ wave: target.value });
  }

  handleCollatz = (startVal) => {
    const sequence = calculateCollatz(startVal);

    this.setState({ sequence });
  }

  handlePlaybackStart = () => {
    this.setState({ isPlaying: true });
  }
  
  handlePlaybackEnd = () => {
    this.setState({ isPlaying: false });
  }

  render() {
    const { sequence, wave, isPlaying } = this.state;

    return (
      <div id="wrapper">
        <Header />
        <RenderContent sequence={sequence} />
        <Controls
          sequence={sequence}
          wave={wave}
          handleCollatz={this.handleCollatz}
          handleWave={this.handleWave}
          isPlaying={isPlaying}
        />

        {/* // ! repeat doesn't work */}

        <Music 
          sequence={sequence} 
          wave={wave} 
          handlePlaybackStart={this.handlePlaybackStart} 
          handlePlaybackEnd={this.handlePlaybackEnd} 
        />
        <Footer />
      </div>
    );
  }
}
