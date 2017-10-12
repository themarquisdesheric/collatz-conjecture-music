import React, { Component } from 'react';
import SelectInput from './SelectInput';
import Input from './Input';
import styled from 'styled-components';

const Fieldset = styled.fieldset`
  width: 46%;
  margin: 0 auto 1em;
  border-radius: 5px;
`;

const Legend = styled.legend` padding: 0 .75em; `;

export default class Form extends Component {
  state = {
    collatz: 15
  };

  handleCollatzChange({ target }) {
    this.setState({ collatz: target.value });
  }

  calculateCollatz(startVal) {
    let num = Number(startVal);
    const sequence = [num];
  
    while (num > 1) {
      if (num % 2 === 0) {
        num /= 2;
        sequence.push(num);
      } else {
        num = num * 3 + 1;
        sequence.push(num);
      }
    }

    return sequence;
  }

  handleSubmit(e) {
    const { renderCollatz } = this.props;
    const { collatz: startVal } = this.state;
    
    e.preventDefault();
    renderCollatz(this.calculateCollatz(startVal));
  }

  render() {
    const { selected, handleWave } = this.props;
    const waveTypes = ['sine', 'sawtooth', 'triangle', 'square'];

    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <Fieldset>
            <Legend>
              Enter a number to calculate and listen
            </Legend>
            <SelectInput 
              label="Wave type"
              selected={selected}
              waveTypes={waveTypes}
              onChange={handleWave}
            />
            <Input
              label="Choose a number to begin"
              type="number"
              value={this.state.collatz}
              onChange={this.handleCollatzChange.bind(this)}
            />
            <button type="submit">
              Let's hear it!
            </button>
          </Fieldset>
        </form>
      </div>
    );
  }
}