import React, { Fragment } from "react";
import ShopItem from "./ShopItem";
import style from "./shopItems.module.css";
import { GetLastAreaOnUrl } from "../../utils/helpers";
import ShopCategory from "./ShopCategory";
const data = require("../../data.json");

const ShopItems = () => {
  const shopCategorySlug = GetLastAreaOnUrl(window.location.pathname);
  const shopCategories = data.shopCategories;
  const isShopHome = shopCategorySlug === "" || shopCategorySlug === "shop";
  let shopItems = [];
  for (const category of shopCategories) {
    if (category.slug === shopCategorySlug) {
      shopItems = [...shopItems, ...category.items];
    }
  }
  return (
    <div className={style.container}>
      {!isShopHome ? (
        shopItems.length > 0 ? (
          shopItems.map((item) => {
            return <ShopItem item={item} key={item.name} />;
          })
        ) : (
          <div>No results</div>
        )
      ) : (
        <Fragment>
          {shopCategories.map((category) => {
            return <ShopCategory category={category} />;
          })}
        </Fragment>
      )}
    </div>
  );
};

export default ShopItems;
