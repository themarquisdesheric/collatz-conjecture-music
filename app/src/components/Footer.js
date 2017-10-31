import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <small>&copy; Epiphany Collective 2017</small>
    </StyledFooter>
  );
}