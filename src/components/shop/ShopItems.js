import React from "react";
import ShopItem from "./ShopItem";
import style from "./shopItems.module.css";
import { GetLastAreaOnUrl } from "../../utils/helpers";
import ShopCategory from "./ShopCategory";
const data = require("../../data.json");

const isBrowser = typeof window !== "undefined";

const ShopItems = () => {
  const shopCategorySlug = GetLastAreaOnUrl(
    isBrowser ? window.location.pathname : ""
  );
  const shopCategories = data.shopCategories;
  const isShopHome = shopCategorySlug === "" || shopCategorySlug === "shop";
  let shopItems = [];
  for (const category of shopCategories) {
    if (category.slug === shopCategorySlug) {
      shopItems = [...shopItems, ...category.items];
    }
  }
  return (
    <div>
      {!isShopHome ? (
        <div className={style.container}>
          {shopItems.length > 0 ? (
            shopItems.map((item) => {
              return (
                <ShopItem
                  item={item}
                  key={item.name}
                  categorySlug={shopCategorySlug}
                />
              );
            })
          ) : (
            <div>No results</div>
          )}
        </div>
      ) : (
        <div className={style.mainPageShop}>
          {shopCategories.map((category) => {
            return <ShopCategory key={category.name} category={category} />;
          })}
        </div>
      )}
    </div>
  );
};

export default ShopItems;
