import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Chart from 'chart.js';

const Div = styled.div`
  max-width: 43%;
  height: 100%;
  margin: 1.5em auto;
`;

export default class LineChart extends Component {
  static displayName = 'Chart';

  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.number).isRequired
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
      <Div>
        <canvas ref={(canvas) => this.canvas = canvas} />
      </Div>
    );
  }
}