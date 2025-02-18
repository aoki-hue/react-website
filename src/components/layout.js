import React from "react";

/* components */
import Header from "components/header";
import Footer from "components/footer";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
