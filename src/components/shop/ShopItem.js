import React from "react";
import style from "./shopItem.module.css";
import { Link } from "gatsby";
import { TurnIntoSlug } from "../../utils/helpers";

import weddingSuiteInvitation from "../../images/products/wedding-stationery/wedding-invitation-suite-capsule-collection/1.jpg";
import addInsertWatercolour from "../../images/products/wedding-stationery/additional-insert-for-wedding-invitation-suite-capsule-collection/1.jpg";
import saveTheDate from "../../images/products/wedding-stationery/save-the-date-capsule-collection/1.jpg";
import adviceToBride from "../../images/products/wedding-stationery/advice-to-the-bride-and-groom-cards-capsule-collection/1.jpg";
import menu from "../../images/products/wedding-stationery/menu-capsule-collection/1.jpg";
import orderOfService from "../../images/products/wedding-stationery/order-of-service-capsule-collection/1.jpg";
import placeCard from "../../images/products/wedding-stationery/place-card-capsule-collection/1.jpg";
import tableNameCards from "../../images/products/wedding-stationery/table-name-cards-capsule-collection/1.jpg";
import tablePlan from "../../images/products/wedding-stationery/table-plan-capsule-collection/1.jpg";
import signage from "../../images/products/wedding-stationery/signage-capsule-collection/1.jpg";
import rehearsalDinner from "../../images/products/wedding-stationery/rehearsal-dinner-invitation-capsule-collection/1.jpg";
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
import baptismCard from "../../images/products/greeting-cards/baptism-card-cross/1.jpg";
import birthdayCardGrey from "../../images/products/greeting-cards/birthday-card-grey-geometric/1.jpg";
import birthdayCardPink from "../../images/products/greeting-cards/birthday-card-pink-geometric/1.jpg";
import brideToBeHeartCard from "../../images/products/greeting-cards/bride-to-be-card-heart/1.jpg";
import christeningCardDove from "../../images/products/greeting-cards/christening-card-dove/1.jpg";
import greetingCardHappy from "../../images/products/greeting-cards/greeting-card-bee-happy/1.jpg";
import greetingCardCactus from "../../images/products/greeting-cards/greeting-card-cactus/1.jpg";
import thankYouCardFloral from "../../images/products/greeting-cards/thank-you-card-floral/1.jpg";
import thankYouCardFoliage from "../../images/products/greeting-cards/thank-you-card-foliage/1.jpg";

const GetProductImage = (item, hasVariants) => {
  switch (item) {
    case "wedding-invitation-suite-capsule-collection":
      return weddingSuiteInvitation;
    case "save-the-date-capsule-collection":
      return saveTheDate;
    case "advice-to-the-bride-and-groom-cards-capsule-collection":
      return adviceToBride;
    case "menu-capsule-collection":
      return menu;
    case "order-of-service-capsule-collection":
      return orderOfService;
    case "place-card-capsule-collection":
      return placeCard;
    case "table-name-cards-capsule-collection":
      return tableNameCards;
    case "table-plan-capsule-collection":
      return tablePlan;
    case "signage-capsule-collection":
      return signage;
    case "rehearsal-dinner-invitation-capsule-collection":
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
    case "baptism-card-cross":
      return baptismCard;
    case "birthday-card-grey-geometric":
      return birthdayCardGrey;
    case "birthday-card-pink-geometric":
      return birthdayCardPink;
    case "bride-to-be-card-heart":
      return brideToBeHeartCard;
    case "christening-card-dove":
      return christeningCardDove;
    case "greeting-card-bee-happy":
      return greetingCardHappy;
    case "greeting-card-cactus":
      return greetingCardCactus;
    case "thank-you-card-floral":
      return thankYouCardFloral;
    case "thank-you-card-foliage":
      return thankYouCardFoliage;
    case "additional-insert-for-wedding-invitation-suite-capsule-collection":
      return addInsertWatercolour;
    default:
      return "";
  }
};

const ShopItem = ({ item, categorySlug }) => {
  const sampleCost = item.tiers[0].price ? item.tiers[0].price : "Unknown";
  const itemSlug = TurnIntoSlug(item.name);
  // console.log("item -> ", item);
  // const allImages = importAll(require.context('./images/', false, /\.(png|jpe?g|svg)$/));

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
            style={{
              backgroundImage: `url(${GetProductImage(
                itemSlug,
                item?.variants ? true : false
              )})`,
            }}
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
