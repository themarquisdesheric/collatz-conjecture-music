import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  border-bottom: 1px solid white;
`;

const H2 = styled.h2`
  color: #fff;
  font-size: 3.5em;
  margin: 1.6%;
`;

const Header = () => (
  <Div>
    <H2>The Collatz Conjecture</H2>
  </Div>
);

export default Header;