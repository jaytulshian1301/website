import React from "react";
import { Line } from "react-chartjs-2";

const Chart = ({ datapoints }) => {
  let labels = [];

  let value = [];

  let total = 0;

  for (let i = 0; i < datapoints.length; i++) {
    labels.push(datapoints[i].date);
    value.push(datapoints[i].keyValues);
    total = total + datapoints[i].keyValues;
  }

  console.log(datapoints[datapoints.length - 1].keyValues);

  const data = {
    labels: labels,
    datasets: [
      {
        // label: '# of Votes',
        data: value,
        borderColor: "rgb(0,0,255)",
        radius: 0,
        fill: 1,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltips: {
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.yLabel;
          },
        },
      },
    },
    scales: {
      x: {
        // <-- object '{' now, instead of array '[{' before in v2.x.x
        ticks: {
          display: false,
        },
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      y: {
        // <-- object '{' now, instead of array '[{' before in v2.x.x
        ticks: {
          display: false,
        },
        grid: {
          display: false,
          drawBorder: false,
        },
      },
    },
  };

  return <Line className="height-60" data={data} options={options} />;
};

export default Chart;
