import React from "react";

/* components */
import Header from "components/header";
import Footer from "components/footer";
import PageTop from "components/pageTop";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <main>{children}</main>
      <PageTop />
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
