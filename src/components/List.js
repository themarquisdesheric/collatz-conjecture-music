import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { HoverableListItem as ListItem } from './ListItem';

const Ul = styled.ul`
  width: 400px;
  margin: 1em auto;
  padding-left: 0;
  list-style-type: none;
`;

export default class List extends Component {
  static propTypes = {
    sequence: PropTypes.arrayOf(PropTypes.number).isRequired,
    scaledSequence: PropTypes.arrayOf(PropTypes.number).isRequired,
    wave: PropTypes.string.isRequired
  }

  render() {
    const { sequence, scaledSequence, wave } = this.props;

    return (
      <div>
        <Ul>
          {sequence.map( (num, i) => {
            let scaledNum = scaledSequence[i];

            return (i === sequence.length - 1) 
              ? <ListItem 
                  num={num}
                  scaledNum={scaledNum}
                  wave={wave}
                  finalVal={true}
                  key={num}
                />
              : <ListItem num={num} scaledNum={scaledNum} wave={wave} key={num} />
          })}
        </Ul>
      </div>
    );
  }
}
