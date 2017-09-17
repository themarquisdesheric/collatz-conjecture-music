import React, { Component } from 'react';
import collatz from '../collatz-conjecture';

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collatz: 0
    };

    this.handleCollatzChange = this.handleCollatzChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCollatzChange({ target }) {
    this.setState({ collatz: target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    collatz(this.state.collatz);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Choose a number to begin<br />
            <input 
              type="number"
              value={this.state.collatz}
              onChange={this.handleCollatzChange}
            />
          </label>
          <button type="submit">
            Let's hear it!
          </button>
        </form>
      </div>
    );
  }
}