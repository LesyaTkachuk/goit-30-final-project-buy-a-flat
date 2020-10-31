import React, { Component, createRef } from 'react';
import Media from 'react-media';
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

class MyChart extends Component {
  chartRef = createRef(null);

  state = {
    instance: null,
  };

  componentDidMount() {
    if (!this.chartRef.current) return;
    this.createChart();
  }

  componentDidUpdate(prevProps) {
    const { media, data, getChartData } = this.props;
    if (!data) getChartData();
    if (prevProps.media !== media) this.createChart();
  }

  createChart = () => {
    const ctx = this.chartRef.current.getContext('2d');
    if (this.state.instance) this.state.instance.destroy();
    const { media } = this.props;

    const instance = new Chart(ctx, {
      type: TYPE[media],
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
        aspectRatio: media === 'mobile' ? 0.45 : 1.55,
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
        scales: SCALES[media],
      },
    });

    this.setState({ instance });
  };

  render() {
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
        <canvas ref={this.chartRef} />
      </>
    );
  }
}

export default function MediaChart(props) {
  return (
    <Media
      queries={{
        mobile: '(max-width: 767px)',
      }}
    >
      {matches => (
        <MyChart media={matches.mobile ? 'mobile' : 'desctop'} {...props} />
      )}
    </Media>
  );
}
