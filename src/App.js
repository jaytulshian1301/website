import "./App.css";
import React from "react";
import Nav from "./components/nav/nav";
import reactDom from "react-dom";
import Chart from "./components/chart/chart";
import { dataset } from "./dataset/dataset";
import Filter from "./components/filter/filter";

const App = () => {
  const data = dataset;

  const startdate = data[0].date

  const enddate = data[data.length-1].date

  let count = 0;

  let chartsData = [];

  let arrayKeys = Object.keys(data[0]);

  for (let i = 0; i < arrayKeys.length; i++) {
    // console.log(i)
    chartsData.push([]);
    let keyValues = Object.keys(data[0])[i];
    for (let j = 0; j < data.length; j++) {
      chartsData[i].push({ date: data[j].date, keyValues: data[j][keyValues] });
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

    return (
      <div
        className="col-lg-3 col-md-4 col-sm-6 col-xs-12 p-2 graph-holder position-relative"
        key={count}
      >
        <div className="no-border card">
          <div className="graph-details card p-4">
            <div className="card-title mb-0">
              <h6 className="text-uppercase mb-0">
                <transparent>TOTAL {heading[index]}</transparent>
              </h6>
            </div>
              <h2 className="text-uppercase">
                <light>
                  {datapoint[datapoint.length - 1].keyValues / 1000}K
                </light>
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
      <Filter startdate={startdate} enddate={enddate}/>
      <div className="container-fluid pt-4 pb-4 p-5">
        <div className="row">{chartsMap}</div>
      </div>
    </React.Fragment>
  );
};

export default App;
