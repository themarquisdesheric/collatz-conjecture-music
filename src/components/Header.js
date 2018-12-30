import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  border-bottom: 1px solid #fff;
  background-color: #111;
`;

const H2 = styled.h2`
  color: #fff;
  font-family: 'Permanent Marker', cursive;
  font-size: 1.65em;
  padding-top: 1.6%;
  margin: 0 0 1.6%;

  // ! font-size: 3.5em;
  `;

const Header = () => (
  <StyledHeader>
    <H2>The Collatz Conjecture</H2>
  </StyledHeader>
);

export default Header;
