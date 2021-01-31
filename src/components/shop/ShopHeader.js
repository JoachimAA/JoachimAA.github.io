import React from "react";
import { GetLastAreaOnUrl } from "../../utils/helpers";
import style from "./shopHeader.module.css";

const data = require("../../data.json");

const ShopHeader = () => {
  const shopCat = data.shopCategories.find(
    (category) => category.slug === GetLastAreaOnUrl(window.location.pathname)
  );
  return <div className={style.container}>{shopCat.name}</div>;
};

export default ShopHeader;
