import React from "react";
import Header from "./header";
import Footer from "./footer";

const CommonLayout = ({ children }) => {
  return (
    <div className="container common-layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default CommonLayout;