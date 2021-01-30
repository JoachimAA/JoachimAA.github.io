import * as React from "react";
import ContactDetails from "../components/ContactDetails.js";
import Layout from "../components/Layout";

// styles

// markup
const Contact = () => {
  return (
    <div style={{ fontFamily: "Montserrat" }}>
      <Layout>
        <ContactDetails />
      </Layout>
    </div>
  );
};

export default Contact;
