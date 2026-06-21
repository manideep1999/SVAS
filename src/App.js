import "./App.css";
import { BASENAME } from "./components/utils/constants";
import { createBrowserRouter, RouterProvider, Router } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import About from "./components/about/About";
import LivePage from "./components/live/LivePage";
import SBC from "./components/sbc/SBC";
import OurMaster from "./components/ourMaster/OurMaster";
import Programs from "./components/programs/Programs";
import Ashram from "./components/Ashram/Ashram";
import Meditation from "./components/meditation/Meditation";
import Contact from "./components/contact/Contact";
import Section from "./components/common/section/Section";
// import GivingPage from "./components/giving/GivingPage";
import WordForTheWeekPage from "./components/word-for-the-week/WordForTheWeekPage";
import ScrollToTop from "./components/common/scrollTop/ScrollToTop";
import ScrollRestoration from "./components/common/scrollTop/ScrollRestoration";

function App() {
  /**
   * Utility function to prepend `basename` to all route paths dynamically.
   */
  const withBase = (path) => `${BASENAME}${path === "/" ? "" : path}`;

  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <SBC />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: "about",
            element: <About />,
          },
          {
            path: "ourMaster",
            element: <OurMaster />,
          },
          {
            path: "programs",
            element: <Programs />,
          },
          {
            path: "ashram",
            element: <Ashram />,
          },
          {
            path: "meditation",
            element: <Meditation />,
          },
          {
            path: "contact",
            element: <Contact />,
          },
          {
            path: "word-for-the-way",
            element: <WordForTheWeekPage />,
          },
          // Add any additional routes here...
        ],
      },
    ],
    {
      basename: BASENAME,
    }
  );

  return (
    <RouterProvider router={router}>
      {/* Enable scroll restoration */}
      <ScrollRestoration />
    </RouterProvider>
  );
}
export default App;
