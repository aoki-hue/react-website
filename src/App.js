/* eslint-disable import/first */

/* pages */
import Home from "pages/home";
import MenuPage from "pages/menuPage";
import InfoPage from "pages/informationPage";
import Error from "pages/404error";

/* components */
import Layout from "components/layout";

/* router */
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

/* Font Awesome */
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/menu" element={<MenuPage />}></Route>
          <Route path="/information" element={<InfoPage />}></Route>
          <Route path="/*" element={<Error />}></Route>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
