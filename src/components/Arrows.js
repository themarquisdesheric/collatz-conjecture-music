import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ArrowLeftOutline from 'react-icons/lib/ti/arrow-left-outline';
import ArrowRightOutline from 'react-icons/lib/ti/arrow-right-outline';

const ArrowOutline = (direction, component) =>
  styled(component)`
    font-size: 3em;
    position: fixed;
    top: 50%;
    ${direction}: 8%;

    @media (max-width: 450px) {
      ${direction}: 2%;
    }
`;

ArrowOutline.propTypes = {
  direction: PropTypes.string.isRequired,
  component: PropTypes.node.isRequired
};

const LeftArrow = ArrowOutline('left', ArrowLeftOutline);
const RightArrow = ArrowOutline('right', ArrowRightOutline);

class HoverableArrow extends Component {
  static propTypes = {
    left: PropTypes.bool.isRequired,
    handleClick: PropTypes.func.isRequired
  }

  state = {
    hover: false
  };

  toggleHover = () => {
    this.setState({ hover: !this.state.hover });
  }

  render() {
    const color = this.state.hover ? '#eee' : 'rgba(238, 238, 238, .1)';
    const { left, handleClick } = this.props;

    return (
      <div 
        style={{ color }}
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}  
      >
        {left
          ? <LeftArrow onClick={handleClick} />
          : <RightArrow onClick={handleClick} />
        }
      </div>
    );
  }
}

const Arrows = ({ handleIncrement, handleDecrement }) => (
  <Fragment>
    <HoverableArrow left={true} handleClick={handleDecrement} />
    <HoverableArrow left={false} handleClick={handleIncrement} />
  </Fragment>
);

Arrows.propTypes = {
  handleIncrement: PropTypes.func.isRequired,
  handleDecrement: PropTypes.func.isRequired
};

export default Arrows;
