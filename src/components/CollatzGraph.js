import React, { Fragment } from 'react';

import Chart from './Chart';
import List from './List';
import { arrayOf, number } from '../proptypes-constants';

const CollatzGraph = ({ sequence }) => (
  <Fragment>
    <Chart data={sequence} />
    <List sequence={sequence} />
  </Fragment>
);

CollatzGraph.propTypes = {
  sequence: arrayOf(number).isRequired
};

export default CollatzGraph;
