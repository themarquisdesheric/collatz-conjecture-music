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
    const [ osc, audioCtx ] = createOscillator(this.props.wave);

    this.osc = osc;
    this.audioCtx = audioCtx;
    this.playSequence();  
  }

  componentWillUnmount() {
    this.osc.disconnect(this.audioCtx.destination);
    this.audioCtx.close();
  }

  playSequence = () => {
    const { scaledSequence, handlePlaybackEnd } = this.props;
    let counter = 0;

    if (!scaledSequence.length) return;

    const intervalID = setInterval( () => {
      if (counter === scaledSequence.length) {
        clearInterval(intervalID);
        handlePlaybackEnd();
      } else {
        this.osc.frequency.value = scaledSequence[counter];

        counter++;
      }
    }, 300);
  }

  render() {
    return null;
  }
}
