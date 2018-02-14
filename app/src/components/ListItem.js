import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FaMusic from 'react-icons/lib/fa/music';

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
    children: PropTypes.node.isRequired
  }

  state = {
    clientX: null
  }

  mouseIn = ({ clientX }) => {
    this.setState({ 
      clientX
    });
  }

  mouseOut = () => {
    this.setState({ 
      clientX: null
    });
  }

  render() {
    const { clientX } = this.state;

    return (
      <Li 
        onMouseEnter={this.mouseIn}
        onMouseLeave={this.mouseOut}
      >
        {this.props.children}
        {clientX ? <MusicIcon clientx={clientX} /> : null}
      </Li>
    );
  }
}
