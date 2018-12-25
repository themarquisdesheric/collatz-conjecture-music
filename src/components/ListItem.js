import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Hoverable from './Hoverable';
import { createOscillator } from '../utils';

const Even = styled.span` color: #0ff; `;
const Odd = styled.span` color: #f0f; `;

const EvenOrOdd = ({ num }) => 
  (num % 2 === 0)
    ? <Fragment>
        <Even>{num} is even</Even> so we divide by 2 
      </Fragment>
    : <Fragment>
        <Odd>{num} is odd</Odd> so we multiply by 3, then add 1 
      </Fragment>;

EvenOrOdd.propTypes = {
  num: PropTypes.number.isRequired
};

const Li = styled.li` 
  padding: .3em 0;
  transition: transform .3s; 
`;

class ListItem extends Component {
  static propTypes = {
    num: PropTypes.number.isRequired,
    scaledNum: PropTypes.number.isRequired,
    wave: PropTypes.string.isRequired,
    hover: PropTypes.bool.isRequired,
    finalVal: PropTypes.bool
  }

  state = {
    osc: undefined,
    audio: undefined
  }
  
  componentDidMount() {
    const [ osc, audioCtx ] = createOscillator(this.props.wave);

    this.setState({
      osc,
      audioCtx,
      connected: false
    });
  }

  componentDidUpdate(prevProps) {
    const { hover } = this.props;

    if (prevProps.hover !== hover && hover) {
      this.playTone();
    }
  }

  playTone = () => {
    const { osc, audioCtx, connected } = this.state;
    const { wave, scaledNum } = this.props;

    osc.type = wave;
    osc.frequency.value = scaledNum;
    
    if (!connected) {
      osc.connect(audioCtx.destination);
      
      this.setState({
        connected: true
      });
      
      setTimeout( () => {
        osc.disconnect(audioCtx.destination);
        
        this.setState({
          connected: false
        });
      }, 500);
    } 
  }

  render() {
    const { hover, num, finalVal } = this.props;
    const transform = hover ? 'scale(1.1)' : '';

    return (
      <Li style={{ transform }}>
        {finalVal
          ? <Odd>{num} has been reached </Odd>
          : <EvenOrOdd num={num} />
        }
      </Li>
    );
  }
}

export const HoverableListItem = (props) => (
  <Hoverable>
    {({ hover }) => (
      <ListItem {...props} hover={hover} />
    )}
  </Hoverable>
);

HoverableListItem.propTypes = {
  num: PropTypes.number.isRequired,
  scaledNum: PropTypes.number.isRequired,
  wave: PropTypes.string.isRequired,
  finalVal: PropTypes.bool
}
