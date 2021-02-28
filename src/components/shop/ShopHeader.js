import React from "react";
import { GetLastAreaOnUrl } from "../../utils/helpers";
import style from "./shopHeader.module.css";

const data = require("../../data.json");

const ShopHeader = () => {
  const slug = GetLastAreaOnUrl(window.location.pathname);
  const shopCat = data.shopCategories.find(
    (category) => category.slug === slug
  );
  const isShopHome = slug === "" || slug === "shop";
  return (
    <div className={style.container} style={{ fontFamily: "Brittany" }}>
      {isShopHome ? "Shop" : shopCat.name}
    </div>
  );
};

export default ShopHeader;
