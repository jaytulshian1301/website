import React from "react";
import { Line } from "react-chartjs-2";

const SingleChart = ({ goBack, datapoint, heading, StartIndex, EndIndex }) => {
  let labels = [];

  let value = [];

  let total = 0;

  let filteredData = []

  console.log(datapoint)

  for (let i = 0; i < datapoint.length; i++) {
    filteredData.push(datapoint[i]);
  }

  for (let i = 0; i < filteredData.length; i++) {
    labels.push(filteredData[i].date);
    value.push(filteredData[i].keyValues);
    total = total + filteredData[i].keyValues;
  }

  const data = {
    labels: labels,
    datasets: [
      {
        // label: '# of Votes',
        data: value,
        borderColor: "rgb(0,0,128)",
        radius: 3,
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
    },
  };

  return (
    <div className="card border-primary">
      <div className="card-body">
        <div className="card-title d-flex">
          <button
            className="go-back"
            onClick={() => {
              goBack();
            }}
          >
            Back
          </button>
          <h4 className="m-3 mb-0 mt-0">{heading}</h4>
        </div>
        <div className="col-12">
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default SingleChart;
