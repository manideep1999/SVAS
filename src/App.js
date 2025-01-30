import "./App.css";
import { BASENAME } from "./components/utils/constants";
import { createBrowserRouter, RouterProvider, Router } from "react-router-dom";
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
import ScrollToTop from "./components/common/scrollTop/ScrollToTop";

function App() {
  /**
   * Utility function to prepend `basename` to all route paths dynamically.
   */
  const withBase = (path) => `${BASENAME}${path === "/" ? "" : path}`;

  const router = createBrowserRouter([
    {
      path: withBase("/"),
      element: <SBC />,
      children: [
        {
          path: withBase("/"),
          element: <HomePage />,
          scrollRestoration: "auto", // Optional: Enable scroll restoration
        },
        {
          path: withBase("/about"),
          element: <About />,
        },
        {
          path: withBase("/ourMaster"),
          element: <OurMaster />,
        },
        {
          path: withBase("/programs"),
          element: <Programs />,
        },
        {
          path: withBase("/ashram"),
          element: <Ashram />,
        },
        {
          path: withBase("/meditation"),
          element: <Meditation />,
        },
        {
          path: withBase("/contact"),
          element: <Contact />,
        },
        {
          path: withBase("/word-for-the-way"),
          element: <WordForTheWeekPage />,
        },
        // Add any additional routes here...
      ],
    },
  ]);

  return (
    <RouterProvider router={router}>
      {/* Enable scroll restoration */}
      <ScrollToTop />
    </RouterProvider>
  );
}
export default App;
