import React from "react";
import style from "./shopItem.module.css";
import { Link } from "gatsby";
import { TurnIntoSlug } from "../../utils/helpers";

import weddingSuiteInvitation from "../../images/products/wedding-stationery/wedding-invitation-suite-watercolour/1.jpg";
import saveTheDate from "../../images/products/wedding-stationery/save-the-date-watercolour/1.jpg";
import adviceToBride from "../../images/products/wedding-stationery/advice-to-the-bride-and-groom-cards-watercolour/1.jpg";
import menu from "../../images/products/wedding-stationery/menu-watercolour/1.jpg";
import orderOfService from "../../images/products/wedding-stationery/order-of-service-watercolour/1.jpg";
import placeCard from "../../images/products/wedding-stationery/place-card-watercolour/1.jpg";
import tableNameCards from "../../images/products/wedding-stationery/table-name-cards-watercolour/1.jpg";
import tablePlan from "../../images/products/wedding-stationery/table-plan-watercolour/1.jpg";
import signage from "../../images/products/wedding-stationery/signage-watercolour/1.jpg";
import rehearsalDinner from "../../images/products/wedding-stationery/rehearsal-dinner-invitation-watercolour/1.jpg";
import advicePink from "../../images/products/bridal-shower/advice-to-the-bride-cards-pink-floral/1.jpg";
import adviceBlue from "../../images/products/bridal-shower/advice-to-the-bride-cards-blue-floral/1.jpg";
import bridalBlue from "../../images/products/bridal-shower/bridal-shower-invitation-blue-floral/1.jpg";
import bridalPink from "../../images/products/bridal-shower/bridal-shower-invitation-pink-floral/1.jpg";
import babyInvitation from "../../images/products/baby-shower/baby-shower-invitation-rainbow/1.jpg";
import babyWishes from "../../images/products/baby-shower/wishes-for-the-baby-cards-rainbow/1.jpg";
import babyPrediction from "../../images/products/baby-shower/baby-prediction-cards-rainbow/1.jpg";
import babyWisdom from "../../images/products/baby-shower/words-of-wisdom-for-the-mum-to-be-cards-rainbow/1.jpg";
import addressEucalyptus from "../../images/products/announcement-cards/new-address-card-eucalyptus/1.jpg";
import addressPaint from "../../images/products/announcement-cards/new-address-card-paint-samples/1.jpg";
import anniversaryStars from "../../images/products/invitations/anniversary-invitation-stars/1.jpg";
import baptismCross from "../../images/products/invitations/baptism-celebration-invitation-cross/1.jpg";
import birthdayBlack from "../../images/products/invitations/birthday-invitation-black-&-gold/1.jpg";
import birthdayBlue from "../../images/products/invitations/birthday-invitation-blue-floral/1.jpg";
import birthdayPink from "../../images/products/invitations/birthday-invitation-pink-&-gold/1.jpg";
import housewarmingEucalyptus from "../../images/products/invitations/housewarming-party-invitation-eucalyptus/1.jpg";
import housewarmingPaint from "../../images/products/invitations/housewarming-party-invitation-paint-samples/1.jpg";
import kidStars from "../../images/products/invitations/kids-birthday-invitation-stars/1.jpg";

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
    case "place-card-watercolour":
      return placeCard;
    case "table-name-cards-watercolour":
      return tableNameCards;
    case "table-plan-watercolour":
      return tablePlan;
    case "signage-watercolour":
      return signage;
    case "rehearsal-dinner-invitation-watercolour":
      return rehearsalDinner;
    case "advice-to-the-bride-cards-pink-floral":
      return advicePink;
    case "advice-to-the-bride-cards-blue-floral":
      return adviceBlue;
    case "bridal-shower-invitation-blue-floral":
      return bridalBlue;
    case "bridal-shower-invitation-pink-floral":
      return bridalPink;
    case "baby-shower-invitation-rainbow":
      return babyInvitation;
    case "words-of-wisdom-for-the-mum-to-be-cards-rainbow":
      return babyWisdom;
    case "wishes-for-the-baby-cards-rainbow":
      return babyWishes;
    case "baby-prediction-cards-rainbow":
      return babyPrediction;
    case "new-address-card-eucalyptus":
      return addressEucalyptus;
    case "new-address-card-paint-samples":
      return addressPaint;
    case "anniversary-invitation-stars":
      return anniversaryStars;
    case "baptism-celebration-invitation-cross":
      return baptismCross;
    case "birthday-invitation-black-&-gold":
      return birthdayBlack;
    case "birthday-invitation-blue-floral":
      return birthdayBlue;
    case "birthday-invitation-pink-&-gold":
      return birthdayPink;
    case "housewarming-party-invitation-eucalyptus":
      return housewarmingEucalyptus;
    case "housewarming-party-invitation-paint-samples":
      return housewarmingPaint;
    case "kids-birthday-invitation-stars":
      return kidStars;
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
