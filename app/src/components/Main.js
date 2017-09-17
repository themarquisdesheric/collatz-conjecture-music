import React, { Component } from 'react';
import Form from './Form';

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sequence: []
    };
  }
  render() {
    return (
      <Form />
    );
  }
}