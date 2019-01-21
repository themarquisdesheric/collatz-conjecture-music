import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ArrowLeftOutline from 'react-icons/lib/ti/arrow-left-outline';
import ArrowRightOutline from 'react-icons/lib/ti/arrow-right-outline';

import Hoverable from './Hoverable';

const ArrowOutline = (direction, component) =>
  styled(component)`
    font-size: 3em;
    position: fixed;
    ${direction}: 2%;
    top: 75%;
  
    @media (min-width: 700px) {
      top: 60%;
      ${direction}: 8%;
    }
  `;

ArrowOutline.propTypes = {
  direction: PropTypes.string.isRequired,
  component: PropTypes.node.isRequired
};

const LeftArrow = ArrowOutline('left', ArrowLeftOutline);
const RightArrow = ArrowOutline('right', ArrowRightOutline);

export const HoverableArrow = ({ left, handleClick }) => (
  <Hoverable>
    {({ hover }) => {
      const color = hover ? '#eee' : 'rgba(238, 238, 238, .1)';
  
      return (
        <div style={{ color }}>
          {left
            ? <LeftArrow onClick={handleClick} />
            : <RightArrow onClick={handleClick} />
          }
        </div>
      );
    }}
  </Hoverable>
);

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
