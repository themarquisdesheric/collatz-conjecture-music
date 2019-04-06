import { Component } from 'react';

import { arrayOf, number, string, func } from '../proptypes-constants';
import { createOscillator } from '../utils';

export default class Music extends Component {
  static propTypes = {
    scaledSequence: arrayOf(number),
    wave: string.isRequired,
    handlePlaybackEnd: func.isRequired
  }

  componentDidMount() {
    this.playSequence();  
  }

  playSequence = () => {
    const { scaledSequence, wave, handlePlaybackEnd } = this.props;
    const [ osc, audioCtx ] = createOscillator(wave);
    let counter = 0;

    if (!scaledSequence.length) return;

    const intervalID = setInterval( () => {
      if (counter === scaledSequence.length) {
        handlePlaybackEnd();

        clearInterval(intervalID);

        osc.disconnect(audioCtx.destination);
      } else {
        osc.frequency.value = scaledSequence[counter];

        counter++;
      }
    }, 300);
  }

  render() {
    return null;
  }
}
