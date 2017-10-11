import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  width: 45%;
  margin: 4em auto;
  font-family: 'Oswald', sans-serif;
  font-size: 1.1em;
`;

const Ul = styled.ul`
  width: 50%;
  margin: 0 auto;
  padding-left: 0;
`;

const IntroBlurb = () => (
  <Div>
    <p>
      The Collatz Conjecture is an unsolved problem in mathematics.

      It states that given any positive integer <em>n</em>, the sequence will always reach 1 by following two simple rules:
    </p>
    <Ul>
      <li>If the integer is even, divide it by 2</li>
      <li>Otherwise, multiply it by 3 and add 1</li>
    </Ul>
  </Div>
);

export default IntroBlurb;