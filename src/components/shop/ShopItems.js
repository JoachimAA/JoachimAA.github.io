import React from "react";
import ShopItem from "./ShopItem";
import style from "./shopItems.module.css";
import { shop } from "../../data";

const ShopItems = () => {
  const shopCategories = shop.shopCategories;
  let shopItems = [];
  for (const category of shopCategories) {
    shopItems = [...shopItems, ...category.items];
  }
  return (
    <div className={style.container}>
      {shopItems.map((item) => {
        return <ShopItem item={item} key={item.name} />;
      })}
    </div>
  );
};

export default ShopItems;
