import React, { Component } from 'react';
import styled from 'styled-components';
import Chart from 'chart.js';

const Div = styled.div`
  max-width: 600px;
  height: 100%;
  margin: 2em auto;
`;

export default class LineChart extends Component {
  static displayName = 'Chart';

  componentDidMount() {
    let { data: sequence } = this.props;
    let evens = sequence.map( (num) => (num % 2 === 0) ? num : 0);
    let odds = sequence.map( (num) => (num % 2 === 0) ? 0 : num);

    let data = {
      labels: sequence,
      datasets: [{
        label: 'even',
        data: evens,
        backgroundColor: 'rgba(0, 255, 255, .6)',
        borderColor: 'rgba(0, 255, 255, 1)',
        borderWidth: 1
      }, 
      {
        label: 'odd',
        data: odds,
        backgroundColor: 'rgba(255, 0, 255, .6)',
        borderColor: 'rgba(255, 0, 255, 1)',
        borderWidth: 1
      }]
    };

    let options = {
      title: {
        display: true,
        text: 'Distribution of even and odd numbers',
        fontFamily: 'Oswald',
        fontSize: 14,
        fontColor: '#eee'
      },
      legend: {
        labels: {
          fontFamily: 'Oswald',
          fontSize: 14,
          fontColor: '#eee'
        }
      }
    };

    let chart = new Chart(this.canvas, {
      type: 'line',
      data,
      options
    });
  
    this.chart = chart;
  }

  // componentDidUpdate() {
  //   const { chart } = this;
  //   const { data } = this.props;

  //   Object.assign(chart.data, data);
  //   chart.update();
  // }

  componentWillUnmount() {
    this.chart.destroy();
  }

  render () {
    return (
      <Div>
        <canvas ref={(canvas) => this.canvas = canvas}></canvas>
      </Div>
    );
  }
}