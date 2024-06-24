import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const RadialChart = () => {
  const [series] = useState([44, 55, 67, 83]);

  const [options] = useState({
    chart: {
      height: 350,
      type: 'radialBar',
      
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: '22px',
          },
          value: {
            fontSize: '16px',
          },
          total: {
            show: true,
            label: 'Total',
            formatter: function (w) {
              // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
              return 249;
            },
          },
        },
      },
    },
    labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={options} series={series} type="radialBar" height={500} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default RadialChart;


