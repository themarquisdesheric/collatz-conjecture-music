import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ListItem from './ListItem';

const Ul = styled.ul`
  width: 400px;
  margin: 1em auto;
  padding-left: 0;
  list-style-type: none;
`;

const Even = styled.span` color: #0ff; `;

const Odd = styled.span` color: #f0f; `;

export default class List extends Component {
  static displayName = 'List';

  static propTypes = {
    sequence: PropTypes.arrayOf(PropTypes.number).isRequired,
    scaledSequence: PropTypes.arrayOf(PropTypes.number).isRequired,
    wave: PropTypes.string.isRequired
  }

  state = {
    audio: null
  };
  
  playTone(num, wave) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    let audioCtx;

    if (!this.state.audio) {
      audioCtx = new AudioContext();
  
      this.setState({ audio: audioCtx });
    } else audioCtx = this.state.audio;

    const osc = audioCtx.createOscillator();
    
    osc.type = wave;
    osc.connect(audioCtx.destination);
    osc.start();
    osc.frequency.value = num;

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
              <ListItem key={num}>
                {/* TODO: not happy with how hacky this is, but am crashing everything when passing playTones as a prop to ListItem */}
                <span onMouseEnter={() => this.playTone(scaledNum, wave)}>
                  <Odd>{num} has been reached</Odd>
                </span>
              </ListItem>
            );
            
            return (num % 2 === 0)

              ? (
                <ListItem key={num}>
                  <span onMouseEnter={() => this.playTone(scaledNum, wave)}>
                    <Even>{num} is even</Even> so we divide by 2
                  </span>
                </ListItem>
      
              ) : (
            
                <ListItem key={num}>
                  <span onMouseEnter={() => this.playTone(scaledNum, wave)}>
                    <Odd>{num} is odd</Odd> so we multiply by 3, then add 1
                  </span>
                </ListItem>
              );   
          })}
        </Ul>
      </div>
    );
  }
}