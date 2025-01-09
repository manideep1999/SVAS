import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import About from "./components/about/About";
import LivePage from "./components/live/LivePage";
import SBC from "./components/sbc/SBC";
import OurMaster from "./components/ourMaster/OurMaster";
import Programs from "./components/programs/Programs";
import Ashram from "./components/ashram/Ashram";
import Meditation from "./components/meditation/Meditation";
import Contact from "./components/contact/Contact";
import Section from "./components/common/section/Section";
// import GivingPage from "./components/giving/GivingPage";
import WordForTheWeekPage from "./components/word-for-the-week/WordForTheWeekPage";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <SBC>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={About} />
        <Route path="/ourMaster" component={OurMaster} />

        <Route path="/programs" component={Programs} />
        <Route path="/ashram" component={Ashram} />
        <Route path="/meditation" component={Meditation} />
        {/* <Route path="/sermons" exact component={SermonsPage} /> 
         <Route path="/live" component={LivePage} />
      <Route path="/sermons/series/:title" component={SermonSeriesPage} />
<Route path="/sermon/:sermonId/:title" component={SermonPage} /> */}
        <Route path="/contact" component={Contact} />
        {/* <Route path="/giving" component={GivingPage} /> */}
        <Route path="/word-for-the-way" component={WordForTheWeekPage} />
      </SBC>
    </Router>
  );
}
export default App;
