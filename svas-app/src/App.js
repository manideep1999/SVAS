import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import LivePage from "./components/live/LivePage";

function App() {
  return (
    // <div className="App">
    //   <h1> Yooo</h1>
    // </div>
    <>
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/live" component={LivePage} />
      </Router>
    </>
  );
}

export default App;
