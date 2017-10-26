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
  color: ${({ rel }) => rel ? '#eee' : 'rgba(238, 238, 238, .1)'};
  `;
  
const RightArrow = styled(TiArrowRightOutline)`
  font-size: 3em;
  position: fixed;
  top: 50%;
  right: 8%;
  color: ${({ rel }) => rel ? '#eee' : 'rgba(238, 238, 238, .1)'};
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

    if (startVal < 2) {
      alert('You must enter a number greater than 1');
    } else {
      e.preventDefault();
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

  handleMouseOver(side) {
    if (side === 'left') this.setState( (prevState) => ({ mouseOverLeft: true }));
    else if (side === 'right') this.setState( (prevState) => ({ mouseOverRight: true }));
  }
  
  handleMouseOut() {
    this.setState({ 
      mouseOverLeft: false,
      mouseOverRight: false
    });
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
          <LeftArrow 
            onClick={this.handleDecrement.bind(this)}
            onMouseOver={() => this.handleMouseOver('left')}
            onMouseOut={this.handleMouseOut.bind(this)}
            rel={this.state.mouseOverLeft}
          />
        }
        {sequence.length !== 0 && 
          <RightArrow 
            onClick={this.handleIncrement.bind(this)}
            onMouseOver={() => this.handleMouseOver('right')}
            onMouseOut={this.handleMouseOut.bind(this)}
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
            <Button type="submit">
              Let's hear it!
            </Button>
          </Fieldset>
        </form>
      </div>
    );
  }
}