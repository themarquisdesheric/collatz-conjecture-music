import React from 'react';
import PropTypes from 'prop-types';

import { HoverableListItem as ListItem } from './ListItem';

const List = ({ sequence, scaledSequence, wave }) => (
  <div className="sequence-list">
    <ul>
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
    </ul>
  </div>
);

List.propTypes = {
  sequence: PropTypes.arrayOf(PropTypes.number).isRequired,
  scaledSequence: PropTypes.arrayOf(PropTypes.number).isRequired,
  wave: PropTypes.string.isRequired
};

export default List;
