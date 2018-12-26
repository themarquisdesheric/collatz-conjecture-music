import React, { Component } from 'react';

import IntroBlurb from './IntroBlurb';
import CollatzGraph from './CollatzGraph';
import Form from './Form';
import { calculateCollatz } from '../utils';

export default class Main extends Component {
  state = {
    sequence: [],
    wave: 'sine'
  };

  handleWave = ({ target }) => {
    this.setState({ wave: target.value });
  }

  handleCollatz = (startVal) => {
    const sequence = calculateCollatz(startVal);

    this.setState({ sequence });
  }

  render() {
    const { sequence, wave } = this.state;

    return (
      <div>
        {!!sequence.length
          ? <CollatzGraph sequence={sequence} wave={wave} />
          : <IntroBlurb />
        }

        <Form
          handleCollatz={this.handleCollatz}
          selected={wave}
          handleWave={this.handleWave}
          sequence={sequence}
        />
      </div>
    );
  }
}
