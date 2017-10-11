import React from 'react';
import styled from 'styled-components';

var H2 = styled.h2`
  color: #fff;
  font-size: 3em;
`;

export default function Header() {
  return (
    <div>
      <H2>The Collatz Conjecture</H2>
    </div>
  );
}