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
  color: rgba(238, 238, 238, .1);
`;

const RightArrow = styled(TiArrowRightOutline)`
  font-size: 3em;
  position: fixed;
  top: 50%;
  right: 8%;
  color: rgba(238, 238, 238, .1);
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
    if (key === 'ArrowLeft') this.decrementStartVal();
    else if (key === 'ArrowRight') this.incrementStartVal();
  }

  decrementStartVal() {
    let { renderCollatz } = this.props;
    let { startVal } = this.state;

    renderCollatz(startVal - 1);
    this.setState( (prevState) => ({ startVal: prevState.startVal - 1 }));
  }
  
  incrementStartVal() {
    let { renderCollatz } = this.props;
    let { startVal } = this.state;

    renderCollatz(startVal + 1);
    this.setState( (prevState) => ({ startVal: prevState.startVal + 1 }));
  }

  render() {
    const { selected, handleWave } = this.props;
    const waveTypes = ['sine', 'sawtooth', 'triangle', 'square'];
   
    const sequence = true; // testing UI

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