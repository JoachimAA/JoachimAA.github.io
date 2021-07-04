import * as React from "react";
import HomeTitle from "../components/HomeTitle";
import HomeDetails from "../components/HomeDetails";
import Layout from "../components/Layout";
import "../css/typography.css";
import { graphql } from "gatsby";
import style from "./style.module.css";
// import LogoSrc from "../images/logo.svg";

const Home = ({ data }) => {
  return (
    <main style={{ fontFamily: "Montserrat" }}>
      {/* <div
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
      <div style={{ backgroundColor: "#f6f6f6", height: "12vh" }} /> */}
      <Layout>
        <div className={style.introImage}>
          <div style={{ flex: "1", overflow: "auto" }}>
            <HomeTitle title={data.site.siteMetadata.title} />
          </div>
        </div>
        <HomeDetails />
      </Layout>
    </main>
  );
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default Home;
