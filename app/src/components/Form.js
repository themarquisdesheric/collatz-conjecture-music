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
    startVal: 15
  };

  handleCollatzChange({ target }) {
    this.setState({ startVal: target.value });
  }
    
  handleSubmit(e) {
    const { renderCollatz } = this.props;
    // TODO: use a placeholder value instead? 
    const { startVal } = this.state;
    
    e.preventDefault();
    renderCollatz(this.calculateCollatz(startVal));
    window.scrollTo(0, 0);
  }
  
  calculateCollatz(n) {
    let num = Number(n);
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

  animateSequence() {
    let { renderCollatz } = this.props;
    let counter = 2;

    // do while? 
    renderCollatz(this.calculateCollatz(counter));
    counter++;

    const interval = setInterval(
      () => {
        if (counter === 8) clearInterval(interval);

        renderCollatz(this.calculateCollatz(counter));
        counter++;
      },
      5000
    );
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
              value={this.state.startVal}
              onChange={this.handleCollatzChange.bind(this)}
            />
            <button type="submit">
              Let's hear it!
            </button>
          </Fieldset>
        </form>

        <button onClick={this.animateSequence.bind(this)}>
          Show me 2-8
        </button>
      </div>
    );
  }
}