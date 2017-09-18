import React from 'react';

export default function List({ sequence = [] }) {
  return (
    <div>
      <ul style={{
        listStyleType: 'none',
        paddingLeft: 0
      }}>
        {sequence.map(function(num, i) {
          if (i === sequence.length - 1) return num;

          return (num % 2 === 0)
            ? <li key={i}>{num} is even so we divide by 2</li>
            : <li key={i}>{num} is odd so we multiply by 3, then add 1</li>;
        })}
      </ul>
    </div>
  );
}