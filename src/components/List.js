import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ListItem from './ListItem';

const Ul = styled.ul`
  width: 400px;
  margin: 1em auto;
  padding-left: 0;
  list-style-type: none;
`;

const Even = styled.span` color: #0ff; `;
const Odd = styled.span` color: #f0f; `;

export default class List extends Component {
  static propTypes = {
    sequence: PropTypes.arrayOf(PropTypes.number).isRequired,
    scaledSequence: PropTypes.arrayOf(PropTypes.number).isRequired,
    wave: PropTypes.string.isRequired
  }

  render() {
    const { sequence, scaledSequence, wave } = this.props;

    // ! make list item bold as sequence plays its note
    // ! use Hoverable for this
    // ! ListItem should take care of even/odd logic

    return (
      <div>
        <Ul>
          {sequence.map( (num, i) => {
            let scaledNum = scaledSequence[i];

            if (i === sequence.length - 1) return (
              <ListItem 
                num={scaledNum}
                wave={wave}
                key={num} 
              >
                <Odd>{num} has been reached</Odd>
              </ListItem>
            );
            
            return (num % 2 === 0)
              ? (
                <ListItem 
                  num={scaledNum}
                  wave={wave}
                  key={num}
                >
                  <Even>{num} is even</Even> so we divide by 2
                </ListItem>
              ) : (
                <ListItem 
                  num={scaledNum}
                  wave={wave}
                  key={num}
                >
                  <Odd>{num} is odd</Odd> so we multiply by 3, then add 1
                </ListItem>
              );   
          })}
        </Ul>
      </div>
    );
  }
}
