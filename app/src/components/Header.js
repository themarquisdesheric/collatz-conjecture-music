import React from 'react';
import styled from 'styled-components';

var Div = styled.div`
  border-bottom: 1px solid white;
`;

var H2 = styled.h2`
  color: #fff;
  font-size: 3.5em;
  margin: 1.6%;
`;

export default function Header() {
  return (
    <Div>
      <H2>The Collatz Conjecture</H2>
    </Div>
  );
}