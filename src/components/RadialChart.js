import React from 'react';
import Chart from 'react-apexcharts';

const RadialChart = () => {
  const options = {
    colors: ["#857EFF"],
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: "50%",
          background: "#293450"
        },
        track: {
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            blur: 4,
            opacity: 0.15,
          }
        },
        dataLabels: {
          name: {
            offsetY: -10,
            color: "#fff",
            fontSize: "10px"
          },
          value: {
            color: "#fff",
            fontSize: "12px",
            show: true
          }
        }
      }
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "vertical",
        gradientToColors: ["#05E996"],
        stops: [0, 100]
      }
    },
    stroke: {
      lineCap: "round"
    },
    labels: ["Progress"]
  };

  const series = [70]; // Example progress value

  return (
    <div>
      <Chart options={options} series={series} type="radialBar" height="161.9" width={200} />
    </div>
  );
};

export default RadialChart;
