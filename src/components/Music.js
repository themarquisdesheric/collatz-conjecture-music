import { Component } from 'react';
import PropTypes from 'prop-types';

export default class Music extends Component {
  static propTypes = {
    sequence: PropTypes.array.isRequired,
    wave: PropTypes.string.isRequired
  }

  componentDidMount() {
    this.playSequence(this.props.sequence, this.props.wave);
  }
  
  componentDidUpdate(prevProps) {
    const { sequence, wave } = this.props;

    if (prevProps.sequence !== sequence || prevProps.wave !== wave) {
      this.playSequence(sequence, wave);
    }
  }

  createOscillator = (
    wave, 
    audioCtx = new (window.AudioContext || window.webkitAudioContext)()
  ) => {
    const osc = audioCtx.createOscillator();
  
    osc.type = wave;
    osc.connect(audioCtx.destination);
    osc.start();
    osc.frequency.value = 0;
  
    return [osc, audioCtx];
  }

  playSequence = (sequence, wave) => {
    const [ osc, audioCtx ] = this.createOscillator(wave);
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
