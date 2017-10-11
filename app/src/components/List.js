import React from 'react';
import styled from 'styled-components';

var Ul = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;

var Li = styled.li`
  padding: .3em 0;
  font-family: 'Oswald', sans-serif; 
`;

var Even = styled.span`
  color: #f0f;
`;

var Odd = styled.span`
  color: #0ff;
`;

export default function List({ sequence = [] }) {
  return (
    <div>
      <Ul>
        {sequence.map(function(num, i) {
          if (i === sequence.length - 1) return <Li key={i}><Odd>{num} has been reached</Odd></Li>;
          
          return (num % 2 === 0)
            ? <Li key={i}><Even>{num} is even</Even> so we divide by 2</Li>
            : <Li key={i}><Odd>{num} is odd</Odd> so we multiply by 3, then add 1</Li>;
        })}
      </Ul>
    </div>
  );
}