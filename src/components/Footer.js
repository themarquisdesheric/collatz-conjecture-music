import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  height: 30px;
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: #111;
  border-top: 1px solid #fff;
  padding: .5em 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Span = styled.span`
  font-weight: bold;
`;

const Footer = () => (
  <StyledFooter>
    <small>
      &copy; 
      <Span>
        &nbsp;
        yuval allweil
        &nbsp;
      </Span>
      2017
    </small>
  </StyledFooter>
);

export default Footer;
