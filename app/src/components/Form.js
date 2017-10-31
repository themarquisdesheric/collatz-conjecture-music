import React, { Component } from 'react';
import styled from 'styled-components';
import TiArrowLeftOutline from 'react-icons/lib/ti/arrow-left-outline';
import TiArrowRightOutline from 'react-icons/lib/ti/arrow-right-outline';
import Hoverable from './Hoverable';
import SelectInput from './SelectInput';
import Input from './Input';

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

const Button = styled.button`
  font-family: Oswald;
  font-weight: bold;
  font-size: .7em;
  cursor: pointer;
  letter-spacing: .4px;
`;

const Legend = styled.legend`
  font-family: 'Permanent Marker', cursive;
  padding: 0 .75em;
`;

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

    if (startVal < 2) {
      alert('You must enter a number greater than 1');
    } else {
      renderCollatz(startVal);
      window.scrollTo(0, 0);
    }
  }

  handleKeyDown({ key }) {
    if (key === 'ArrowLeft') this.handleDecrement();
    else if (key === 'ArrowRight') this.handleIncrement();
  }

  handleDecrement() {
    let { renderCollatz } = this.props;
    let { startVal } = this.state;

    if (startVal <= 2) {
      alert('You must enter a number greater than 1');
      return;
    } 

    renderCollatz(startVal - 1);
    this.setState( (prevState) => ({ startVal: prevState.startVal - 1 }));
  }
  
  handleIncrement() {
    let { renderCollatz } = this.props;
    let { startVal } = this.state;

    renderCollatz(Number(startVal) + 1);
    this.setState( (prevState) => ({ startVal: Number(prevState.startVal) + 1 }));
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown.bind(this));
  }

  render() {
    const { selected, handleWave, sequence } = this.props;
    const waveTypes = ['sine', 'sawtooth', 'triangle', 'square'];

    return (
      <div>
        {sequence.length !== 0 && 
          <Hoverable>
            <LeftArrow onClick={this.handleDecrement.bind(this)}/>
          </Hoverable>
        }
        
        {sequence.length !== 0 && 
          <Hoverable>
            <RightArrow onClick={this.handleIncrement.bind(this)}/>
          </Hoverable>
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
            <Button type="submit">
              Let's hear it!
            </Button>
          </Fieldset>
        </form>
      </div>
    );
  }
}