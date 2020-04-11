import React from 'react';

const IntroBlurb = () => (
  <div className="intro-blurb">
    <ul>
      <li>
        The 
        <a href="https://en.wikipedia.org/wiki/Collatz_conjecture" target="_blank" rel="noopener noreferrer">
          Collatz Conjecture
        </a>
        is an unsolved problem in mathematics.
      </li>
      <li>It states that given any positive integer, the sequence will always reach 1 by following two rules:</li>
      <li className="italics">
        If the integer is even, divide it by 2
      </li>
      <li className="italics">
        Otherwise multiply it by 3 and add 1
      </li>
      <li>Then repeat the process until you reach 1</li>
    </ul>
  </div>
);

export default IntroBlurb;
