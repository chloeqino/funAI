import logo from "./logo.svg";
import "./App.css";
import { useEffect, React } from "react";
import HttpClient from "./HttpClient";

function App() {
  useEffect(() => {
    //console.log(process.env.REACT_APP_APIKEY);
    HttpClient.getResponse().then((data) => {
      data.text().then((textdata) => {
        console.log(JSON.parse(textdata).choices[0].text);
      });
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
  );
}

export default App;
