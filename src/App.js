/* eslint-disable import/first */

import Home from "pages/home";
import Menu from "pages/menu";
import Info from "pages/information";
import Error from "pages/404error";

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
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/information" element={<Info />}></Route>
        <Route path="/*" element={<Error />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
