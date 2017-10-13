import React, { Component } from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;

const Li = styled.li`
  padding: .3em 0;
  font-family: 'Oswald', sans-serif; 
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
    } 
    else audioCtx = this.state.audio;

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
        <Ul>
          {sequence.map( (num, i) => {
            if (i === sequence.length - 1) return (
              <Li 
                key={i} 
                onMouseEnter={ () => this.playTone(num, wave) }
              >
                <Odd>{num} has been reached</Odd>
              </Li>
            );
            
            return (num % 2 === 0)

              ? 
            
              <Li 
                key={i} 
                onMouseEnter={ () => this.playTone(num, wave) }
              >
                <Even>{num} is even</Even> so we divide by 2
              </Li>
            
              :
            
              <Li 
                key={i}
                onMouseEnter={ () => this.playTone(num, wave) }
              >
                <Odd>{num} is odd</Odd> so we multiply by 3, then add 1
              </Li>;
          })}
        </Ul>
      </div>
    );
  }
}