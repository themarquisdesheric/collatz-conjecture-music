import React, { Component } from 'react';

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

  calculateCollatz(startVal) {
    var num = Number(startVal);
    var sequence = [ num ];
  
    while (num > 1) {
      if (num % 2 === 0) {
        num /= 2;
        sequence.push(num);
      } else {
        num = num * 3 + 1;
        sequence.push(num);
      }
    }

    return sequence;
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.renderCollatz(this.calculateCollatz(this.state.collatz));
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