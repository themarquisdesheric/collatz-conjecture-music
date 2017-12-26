import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FaMusic from 'react-icons/lib/fa/music';

const Li = styled.li` padding: .3em 0; `;

const MusicIcon = styled(FaMusic)`
  color: #0ff;
  position: absolute;
  left: ${({ clientx }) => `${clientx}px` };
  top: ${({ clienty }) => `${clienty}px` };
`;

MusicIcon.propTypes = {
  clientx: PropTypes.number,
  clienty: PropTypes.number
};

export default class ListItem extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  state = {
    clientx: null,
    clienty: null
  }

  mouseIn = ({ clientX, clientY }) => {
    this.setState({ 
      clientx: clientX,
      clienty: clientY
    });
  }

  mouseOut = () => {
    this.setState({ 
      clientx: null,
      clienty: null
    });
  }

  render() {
    return (
      <Li 
        onMouseEnter={this.mouseIn}
        onMouseLeave={this.mouseOut}
      >
        {this.props.children}
        {this.state.clientx ? <MusicIcon {...this.state} /> : null}
      </Li>
    );
  }
}
