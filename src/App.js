import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import House from "./components/House";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        ></a>

        <Home />
      </header>
    </div>
  );
}

export default App;
