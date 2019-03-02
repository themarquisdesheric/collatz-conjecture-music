import React, { Fragment } from 'react';

import Chart from './Chart';
import List from './List';
import { arrayOf, number, string } from '../proptypes-constants';
import { scaleSequence } from '../utils';

const CollatzGraph = ({ sequence, wave }) => (
  <Fragment>
    <Chart data={sequence} />
    <List 
      sequence={sequence} 
      scaledSequence={scaleSequence(sequence)}
      wave={wave}
    />
  </Fragment>
);

CollatzGraph.propTypes = {
  sequence: arrayOf(number).isRequired,
  wave: string.isRequired
};

export default CollatzGraph;
