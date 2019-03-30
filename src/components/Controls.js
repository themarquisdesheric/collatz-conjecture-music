import React, { Component, Fragment } from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader';

import Arrows from './Arrows';
import SelectInput from './SelectInput';
import { arrayOf, number, string, func, bool } from '../proptypes-constants';

export default class Controls extends Component {
  static propTypes = {
    sequence: arrayOf(number).isRequired,
    wave: string.isRequired,
    handleCollatz: func.isRequired,
    handleWave: func.isRequired,
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
    const startVal = Number(this.input.value);
    const { isPlaying, handlePlaybackStart } = this.props;

    e.preventDefault();

    if (isPlaying || this.state.startVal === startVal) return;

    if (startVal < 2) {
      alert('You must enter a number greater than 1');
    } else {
      handlePlaybackStart();

      this.setState({ startVal });
    }
  }

  handleKeyDown = ({ key }) => {
    // prevent interfering with navigation arrows
    if (document.activeElement === this.input) return;
   
    if (key === 'ArrowLeft') this.handleDecrement();
    else if (key === 'ArrowRight') this.handleIncrement();
  }

  handleDecrement = () => {
    const { startVal } = this.state;

    if (startVal <= 2) {
      alert('You must enter a number greater than 1');
      return;
    } else if (this.props.isPlaying) return;

    this.setState({ startVal: startVal - 1 });
  }
  
  handleIncrement = () => {
    if (this.props.isPlaying) return;
    
    this.setState({ startVal: this.state.startVal + 1 });
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
                // ! there is a bug here where the defaultValue doesn't update when using left/right arrows 
                // ! even though using sequence[0] outside of defaultValue works entirely as expected
                defaultValue={sequence[0] || 15}
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
