import React, { Component } from 'react';

import Chart from 'chart.js';
import { arrayOf, number } from '../proptypes-constants';

export default class LineChart extends Component {
  static propTypes = {
    data: arrayOf(number).isRequired
  }

  componentDidMount() {
    const { data: sequence } = this.props;

    const data = this.updateChart(sequence);

    const options = {
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

    const chart = new Chart(this.canvas, {
      type: 'line',
      data,
      options
    });
  
    this.chart = chart;
  }

  shouldComponentUpdate(nextProps) {
    return this.props.data !== nextProps.data;
  }

  componentDidUpdate() {
    const { chart } = this;
    const { data: sequence } = this.props;

    chart.data = this.updateChart(sequence);
    chart.update();
  }

  componentWillUnmount() {
    this.chart.destroy();
  }

  updateChart(sequence) {
    const evens = sequence.map( (num) => (num % 2 === 0) ? num : 0);
    const odds = sequence.map( (num) => (num % 2 === 0) ? 0 : num);
  
    return {
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
  }

  render () {
    return (
      <div className="chart">
        <div>
          <canvas ref={(canvas) => this.canvas = canvas} />
        </div>
      </div>
    );
  }
}
