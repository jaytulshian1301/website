
import './App.css';
import React from 'react';
import Nav from './components/nav/nav'
import reactDom from 'react-dom';
import Chart from './components/chart/chart';
import { dataset } from './dataset/dataset';


const App = () => {

  const data = [[12, 19, 3, 5, 2, 3], [12, 19, 3, 5, 2, 3], [12, 19, 3, 5, 2, 3], [12, 19, 3, 5, 2, 3]]

  let count = 0

  const chartsMap = data.map((datapoint) => {
    count = count + 1
    return (<div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" key={count}>
      <div className="card">
        <React.Fragment>
      <Chart datapoints={datapoint} />
      </React.Fragment>
      </div>
      </div>)
  }
  )
  console.log(chartsMap)

  return (
    <React.Fragment>
      <Nav />
      <div className = "row">
      {chartsMap}
      </div>
    </React.Fragment>
  );
}



export default App;
