/* eslint-disable import/first */

import Home from "pages/home";

/* router */
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

/* Font Awesome */
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
