import React, { Component } from 'react';
import styled from 'styled-components';
import Chart from 'chart.js';

const Div = styled.div`
  width: 600px;
  height: 600px;
  margin: 0 auto;
`;

export default class LineChart extends Component {
  componentDidMount () {
    let { data: sequence } = this.props;
    let data = {
      labels: sequence,
      datasets: [{
        label: 'sequence',
        data: sequence,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1
      }]
    };
  
    let myChart = new Chart(this.refs.chart, {
      type: 'line',
      data
    });
  
    this.setState({ chart: myChart });
  }

  componentWillUnmount() {
    this.state.chart.destroy();
  }

  render () {
    return (
      <Div>
        <canvas ref={'chart'}></canvas>
      </Div>
    );
  }
}