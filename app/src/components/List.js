import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;

const Li = styled.li`
  padding: .3em 0;
  font-family: 'Oswald', sans-serif; 
`;

const Even = styled.span`
  color: #f0f;
`;

const Odd = styled.span`
  color: #0ff;
`;

// TODO: make tone handler

const List = ({ sequence = [] }) => (
  <div>
    <Ul>
      {sequence.map((num, i) => {
        if (i === sequence.length - 1) return <Li key={i}><Odd>{num} has been reached</Odd></Li>;
        
        return (num % 2 === 0)
          ? <Li key={i}><Even>{num} is even</Even> so we divide by 2</Li>
          : <Li key={i}><Odd>{num} is odd</Odd> so we multiply by 3, then add 1</Li>;
      })}
    </Ul>
  </div>
);

export default List;