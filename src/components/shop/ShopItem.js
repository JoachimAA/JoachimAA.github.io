import React from "react";
import style from "./shopItem.module.css";
import { Link } from "gatsby";
import { TurnIntoSlug } from "../../utils/helpers";

const ShopItem = ({ item, categorySlug }) => {
  const sampleCost = item.tiers[0].price ? item.tiers[0].price : "Unknown";
  const itemSlug = TurnIntoSlug(item.name);
  const path = "src/images/logo.svg";
  return (
    <div className={style.container}>
      <Link
        to={"/shop/" + categorySlug + "/" + itemSlug}
        state={{ item }}
        className={style.link}
      >
        <div
          className={style.image}
          style={{ backgroundImage: `url(${path})` }}
        >
          picture box
        </div>
        <div className={style.itemInformation}>
          <div className={style.name}>{item.name}</div>
          <div className={style.priceContainer}>
            <div className={style.priceFrom}>From</div>
            <div style={{ fontFamily: "Montserrat-Regular" }}>
              {sampleCost === "Unknown" ? "" : "£" + sampleCost.toFixed(2)}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ShopItem;
