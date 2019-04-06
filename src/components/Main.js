import React, { Component } from 'react';

import Header from './Header';
import RenderContent from './RenderContent';
import Controls from './Controls';
import Music from './Music';
import Footer from './Footer';
import { calculateCollatz, scaleSequence } from '../utils';

export default class Main extends Component {
  state = {
    sequence: [],
    scaledSequence: null,
    wave: 'sine',
    isPlaying: false
  };

  handleWave = ({ target }) => {
    this.setState({ wave: target.value });
  }

  handleCollatz = (startVal) => {
    const sequence = calculateCollatz(startVal);

    this.setState({ 
      sequence,
      scaledSequence: scaleSequence(sequence),
      isPlaying: true
    });
  }

  handlePlaybackStart = () => {
    this.setState({ isPlaying: true });
  }
  
  handlePlaybackEnd = () => {
    this.setState({ 
      isPlaying: false,
      scaledSequence: null
    });
  }
  
  handleRepeat = (startVal) => {
    this.setState({ sequence: [] }, () => {
      this.handleCollatz(startVal);
    });
  }

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
          isPlaying={isPlaying}
        />

        {isPlaying && 
          scaledSequence && 
            <Music 
              scaledSequence={scaledSequence} 
              wave={wave} 
              handlePlaybackStart={this.handlePlaybackStart} 
              handlePlaybackEnd={this.handlePlaybackEnd} 
            />
        }
        <Footer />
      </div>
    );
  }
}
