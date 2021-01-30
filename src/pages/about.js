import * as React from "react";
import AboutDetails from "../components/AboutDetails";
import Layout from "../components/Layout";

// markup
const About = () => {
  return (
    <div style={{ fontFamily: "Montserrat" }}>
      <Layout>
        <AboutDetails />
      </Layout>
    </div>
  );
};

export default About;
