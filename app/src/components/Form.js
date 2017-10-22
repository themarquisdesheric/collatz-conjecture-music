import React, { Component } from 'react';
import styled from 'styled-components';
import SelectInput from './SelectInput';
import Input from './Input';
import TiArrowLeftOutline from 'react-icons/lib/ti/arrow-left-outline';
import TiArrowRightOutline from 'react-icons/lib/ti/arrow-right-outline';

const LeftArrow = styled(TiArrowLeftOutline)`
  font-size: 3em;
  position: fixed;
  top: 50%;
  left: 8%;
`;

const RightArrow = styled(TiArrowRightOutline)`
  font-size: 3em;
  position: fixed;
  top: 50%;
  right: 8%;
`;

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

  render() {
    const { selected, handleWave, sequence } = this.props;
    const waveTypes = ['sine', 'sawtooth', 'triangle', 'square'];

    return (
      <div onKeyDown={this.handleKeyDown.bind(this)}>

        {sequence.length !== 0 && <LeftArrow />}
        {sequence.length !== 0 && <RightArrow />}

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
      </div>
    );
  }
}