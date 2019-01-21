import { Component } from 'react';
import PropTypes from 'prop-types';

import { createOscillator } from '../utils';

export default class Music extends Component {
  static propTypes = {
    sequence: PropTypes.arrayOf(
      PropTypes.number
    ),
    wave: PropTypes.string.isRequired
  }

  componentDidMount() {
    this.playSequence(this.props.sequence, this.props.wave);
  }
  
  componentDidUpdate(prevProps) {
    const { sequence, wave } = this.props;

    if (prevProps.sequence[0] !== sequence[0]) {
      this.playSequence(sequence, wave);
    }
  }

  playSequence = (sequence, wave) => {
    const [ osc, audioCtx ] = createOscillator(wave);
    let counter = 0;
  
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

  render() {
    return null;
  }
}
