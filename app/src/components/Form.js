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
    const { startVal } = this.state;
    
    e.preventDefault();
    renderCollatz(startVal);
    window.scrollTo(0, 0);
  }

  handleKeyDown({ key }) {
    let { renderCollatz } = this.props;
    let { startVal } = this.state;

    if (key === 'ArrowLeft') {
      renderCollatz(startVal - 1);
      this.setState( (prevState) => ({ startVal: prevState.startVal - 1 }));
    } else if (key === 'ArrowRight') {
      renderCollatz(startVal + 1);
      this.setState( (prevState) => ({ startVal: prevState.startVal + 1 }));
    }
  }

  animateSequence() {
    let { renderCollatz } = this.props;
    let counter = 2;

    renderCollatz(counter++);

    const interval = setInterval(
      () => {
        if (counter === 7) clearInterval(interval);

        renderCollatz(counter);
        counter++;
      },
      5500
    );
  }

  render() {
    const { selected, handleWave } = this.props;
    const waveTypes = ['sine', 'sawtooth', 'triangle', 'square'];

    return (
      <div onKeyDown={this.handleKeyDown.bind(this)}>
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
              label="Start value"
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
          Show me 2-7
        </button>
      </div>
    );
  }
}