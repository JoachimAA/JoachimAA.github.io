import * as React from "react";
import { Header } from "../components/Header.js";
import HomeTitle from "../components/HomeTitle";
import HomeDetails from "../components/HomeDetails";
import Footer from "../components/Footer";
import "../css/typography.css";
import LogoSrc from "../images/logo.svg";

const IndexPage = () => {
  return (
    <main style={{ fontFamily: "Montserrat", backgroundColor: "#f6f6f6" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          alignItems: "center",
          fontSize: "68px",
          height: "35vh",
        }}
      >
        Coming soon...
      </div>
      <div
        style={{
          backgroundImage: `url(${LogoSrc})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
          height: "50vh",
        }}
      />
      <div style={{ backgroundColor: "#f6f6f6", height: "12vh" }} />
      {/* <div
        style={{ height: "100vh", display: "flex", flexDirection: "column" }}
      >
        <Header />
        <div style={{ flex: "1", overflow: "auto" }}>
          <HomeTitle />
        </div>
      </div>
      <HomeDetails />
      <Footer /> */}
    </main>
  );
};

export default IndexPage;
