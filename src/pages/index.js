import * as React from "react";
import { Header } from "../components/Header.js";
import HomeTitle from "../components/HomeTitle";
import HomeDetails from "../components/HomeDetails";
import Footer from "../components/Footer";
import "../css/typography.css";

const IndexPage = () => {
  return (
    <main style={{ fontFamily: "Montserrat" }}>
      <div
        style={{ height: "100vh", display: "flex", flexDirection: "column" }}
      >
        <Header />
        <div style={{ flex: "1", overflow: "auto" }}>
          <HomeTitle />
        </div>
      </div>
      <HomeDetails />
      <Footer />
    </main>
  );
};

export default IndexPage;
