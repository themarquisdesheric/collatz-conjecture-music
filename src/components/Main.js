import React, { Component } from 'react';

import Header from './Header';
import RenderContent from './RenderContent';
import Controls from './Controls';
import Footer from './Footer';
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
      <div id="wrapper">
        <Header />
        <RenderContent sequence={sequence} wave={wave} />
        <Controls
          handleCollatz={this.handleCollatz}
          selected={wave}
          handleWave={this.handleWave}
          sequence={sequence}
        />
        <Footer />
      </div>
    );
  }
}
