import React from "react";
import style from "./shopItem.module.css";
import { Link } from "gatsby";

const ShopItem = ({ item, categorySlug }) => {
  const sampleObj = item.tiers.find((obj) => obj.name === "Sample");
  const sampleCost = sampleObj ? sampleObj.price : "Unknown";
  const path = "src/images/logo.svg";
  return (
    <div className={style.container}>
      <Link
        to={
          "/shop/" +
          categorySlug +
          "/" +
          item.name.replace(/\s+/g, "-").toLowerCase()
        }
        state={{ item }}
      >
        <div
          className={style.image}
          style={{ backgroundImage: `url(${path})` }}
        >
          picture box
        </div>
        <div className={style.name}>{item.name}</div>
        <div className={style.priceContainer}>
          <div className={style.priceFrom}>From</div>
          <div>
            {sampleCost === "Unknown" ? "" : "£" + sampleCost.toFixed(2)}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ShopItem;
