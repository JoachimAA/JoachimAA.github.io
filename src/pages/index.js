import * as React from "react";
import { Header } from "../components/Header.js";
import HomeTitle from "../components/HomeTitle";
import HomeDetails from "../components/HomeDetails";

const IndexPage = () => {
  return (
    <main>
      <div
        style={{ height: "100vh", display: "flex", flexDirection: "column" }}
      >
        <Header />
        <div style={{ flex: "1", overflow: "auto" }}>
          <HomeTitle />
        </div>
      </div>
      <HomeDetails />
    </main>
  );
};

export default IndexPage;
