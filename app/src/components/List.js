import React from 'react';

export default function List({ sequence = [] }) {
  return (
    <ul>
      {sequence.map(function(num, i) {
        return (num % 2 === 0)
          ? <li key={i}>{num} is even so we divide by 2</li>
          : <li key={i}>{num} is odd so we multiply by 3, then add 1</li>;
      })}
    </ul>
  );
}