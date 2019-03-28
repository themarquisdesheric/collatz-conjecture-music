import { Component } from 'react';

import { arrayOf, number, string, func } from '../proptypes-constants';
import { createOscillator, scaleSequence } from '../utils';

export default class Music extends Component {
  static propTypes = {
    sequence: arrayOf(number),
    wave: string.isRequired,
    handlePlaybackStart: func.isRequired,
    handlePlaybackEnd: func.isRequired
  }

  state = {
    scaledSequence: []
  };

  componentDidUpdate(prevProps) {
    if (
      !this.state.scaledSequence.length || 
      prevProps.sequence[0] !== this.props.sequence[0]
    ) {
      this.setState({
        scaledSequence: scaleSequence(this.props.sequence)
      });
      this.playSequence();
    }
  }

  playSequence = () => {
    const { sequence, wave, handlePlaybackStart, handlePlaybackEnd } = this.props;
    const [ osc, audioCtx ] = createOscillator(wave);
    let counter = 0;
    
    if (!sequence.length) return;

    handlePlaybackStart();

    const intervalID = setInterval( () => {
      if (counter === sequence.length) {
        handlePlaybackEnd();

        clearInterval(intervalID);

        osc.disconnect(audioCtx.destination);
      } else {
        osc.frequency.value = this.state.scaledSequence[counter];

        counter++;
      }
    }, 300);
  }

  render() {
    return null;
  }
}
