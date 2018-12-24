import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FaMusic from 'react-icons/lib/fa/music';

import { createOscillator } from '../utils';

const Li = styled.li` padding: .3em 0; `;

const MusicIcon = styled(FaMusic)`
  color: #0ff;
  position: absolute;
  left: ${({ clientx }) => `${clientx}px` };
`;

MusicIcon.propTypes = {
  clientx: PropTypes.number
};

export default class ListItem extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    num: PropTypes.number.isRequired,
    wave: PropTypes.string.isRequired
  }

  state = {
    clientX: null
  };

  playTone = () => {
    const { audio } = this.state;
    const { num, wave } = this.props;
    const [ osc, audioCtx ] = createOscillator(wave, num, audio);
    
    if (!audio) {
      this.setState({ audio: audioCtx });
    } 

    setTimeout( () => {
      osc.disconnect(audioCtx.destination);
    }, 500);
  }

  mouseIn = ({ clientX }) => {
    this.setState({ clientX });
  }

  mouseOut = () => {
    this.setState({ clientX: null });
  }

  render() {
    const { clientX } = this.state;

    return (
      <Li 
        onMouseEnter={this.mouseIn}
        onMouseLeave={this.mouseOut}
      >
        <span onMouseEnter={this.playTone}>
          {this.props.children}
          {clientX && <MusicIcon clientx={clientX} />}
        </span>
      </Li>
    );
  }
}
