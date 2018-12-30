import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  width: 100%;
  margin: 4em auto;
  font-size: 1em;


  // ! font-size: 1.1em;
`;

const Ul = styled.ul`
  margin: 0 auto;
  padding: 0 1em;
  list-style-type: none;
`;

const Li = styled.li`
  margin: 1em 0;
`;

const StyledLi = styled.li`
  color: rgba(0, 255, 255, 0.8);
  margin: 1em;
  font-style: italic;
`;

const A = styled.a`
  color: #fff;
  margin: 0 .2em;
`;

const CallToAction = styled.p`
  display: inline-block;  
  color: #fff;
  margin: .56em;
  font-size: 1em;
  animation: CTA 2.5s linear infinite;

  @keyframes CTA {
    50% { transform: scale(1.1); }
  }

  // ! font-size: 1.7em;
`;

const IntroBlurb = () => (
  <Div>
    <Ul>
      <Li>
        The 
        <A href="https://en.wikipedia.org/wiki/Collatz_conjecture" target="_blank">
          Collatz Conjecture
        </A>
        is an unsolved problem in mathematics.
      </Li>
      <Li>It states that given any positive integer, the sequence will always reach 1 by following two rules:</Li>
      <StyledLi>If the integer is even, divide it by 2</StyledLi>
      <StyledLi>Otherwise, multiply it by 3 and add 1</StyledLi>
    </Ul>
    <CallToAction>
      But how might it sound?
    </CallToAction>
  </Div>
);

export default IntroBlurb;
