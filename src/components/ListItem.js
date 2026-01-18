import React, { Component, Fragment } from 'react';

import Hoverable from './Hoverable';
import { number, bool } from '../proptypes-constants';

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
    hover: bool.isRequired,
    finalVal: bool
  };

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

// might go back to making this play a tone on hover again

export const HoverableListItem = (props) => (
  <Hoverable>
    {({ hover }) => (
      <ListItem {...props} hover={hover} />
    )}
  </Hoverable>
);

HoverableListItem.propTypes = {
  num: number.isRequired,
  finalVal: bool
};
