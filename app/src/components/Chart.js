import React, { Component } from 'react';
import styled from 'styled-components';
import Chart from 'chart.js';

const Div = styled.div`
  width: 600px;
  height: 600px;
  margin: 0 auto;
`;

export default class LineChart extends Component {
  componentDidMount() {
    let { data: sequence } = this.props;
    let evens = sequence.map( (num) => (num % 2 === 0) ? num : 0);
    let odds = sequence.map( (num) => (num % 2 === 0) ? 0 : num);

    let data = {
      labels: sequence,
      datasets: [{
        label: 'odd',
        data: odds,
        backgroundColor: 'rgba(255, 0, 255, .6)',
        borderColor: 'rgba(255, 0, 255, 1)',
        borderWidth: 1
      },
      {
        label: 'even',
        data: evens,
        backgroundColor: 'rgba(0, 255, 255, .6)',
        borderColor: 'rgba(0, 255, 255, 1)',
        borderWidth: 1
      }]
    };
  
    let chart = new Chart(this.canvas, {
      type: 'line',
      data
    });
  
    this.setState({ chart });
  }

  componentWillUnmount() {
    this.state.chart.destroy();
  }

  render () {
    return (
      <Div>
        <canvas ref={(canvas) => this.canvas = canvas}></canvas>
      </Div>
    );
  }
}