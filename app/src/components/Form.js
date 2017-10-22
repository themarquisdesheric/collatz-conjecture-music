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
  color: ${({ rel }) => rel ? 'rgba(0, 255, 255, .6)' : 'rgba(238, 238, 238, .1)'};
  `;
  
const RightArrow = styled(TiArrowRightOutline)`
  font-size: 3em;
  position: fixed;
  top: 50%;
  right: 8%;
  color: ${({ rel }) => rel ? 'rgba(0, 255, 255, .6)' : 'rgba(238, 238, 238, .1)'};
  `;
  
const Fieldset = styled.fieldset`
  width: 46%;
  margin: 0 auto 1em;
  border-radius: 5px;
`;

const Legend = styled.legend` padding: 0 .75em; `; 

export default class Form extends Component {
  state = {
    startVal: 15,
    mouseOverLeft: false
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
    if (key === 'ArrowLeft') this.handleDecrement();
    else if (key === 'ArrowRight') this.handleIncrement();
  }

  handleDecrement() {
    let { renderCollatz } = this.props;
    let { startVal } = this.state;

    renderCollatz(startVal - 1);
    this.setState( (prevState) => ({ startVal: prevState.startVal - 1 }));
  }
  
  handleIncrement() {
    let { renderCollatz } = this.props;
    let { startVal } = this.state;

    renderCollatz(startVal + 1);
    this.setState( (prevState) => ({ startVal: prevState.startVal + 1 }));
  }

  handleMouseOver(side) {
    if (side === 'left') this.setState( (prevState) => ({ mouseOverLeft: true }));
    else if (side === 'right') this.setState( (prevState) => ({ mouseOverRight: true }));
  }
  
  handleMouseOut(side) {
    if (side === 'left') this.setState( (prevState) => ({ mouseOverLeft: false }));
    else if (side === 'right') this.setState( (prevState) => ({ mouseOverRight: false }));
  }

  render() {
    const { selected, handleWave } = this.props;
    const waveTypes = ['sine', 'sawtooth', 'triangle', 'square'];
   
    const sequence = true; // testing UI

    return (
      <div onKeyDown={this.handleKeyDown.bind(this)}>

        {sequence.length !== 0 && 
          <LeftArrow 
            onClick={this.handleDecrement.bind(this)}
            onMouseOver={() => this.handleMouseOver('left')}
            onMouseOut={() => this.handleMouseOut('left')}
            rel={this.state.mouseOverLeft}
          />
        }
        {sequence.length !== 0 && 
          <RightArrow 
            onClick={this.handleIncrement.bind(this)}
            onMouseOver={() => this.handleMouseOver('right')}
            onMouseOut={() => this.handleMouseOut('right')}
            rel={this.state.mouseOverRight}
          />
        }

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