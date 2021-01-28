import * as React from "react";
import { Header } from "../components/Header.js";
import AboutDetails from "../components/AboutDetails";
import Footer from "../components/Footer";

// markup
const About = () => {
  return (
    <div style={{ fontFamily: "Montserrat" }}>
      <Header />
      <AboutDetails />
      <Footer />
    </div>
  );
};

export default About;
