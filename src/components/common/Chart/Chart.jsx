import React, { Component, createRef } from 'react';
import Chart from 'chart.js';
import styles from './Chart.module.css';

//: TEMP
const labels = [
  'Oct',
  'Nov',
  'Dec',
  'Jan',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
];

const COLORS = ['#7C9AF2', '#FF6C00', '#D7D8DD'];
const LEGEND = ['Доходы', 'Расходы', 'Накоплено'];
const TYPE = {
  desctop: 'bar',
  mobile: 'horizontalBar',
};
const SCALES = {
  desctop: {
    xAxes: [
      {
        type: 'category',
        stacked: false,
        circular: false,
        gridLines: {
          display: false,
        },
        labels,
      },
    ],
    yAxes: [
      {
        stacked: false,
        gridLines: {
          offsetGridLines: true,
          lineWidth: 1,
          borderDash: [8, 10],
        },
      },
    ],
  },
  mobile: {
    yAxes: [
      {
        type: 'category',
        stacked: false,
        circular: false,
        gridLines: {
          display: false,
        },
        labels,
      },
    ],
    xAxes: [
      {
        stacked: false,
        position: 'top',
        gridLines: {
          offsetGridLines: true,
          lineWidth: 1,
          borderDash: [8, 10],
        },
      },
    ],
  },
};

export default class MyChart extends Component {
  chartRef = createRef(null);

  state = {
    instance: null,
  };

  componentDidMount() {
    if (!this.chartRef.current) return;
    if (this.state.instance) this.state.instance.destroy();
    const isMobile = window.innerWidth < 768;

    const ctx = this.chartRef.current.getContext('2d');
    const instance = new Chart(ctx, {
      type: TYPE[isMobile ? 'mobile' : 'desctop'],
      data: {
        datasets: [
          {
            backgroundColor: COLORS[0],
            maxBarThickness: 5,
            barPercentage: 1,
            categoryPercentage: 0.6,
            data: [50, 80, 60, 47, 50, 34, 54, 34, 23, 34, 53, 22, 56],
          },
          {
            backgroundColor: COLORS[1],
            maxBarThickness: 5,
            barPercentage: 1,
            categoryPercentage: 0.6,
            data: [64, 75, 60, 61, 34, 63, 74, 40, 50, 60, 53, 56, 55],
          },
          {
            backgroundColor: COLORS[2],
            maxBarThickness: 5,
            barPercentage: 1,
            categoryPercentage: 0.6,
            data: [70, 34, 76, 56, 53, 62, 56, 75, 55, 45, 40, 50, 60],
          },
        ],
      },
      options: {
        maintainAspectRatio: true,
        legend: {
          display: false,
        },
        tooltips: {
          callbacks: {
            title(e) {
              return LEGEND[e[0].datasetIndex];
            },
            label(e) {
              return ` ${e.value} грн`;
            },
          },
        },
        scales: SCALES[isMobile ? 'mobile' : 'desctop'],
      },
    });

    this.setState({ instance });
  }

  render() {
    const height = window.innerWidth < 768 ? 750 : 300;
    return (
      <>
        <h2 className={styles.title}>Динамика расходов и накоплений</h2>
        <ul className={styles.legend}>
          {LEGEND.map(item => (
            <li key={item} className={styles.item}>
              {item}
            </li>
          ))}
        </ul>
        <canvas ref={this.chartRef} width={400} height={height} />
      </>
    );
  }
}
