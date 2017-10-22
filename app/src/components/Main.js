import React, { Component } from 'react';
import IntroBlurb from './IntroBlurb';
import Form from './Form';
import List from './List';

export default class Main extends Component {
  static displayName = 'Main';

  state = {
    sequence: [],
    wave: 'sine'
  };

  renderCollatz(sequence) {
    this.setState({ sequence });
    this.playCollatz(sequence);
  }

  handleWave({ target }) {
    this.setState({ wave: target.value });
  }

  playCollatz(sequence) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    let audioCtx;

    if (!this.state.audio) {
      audioCtx = new AudioContext();
  
      this.setState({ audio: audioCtx });
    } 
    else audioCtx = this.state.audio;

    const osc = audioCtx.createOscillator();
    let counter = 0;
    
    osc.type = this.state.wave;
    osc.connect(audioCtx.destination);
    osc.start();
    osc.frequency.value = 0;
  
    const intervalID = setInterval( () => {
      if (counter === sequence.length) {
        clearInterval(intervalID);
        osc.disconnect(audioCtx.destination);
      } else {
        // TODO: use logarithmic step, keep working on normalizing audio to human hearing range

        // multiplying frequency by 110 to hear better, and by 1.05946 for the semitones step
        osc.frequency.value = sequence[counter] * 110 * 1.05946;

        counter++;
      }
    }, 300);
  }

  render() {
    const { sequence, wave } = this.state;

    return (
      <div>
        {sequence.length === 0
          ? <IntroBlurb />
          : <List sequence={sequence} wave={wave} />
        }

        <Form
          renderCollatz={this.renderCollatz.bind(this)}
          selected={this.state.wave}
          handleWave={this.handleWave.bind(this)}
        />
      </div>
    );
  }
}