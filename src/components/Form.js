import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Arrows from './Arrows';
import SelectInput, { Label } from './SelectInput';

const spacedInputStyles = {
  margin: '1em .5em',
  width: '55px'
};

const Fieldset = styled.fieldset`
  width: 600px;
  margin: 0 auto 5em;
  border-radius: 5px;

  @media (max-width: 850px) {
    max-width: 88%;
    // margin: 0 1em 5em;
  }
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
  static propTypes = {
    selected: PropTypes.string.isRequired,
    calculateCollatz: PropTypes.func.isRequired,
    handleWave: PropTypes.func.isRequired,
    sequence: PropTypes.arrayOf(PropTypes.number).isRequired,
  }

  state = {
    startVal: 0
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentDidUpdate(_prevProps, prevState) {
    const { startVal } = this.state;

    if (prevState.startVal !== startVal) {
      this.props.calculateCollatz(startVal);
      window.scrollTo(0, 0);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
    
  handleSubmit = (e) => {
    const startVal = Number(this.input.value);

    e.preventDefault();

    if (startVal < 2) {
      alert('You must enter a number greater than 1');
    } else {
      this.setState({ startVal });
    }
  }

  handleKeyDown = ({ key }) => {
    if (key === 'ArrowLeft') this.handleDecrement();
    else if (key === 'ArrowRight') this.handleIncrement();
  }

  handleDecrement = () => {
    const { startVal } = this.state;

    if (startVal <= 2) {
      alert('You must enter a number greater than 1');
      return;
    } 

    this.setState({ startVal: startVal - 1 });
  }
  
  handleIncrement = () => {
    this.setState({ startVal: this.state.startVal + 1 });
  }

  render() {
    const { selected, handleWave, sequence } = this.props;

    return (
      <div>
        {!!sequence.length && 
          <Arrows 
            handleIncrement={this.handleIncrement}
            handleDecrement={this.handleDecrement}
          />
        }
        
        <form onSubmit={this.handleSubmit}>
          <Fieldset>
            <Legend>
              Enter a number to calculate and listen
            </Legend>
            <SelectInput 
              label="Wave type"
              selected={selected}
              onChange={handleWave}
            />
            <Label>
              {"Start value"}
              <input 
                type="number"
                defaultValue={15}
                ref={node => this.input = node}
                style={spacedInputStyles}
              />
            </Label>
            <Button type="submit">
              {"Let's hear it!"}
            </Button>
          </Fieldset>
        </form>
      </div>
    );
  }
}
