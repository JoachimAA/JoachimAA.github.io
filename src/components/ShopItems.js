import React from "react";
import ShopItem from "./ShopItem";
import style from "./shopItems.module.css";

const ShopItems = () => {
  const itemArray = [0, 1, 2, 3, 4];
  return (
    <div className={style.container}>
      {itemArray.map((item) => {
        return <ShopItem />;
      })}
    </div>
  );
};

export default ShopItems;
