import React, { Component } from 'react';
import styled from 'styled-components';
import ListItem from './ListItem';
import Chart from './Chart';

const Ul = styled.ul`
  width: 40%;
  margin: 1em auto;
  padding-left: 0;
  list-style-type: none;
`;

const Even = styled.span` color: #f0f; `;

const Odd = styled.span` color: #0ff; `;

export default class List extends Component {
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
    this.setState({ osc });
  
    osc.type = wave;
    osc.connect(audioCtx.destination);
    osc.start();
    osc.frequency.value = num * 110 * 1.05946;

    setTimeout( () => {
      osc.disconnect(audioCtx.destination);
    }, 300);
  }

  render() {
    const { sequence, wave } = this.props;

    return (
      <div>
        <Chart data={sequence} />
        
        <Ul>
          {sequence.map( (num, i) => {
            if (i === sequence.length - 1) return (
              <ListItem key={i}>
                {/* TODO: not happy with how hacky this is, but am crashing everything when passing playTones as a prop to ListItem */}
                <span onMouseEnter={() => this.playTone(num, wave)}>
                  <Odd>{num} has been reached</Odd>
                </span>
              </ListItem>
            );
            
            return (num % 2 === 0)

              ? 
            
              <ListItem key={i}>
                <span onMouseEnter={() => this.playTone(num, wave)}>
                  <Even>{num} is even</Even> so we divide by 2
                </span>
              </ListItem>
      
              :
            
              <ListItem key={i}>
                <span onMouseEnter={() => this.playTone(num, wave)}>
                  <Odd>{num} is odd</Odd> so we multiply by 3, then add 1
                </span>
              </ListItem>;
          })}
        </Ul>
      </div>
    );
  }
}