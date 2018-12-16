import React, { Component } from 'react';

import IntroBlurb from './IntroBlurb';
import Chart from './Chart';
import Form from './Form';
import List from './List';
import createOscillator from '../utils';

export default class Main extends Component {
  state = {
    sequence: [],
    scaledSequence: [],
    wave: 'sine'
  };

  calculateCollatz = (n) => {
    let num = Number(n);
    const sequence = [num];
  
    while (num > 1) {
      if (num % 2 === 0) {
        num /= 2;
      } else {
        num = num * 3 + 1;
      }
      sequence.push(num);
    }

    return sequence;
  }

  playCollatz = (sequence) => {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const { audio, wave, } = this.state;
    let audioCtx;

    if (!audio) {
      audioCtx = new AudioContext();
  
      this.setState({ audio: audioCtx });
    } else {
      audioCtx = audio;
    }

    let counter = 0;
    const osc = createOscillator(audioCtx, wave);
    const intervalID = setInterval( () => {
      if (counter === sequence.length) {
        clearInterval(intervalID);
        
        osc.disconnect(audioCtx.destination);
      } else {
        osc.frequency.value = sequence[counter];

        counter++;
      }
    }, 300);
  }

  // scale to within speaker's capabilities between min/max hz
  scaleBetween = (unscaled, floor, ceiling) => {
    const min = Math.min(...unscaled);
    const max = Math.max(...unscaled);
  
    return unscaled.map( (num) => 
      (ceiling - floor) * (num - min) / (max - min) + floor
    );
  }

  handleWave = ({ target }) => {
    this.setState({ wave: target.value });
  }

  renderCollatz = (startVal) => {
    const sequence = this.calculateCollatz(startVal);
    const scaledSequence = this.scaleBetween(sequence, 880, 9000);

    this.setState({ 
      sequence, 
      scaledSequence
    });

    this.playCollatz(scaledSequence);
  }

  render() {
    const { sequence, scaledSequence, wave } = this.state;

    return (
      <div>
        {!!sequence.length && <Chart data={sequence} />}
        
        {sequence.length === 0
          ? <IntroBlurb />
          : <List 
              sequence={sequence} 
              wave={wave}
              scaledSequence={scaledSequence}
            />
        }

        <Form
          renderCollatz={this.renderCollatz}
          selected={wave}
          handleWave={this.handleWave}
          sequence={sequence}
        />
      </div>
    );
  }
}
