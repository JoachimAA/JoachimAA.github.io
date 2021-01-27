import React from "react";
import style from "./shopItem.module.css";

const ShopItem = ({ item }) => {
  const sampleObj = item.tiers.find((obj) => obj.name === "Sample");
  const sampleCost = sampleObj ? sampleObj.price : "Unknown";
  console.log(sampleCost);
  const path = "src/images/logo.png";
  return (
    <div style={{ fontFamily: "Montserrat" }} className={style.container}>
      <div className={style.image} style={{ backgroundImage: `url(${path})` }}>
        picture box
      </div>
      <div>{item.name}</div>
      <div>{"£" + sampleCost.toFixed(2)}</div>
    </div>
  );
};

export default ShopItem;
