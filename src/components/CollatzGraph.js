import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Chart from './Chart';
import List from './List';
import Music from './Music';
import { scaleBetween } from '../utils';

const CollatzGraph = ({ sequence, wave }) => {
  const scaledSequence = scaleBetween(sequence, 880, 9000);

  return (
    <Fragment>
      <Chart data={sequence} />
      <List 
        sequence={sequence} 
        scaledSequence={scaledSequence}
        wave={wave}
      />
      <Music sequence={scaledSequence} wave={wave} />
    </Fragment>
  );
}

CollatzGraph.propTypes = {
  sequence: PropTypes.array.isRequired,
  wave: PropTypes.string.isRequired
};

export default CollatzGraph;
