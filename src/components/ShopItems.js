import React from "react";
import ShopItem from "./ShopItem";
import style from "./shopItems.module.css";
import { shop } from "../data";

const ShopItems = () => {
  const itemArray = shop.shopItems;
  return (
    <div className={style.container}>
      {itemArray.map((item) => {
        return <ShopItem item={item} />;
      })}
    </div>
  );
};

export default ShopItems;
