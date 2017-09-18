import React, { Component } from 'react';
import Form from './Form';
import List from './List';

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sequence: null
    };

    this.collatz = this.collatz.bind(this);
  }

  collatz(sequence) {
    this.setState({ sequence });
  }

  render() {
    var { sequence } = this.state;

    return (
      <div>
        {sequence && <List sequence={sequence} />}
        <Form renderCollatz={this.collatz}/>
      </div>
    );
  }
}