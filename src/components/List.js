import React from 'react';

import { HoverableListItem as ListItem } from './ListItem';
import { arrayOf, number } from '../proptypes-constants';

const List = ({ sequence }) => (
  <div className="sequence-list">
    <ul>
      {sequence.map( (num, i) => 
        (i === sequence.length - 1) 
          ? <ListItem 
              num={num}
              finalVal={true}
              key={num}
            />
          : <ListItem num={num} key={num} />
      )}
    </ul>
  </div>
);

List.propTypes = {
  sequence: arrayOf(number).isRequired
};

export default List;
