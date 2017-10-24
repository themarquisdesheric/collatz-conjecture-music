import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  width: 45%;
  padding: 0 2em;
  margin: 4em auto;
  font-family: 'Oswald', sans-serif;
  font-size: 1.1em;
`;

const Ul = styled.ul`
  width: 50%;
  margin: 0 auto;
  padding-left: 0;
  list-style-type: none;
`;

const Li = styled.li`
  margin: 1em 0;
  color: rgba(0, 255, 255, 0.8);
`;

const A = styled.a`
  color: #fff;
  margin: 0 .2em;
`;

const CallToAction = styled.p`
  color: #fff;
  font-size: 1.7em;
  margin: .56em;
`;

const IntroBlurb = () => (
  <Div>
    <p>
      The 
      <A 
        href="https://en.wikipedia.org/wiki/Collatz_conjecture" 
        target={"_blank"}
      >
        Collatz Conjecture
      </A>
      is an unsolved problem in mathematics.
    </p>
    <p>
      It states that given any positive integer, the sequence will always reach 1 by following two rules:
    </p>
    <Ul>
      <Li><i>If the integer is even, divide it by 2</i></Li>
      <Li><i>Otherwise, multiply it by 3 and add 1</i></Li>
    </Ul>
    <CallToAction>
      But how might it sound?
    </CallToAction>
  </Div>
);

export default IntroBlurb;