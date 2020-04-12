import React, { Component, Fragment } from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader';

import Arrows from './Arrows';
import SelectInput from './SelectInput';
import { arrayOf, number, string, func, bool } from '../proptypes-constants';
import { dispatchAnalytics } from '../utils';

export default class Controls extends Component {
  static propTypes = {
    sequence: arrayOf(number).isRequired,
    wave: string.isRequired,
    handleCollatz: func.isRequired,
    handleWave: func.isRequired,
    handleRepeat: func.isRequired,
    handlePlaybackEnd: func.isRequired,
    isPlaying: bool.isRequired
  }

  state = {
    startVal: 0
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
    
    this.input.focus();
  }

  componentDidUpdate(_prevProps, prevState) {
    const { startVal } = this.state;

    if (prevState.startVal !== startVal) {
      this.props.handleCollatz(startVal);
      window.scrollTo(0, 0);
    } 
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
    
  handleSubmit = (e) => {
    const { isPlaying, handlePlaybackEnd, handleRepeat } = this.props;
    const startVal = Number(this.input.value);

    e.preventDefault();

    if (isPlaying) handlePlaybackEnd();

    if (startVal < 2) {
      alert('You must enter a number greater than 1');
    } else {

      if (startVal === this.state.startVal) {
        handleRepeat(startVal);
      } else {
        this.setState({ startVal });
      }
    }
  }

  handleKeyDown = ({ key }) => {
    // prevent interfering with navigation arrows
    if (document.activeElement === this.input) return;
   
    if (key === 'ArrowLeft') this.handleDecrement();
    else if (key === 'ArrowRight') this.handleIncrement();
  }

  handleInput = (startVal) => {
    if (this.props.isPlaying) {
      this.props.handlePlaybackEnd();
    }

    this.input.value = startVal;
    this.setState({ startVal });
  }

  handleIncrement = () => {
    const newStartValue = this.state.startVal + 1;

    dispatchAnalytics('Increment Collatz', newStartValue);
    this.handleInput(newStartValue);
  }

  handleDecrement = () => {
    const { startVal } = this.state;
    const newStartValue = startVal - 1;

    if (startVal <= 2) {
      alert('You must enter a number greater than 1');
      return;
    }
    
    dispatchAnalytics('Decrement Collatz', newStartValue);
    this.handleInput(newStartValue);
  }
  
  render() {
    const { wave, handleWave, sequence, isPlaying } = this.props;

    return (
      <Fragment>
        {!!sequence.length && 
          <Arrows 
            handleIncrement={this.handleIncrement}
            handleDecrement={this.handleDecrement}
          />
        }
        <div className="controls-wrapper">
          <form onSubmit={this.handleSubmit}>
            <label>
              Start value
              <input
                type="number"
                defaultValue={this.state.startVal || 15}
                ref={node => this.input = node}
              />
            </label>
            <SelectInput 
              label="Wave type"
              wave={wave}
              onChange={handleWave}
            />
            <span className="button-wrapper">
              <button type="submit">
                {isPlaying
                  ? <ScaleLoader color="#f0f" height={10} width={2} margin="1px" />
                  : '▷ Play'
                }
              </button>
            </span>
          </form>
        </div>
      </Fragment>
    );
  }
}
