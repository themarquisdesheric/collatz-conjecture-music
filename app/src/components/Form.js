import React, { Component } from 'react';
import SelectInput from './SelectInput';
import Input from './Input';
import styled from 'styled-components';

const Fieldset = styled.fieldset`
  width: 46%;
  margin: 0 auto 1em;
  border-radius: 5px;
`;

const Legend = styled.legend`
  padding: 0 .75em;
`;

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collatz: 15
    };

    this.handleCollatzChange = this.handleCollatzChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

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
    const { collatz } = this.state;
    
    e.preventDefault();
    renderCollatz(this.calculateCollatz(collatz));
  }

  render() {
    const waveTypes = ['sine', 'sawtooth', 'triangle', 'square'];

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Fieldset>
            <Legend>
              Enter a number to calculate and listen
            </Legend>
            <SelectInput 
              label="Wave type"
              selected={this.props.selected}
              waveTypes={waveTypes}
              onChange={this.props.handleWave}
            />
            <Input
              label="Choose a number to begin"
              type="number"
              value={this.state.collatz}
              onChange={this.handleCollatzChange}
            />
            <br />
            <button type="submit">
              Let's hear it!
            </button>
          </Fieldset>
        </form>
      </div>
    );
  }
}