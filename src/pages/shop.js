import * as React from "react";
import ShopDetails from "../components/shop/ShopDetails";
import Layout from "../components/Layout";

// styles

// markup
const Shop = () => {
  return (
    <div style={{ fontFamily: "Montserrat" }}>
      <Layout>
        <ShopDetails />
      </Layout>
    </div>
  );
};

export default Shop;
