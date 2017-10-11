import React from 'react';

const ListItem = ({ num, i }) => (num % 2 === 0)
  ? <li key={i}>{num} is even so we divide by 2</li>
  : <li key={i}>{num} is odd so we multiply by 3, then add 1</li>;

export default ListItem;