import * as React from "react";
import StarterComponent from "../components/StarterComponent";
import { Header } from "../components/Header.js";
import HomeDetails from "../components/HomeDetails";

const IndexPage = () => {
  return (
    <main>
      <Header />
      <div>
        <HomeDetails />
      </div>
    </main>
  );
};

export default IndexPage;
