// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";

// ReactDOM.render(<App />, document.getElementById("root"));

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import SBC from "./components/sbc/SBC";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import LivePage from "./components/live/LivePage";
import SermonsPage from "./components/sermons/SermonsPage";
import SermonSeriesPage from "./components/sermons/SermonSeriesPage";
import SermonPage from "./components/sermons/SermonPage";
import ContactPage from "./components/contact/ContactPage";
// import GivingPage from "./components/giving/GivingPage";
import WordForTheWeekPage from "./components/word-for-the-week/WordForTheWeekPage";

const Index = () => (
  <BrowserRouter>
    <SBC>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/live" component={LivePage} />
      <Route path="/sermons" exact component={SermonsPage} />
      <Route path="/sermons/series/:title" component={SermonSeriesPage} />
      <Route path="/sermon/:sermonId/:title" component={SermonPage} />
      <Route path="/contact" component={ContactPage} />
      {/* <Route path="/giving" component={GivingPage} /> */}
      <Route path="/word-for-the-way" component={WordForTheWeekPage} />
    </SBC>
  </BrowserRouter>
);

ReactDOM.render(<Index />, document.getElementById("root"));
