import React from "react";
import style from "./shopItem.module.css";
import { Link } from "gatsby";
import { TurnIntoSlug } from "../../utils/helpers";

import weddingSuiteInvitation from "../../images/products/wedding-stationery/wedding-invitation-suite-watercolour/1.jpg";
import saveTheDate from "../../images/products/wedding-stationery/save-the-date-watercolour/1.jpg";
import adviceToBride from "../../images/products/wedding-stationery/advice-to-the-bride-and-groom-cards-watercolour/1.jpg";
import menu from "../../images/products/wedding-stationery/menu-watercolour/1.jpg";
import orderOfService from "../../images/products/wedding-stationery/order-of-service-watercolour/1.jpg";
import placeCards from "../../images/products/wedding-stationery/place-cards-watercolour/1.jpg";
import tableNameCards from "../../images/products/wedding-stationery/table-name-cards-watercolour/1.jpg";
import tablePlan from "../../images/products/wedding-stationery/table-plan-watercolour/1.jpg";

const GetProductImage = (item) => {
  switch (item) {
    case "wedding-invitation-suite-watercolour":
      return weddingSuiteInvitation;
    case "save-the-date-watercolour":
      return saveTheDate;
    case "advice-to-the-bride-and-groom-cards-watercolour":
      return adviceToBride;
    case "menu-watercolour":
      return menu;
    case "order-of-service-watercolour":
      return orderOfService;
    case "place-cards-watercolour":
      return placeCards;
    case "table-name-cards-watercolour":
      return tableNameCards;
    case "table-plan-watercolour":
      return tablePlan;
    default:
      return "";
  }
};

const ShopItem = ({ item, categorySlug }) => {
  const sampleCost = item.tiers[0].price ? item.tiers[0].price : "Unknown";
  const itemSlug = TurnIntoSlug(item.name);

  return (
    <div className={style.container}>
      <Link
        to={"/shop/" + categorySlug + "/" + itemSlug}
        state={{ item }}
        className={style.link}
      >
        <div className={style.image}>
          <div
            className={style.imageSrc}
            style={{ backgroundImage: `url(${GetProductImage(itemSlug)})` }}
          ></div>
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
