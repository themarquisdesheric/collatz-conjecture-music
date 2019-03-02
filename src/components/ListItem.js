import React, { Component, Fragment } from 'react';

import Hoverable from './Hoverable';
import { number, string, bool } from '../proptypes-constants';
import { createOscillator } from '../utils';

const EvenOrOdd = ({ num }) => 
  (num % 2 === 0)
    ? <Fragment>
        <span className="even">{num} is even</span> so we divide by 2 
      </Fragment>
    : <Fragment>
        <span className="odd">{num} is odd</span> so we multiply by 3, then add 1 
      </Fragment>;

EvenOrOdd.propTypes = {
  num: number.isRequired
};

class ListItem extends Component {
  static propTypes = {
    num: number.isRequired,
    scaledNum: number.isRequired,
    wave: string.isRequired,
    hover: bool.isRequired,
    finalVal: bool
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
      
      this.setState({ connected: true });
      
      setTimeout( () => {
        osc.disconnect(audioCtx.destination);
        
        this.setState({ connected: false });
      }, 500);
    } 
  }

  render() {
    const { hover, num, finalVal } = this.props;
    const transform = hover ? 'scale(1.1)' : '';

    return (
      <li style={{ transform }}>
        {finalVal
          ? <span className="odd">{num} has been reached</span>
          : <EvenOrOdd num={num} />
        }
      </li>
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
  num: number.isRequired,
  scaledNum: number.isRequired,
  wave: string.isRequired,
  finalVal: bool
};
