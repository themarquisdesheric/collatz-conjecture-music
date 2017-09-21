import React from 'react';
import styled from 'styled-components';

var Ul = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;

var Li = styled.li`
  padding: .3em 0;
`;

var Span = styled.span`
  font-weight: bold;
`;

export default function List({ sequence = [] }) {
  return (
    <div>
      <Ul>
        {sequence.map(function(num, i) {
          if (i === sequence.length - 1) return <Li key={i}><Span>{num}</Span></Li>;
          
          return (num % 2 === 0)
            ? <Li key={i}><Span>{num}</Span> is even so we divide by 2</Li>
            : <Li key={i}><Span>{num}</Span> is odd so we multiply by 3, then add 1</Li>;
        })}
      </Ul>
    </div>
  );
}