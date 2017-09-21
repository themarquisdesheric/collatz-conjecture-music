import React, { Component } from 'react';
import Form from './Form';
import List from './List';

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sequence: null,
      wave: 'sine'
    };

    this.collatz = this.collatz.bind(this);
    this.handleWave = this.handleWave.bind(this);
  }

  collatz(sequence) {
    this.setState({ sequence });
    this.playCollatz(sequence);
  }

  handleWave({ target }) {
    this.setState({ wave: target.value });
  }

  playCollatz(sequence) {
    var AudioContext = window.AudioContext || window.webkitAudioContext;
    var audioCtx = new AudioContext();
    var osc = audioCtx.createOscillator();
    var counter = 0;
    
    osc.type = this.state.wave;
    osc.connect(audioCtx.destination);
    osc.start();
    osc.stop(sequence.length);
  
    var intervalID = setInterval(function() {
      if (counter === sequence.length - 1) {
        clearInterval(intervalID);
        osc.disconnect(audioCtx.destination);
      } else {
        // multiplying frequency by 110 to hear better, and by 1.05946 for the semitones step
        osc.frequency.value = sequence[counter] * 110 * 1.05946;
        counter++;
      }
    }, 300);
  }

  render() {
    var { sequence } = this.state;

    return (
      <div>
        {sequence && <List sequence={sequence} />}
        <Form
          renderCollatz={this.collatz}
          selected={this.state.wave}
          handleWave={this.handleWave}
        />
      </div>
    );
  }
}