import "./App.css";
import React, { useState } from "react";
import Nav from "./components/nav/nav";
import SingleChart from "./components/singleChart/singleChart";
import Chart from "./components/chart/chart";
import { dataset } from "./dataset/dataset";
import Filter from "./components/filter/filter";

const App = () => {
  const data = dataset;

  const startdate = data[0].date;

  const enddate = data[data.length - 1].date;

  let count = 0;

  let chartsData = [];

  let arrayKeys = Object.keys(data[0]);

  const [multiView, setMultiView] = useState({ view: true });

  const toggleView = (datapoint, index) => {
    setMultiView({ view: !multiView.view, datapoint: datapoint, index: index });
  };

  const [StartFilter, setStartFilter] = useState(startdate);

  const [EndFilter, setEndFilter] = useState(enddate);

  const applyStartFilter = (date) => {
    setStartFilter(date);
  };

  const applyEndFilter = (date) => {
    setEndFilter(date);
  };

  let StartIndex = 0;
  let EndIndex = data.length - 1;
  let filteredData = [];

  data.map((datapoint, index) => {
    if (
      new Date(datapoint.date).getTime() === new Date(StartFilter).getTime()
    ) {
      StartIndex = index;
      return;
    }
  });

  data.map((datapoint, index) => {
    if (new Date(datapoint.date).getTime() === new Date(EndFilter).getTime()) {
      EndIndex = index;
      return;
    }
  })

  for (let i = StartIndex; i < EndIndex + 1; i++) {
    filteredData.push(data[i]);
  }

  for (let i = 0; i < arrayKeys.length; i++) {
    chartsData.push([]);
    let keyValues = Object.keys(filteredData[0])[i];
    for (let j = 0; j < filteredData.length; j++) {
      chartsData[i].push({
        date: filteredData[j].date,
        keyValues: filteredData[j][keyValues],
      });
    }
  }

  chartsData.shift();

  arrayKeys.shift();

  const heading = [
    "Live Count",
    "Sent Messages",
    "Received Messages",
    "Total Convo",
    "Avg Session Len",
    "Avg Conv Steps",
    "Avg Conv",
    "Active Users",
    "New Users",
    "Returning Users",
  ];

  const chartsMap = chartsData.map((datapoint, index) => {
    count = count + 1;
    const sendData = () => {
      toggleView(datapoint, index);
    };
    return (
      <div
        className="col-lg-3 col-md-4 col-sm-6 col-xs-12 p-2 graph-holder position-relative"
        onClick={sendData}
        key={count}
      >
        <div className="no-border card">
          <div className="graph-details card p-4">
            <div className="card-title mb-0">
              <h6 className="text-uppercase mb-0">
                <div className="transparent">TOTAL {heading[index]}</div>
              </h6>
            </div>
            <h2 className="text-uppercase">
              <div className="light">
                {datapoint[datapoint.length - 1].keyValues > 1000
                  ? datapoint[datapoint.length - 1].keyValues / 1000 + "K"
                  : datapoint[datapoint.length - 1].keyValues}{" "}
              </div>
            </h2>
          </div>
          <Chart datapoints={datapoint} />
        </div>
      </div>
    );
  });

  return (
    <React.Fragment>
      <Nav />
      <Filter
        startdate={startdate}
        enddate={enddate}
        applyStartFilter={applyStartFilter}
        applyEndFilter={applyEndFilter}
      />
      <div className="container-fluid pt-4 pb-4 p-5">
        <div className="row">
          {multiView.view ? (
            chartsMap
          ) : (
            <SingleChart
              StartIndex={StartIndex}
              EndIndex={EndIndex}
              datapoint={multiView.datapoint}
              heading={heading[multiView.index]}
              goBack={toggleView}
            />
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
