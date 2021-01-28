import * as React from "react";
import { Header } from "../components/Header.js";
import ShopDetails from "../components/shop/ShopDetails";
import Footer from "../components/Footer";

// styles

// markup
const Shop = () => {
  return (
    <div style={{ fontFamily: "Montserrat" }}>
      <Header />
      <ShopDetails />
      <Footer />
    </div>
  );
};

export default Shop;
