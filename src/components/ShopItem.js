import React from "react";
import style from "./shopItem.module.css";

const ShopItem = () => {
  return (
    <div style={{ fontFamily: "Montserrat" }} className={style.container}>
      <div className={style.image}>picture box</div>
      <div>name of item</div>
      <div>cost</div>
    </div>
  );
};

export default ShopItem;
