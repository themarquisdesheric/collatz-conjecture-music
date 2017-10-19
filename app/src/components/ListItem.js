import React, { Component } from 'react';
import styled from 'styled-components';
import FaMusic from 'react-icons/lib/fa/music';

const Li = styled.li`
  padding: .3em 0;
  font-family: 'Oswald', sans-serif;
  position: relative;
`;

const MusicIcon = styled(FaMusic)`
  color: #fff;
  position: absolute;
  right: 0;
`;

export default class ListItem extends Component {
  state = {
    mouseOver: false
  }

  mouseIn() {
    this.setState({ mouseOver: true });
  }

  mouseOut() {
    this.setState({ mouseOver: false });
  }

  render() {
    return (
      <Li 
        onMouseEnter={this.mouseIn.bind(this)}
        onMouseLeave={this.mouseOut.bind(this)}
      >
        {this.props.children}
        {this.state.mouseOver ? <MusicIcon /> : null}
      </Li>
    );
  }
}