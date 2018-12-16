import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ListItem from './ListItem';
import createOscillator from '../utils';

const Ul = styled.ul`
  width: 400px;
  margin: 1em auto;
  padding-left: 0;
  list-style-type: none;
`;

const Even = styled.span` color: #0ff; `;
const Odd = styled.span` color: #f0f; `;

export default class List extends Component {
  static propTypes = {
    sequence: PropTypes.arrayOf(PropTypes.number).isRequired,
    scaledSequence: PropTypes.arrayOf(PropTypes.number).isRequired,
    wave: PropTypes.string.isRequired
  }

  state = {
    audio: null
  };
  
  playTone = (num, wave) => {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const { audio } = this.state;
    let audioCtx;

    if (!audio) {
      audioCtx = new AudioContext();
  
      this.setState({ audio: audioCtx });
    } else {
      audioCtx = audio;
    }

    const osc = createOscillator(audioCtx, wave, num);
    
    setTimeout( () => {
      osc.disconnect(audioCtx.destination);
    }, 500);
  }

  render() {
    const { sequence, scaledSequence, wave } = this.props;

    return (
      <div>
        <Ul>
          {sequence.map( (num, i) => {
            let scaledNum = scaledSequence[i];

            if (i === sequence.length - 1) return (
              <ListItem 
                playTone={() => this.playTone(scaledNum, wave)} 
                key={num} 
              >
                <Odd>{num} has been reached</Odd>
              </ListItem>
            );
            
            return (num % 2 === 0)
              ? (
                <ListItem 
                  playTone={() => this.playTone(scaledNum, wave)} 
                  key={num}
                >
                  <Even>{num} is even</Even> so we divide by 2
                </ListItem>
              ) : (
                <ListItem 
                  playTone={() => this.playTone(scaledNum, wave)} 
                  key={num}
                >
                  <Odd>{num} is odd</Odd> so we multiply by 3, then add 1
                </ListItem>
              );   
          })}
        </Ul>
      </div>
    );
  }
}
