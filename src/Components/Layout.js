import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const layoutStyle = {
  display: "flex",
  height: "100vh",
};

const contentStyle = {
  flex: 1,
  backgroundColor: "#F1EFEC",
  padding: "20px",
  overflowY: "auto",
};

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div style={layoutStyle}>
        <Sidebar />
        <div style={contentStyle}>{children}</div>
      </div>
    </>
  );
};

export default Layout;
