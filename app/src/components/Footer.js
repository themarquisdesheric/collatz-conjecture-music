import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  height: 30px;
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <small>&copy; Epiphany Collective 2017</small>
    </StyledFooter>
  );
}