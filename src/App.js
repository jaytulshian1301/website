
import './App.css';
import React from 'react';
import Nav from './components/nav/nav'
import reactDom from 'react-dom';


class App extends React.Component {
  render() {
    return (
      <React.Fragment>
      <Nav />
      <div className="App">
        <header className="App-header">

          <p>
            Edit <code>src/App.js</code>
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      </React.Fragment>
    );
  }
}



export default App;
