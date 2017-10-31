import React, { Component } from 'react';
import styled from 'styled-components';
import FaMusic from 'react-icons/lib/fa/music';

const Li = styled.li` padding: .3em 0; `;

const MusicIcon = styled(FaMusic)`
  color: #0ff;
  position: absolute;
  left: ${({ coords }) => `${coords.clientX}px` };
  top: ${({ coords }) => `${coords.clientY}px` };
`;

export default class ListItem extends Component {
  state = {
    clientX: null,
    clientY: null
  }

  mouseIn({ clientX, clientY }) {
    this.setState({ 
      clientX,
      clientY
    });
  }

  mouseOut() {
    this.setState({ 
      clientX: null,
      clientY: null
    });
  }

  render() {
    return (
      <Li 
        onMouseEnter={this.mouseIn.bind(this)}
        onMouseLeave={this.mouseOut.bind(this)}
      >
        {this.props.children}
        {this.state.clientX ? <MusicIcon coords={this.state} /> : null}
      </Li>
    );
  }
}