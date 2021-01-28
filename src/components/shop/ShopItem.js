import React from "react";
import style from "./shopItem.module.css";

const ShopItem = ({ item }) => {
  const sampleObj = item.tiers.find((obj) => obj.name === "Sample");
  const sampleCost = sampleObj ? sampleObj.price : "Unknown";
  console.log(sampleCost);
  const path = "src/images/logo.svg";
  return (
    <div style={{ fontFamily: "rat" }} className={style.container}>
      <div className={style.image} style={{ backgroundImage: `url(${path})` }}>
        picture box
      </div>
      <div className={style.name}>{item.name}</div>
      <div className={style.priceContainer}>
        <div className={style.priceFrom}>From</div>
        <div>{"£" + sampleCost.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default ShopItem;
