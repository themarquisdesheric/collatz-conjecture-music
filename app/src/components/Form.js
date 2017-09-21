import React, { Component } from 'react';
import SelectInput from './SelectInput';
import Input from './Input';
import styled from 'styled-components';

var Fieldset = styled.fieldset`
  width: 50%;
  margin: auto;
  border-radius: 5px;
`;

var Legend = styled.legend`
  padding: 0 .75em;
`;

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collatz: 16
    };

    this.handleCollatzChange = this.handleCollatzChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCollatzChange({ target }) {
    this.setState({ collatz: target.value });
  }

  calculateCollatz(startVal) {
    var num = Number(startVal);
    var sequence = [num];
  
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
    var { renderCollatz } = this.props;
    var { collatz } = this.state;
    
    e.preventDefault();
    renderCollatz(this.calculateCollatz(collatz));
  }

  render() {
    var waveTypes = ['sine', 'sawtooth', 'triangle', 'square'];

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Fieldset>
            <Legend>
              Calculate Collatz
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
            <button type="submit">
              Let's hear it!
            </button>
          </Fieldset>
        </form>
      </div>
    );
  }
}