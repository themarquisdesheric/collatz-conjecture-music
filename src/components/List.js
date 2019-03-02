import React from 'react';

import { HoverableListItem as ListItem } from './ListItem';
import { arrayOf, number, string } from '../proptypes-constants';

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
  sequence: arrayOf(number).isRequired,
  scaledSequence: arrayOf(number).isRequired,
  wave: string.isRequired
};

export default List;
