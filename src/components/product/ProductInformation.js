import React, { useState } from "react";
import style from "./productInformation.module.css";
import "../../css/vars.css";

const ListItems = ({ title, listItems }) => {
  return (
    <div className={style.infoSectionContainer}>
      {listItems ? (
        <div>
          <div
            className={style.subTitle}
            style={{ fontFamily: "Montserrat-Regular" }}
          >
            {title}
          </div>
          {listItems.map((include) => {
            return <div key={include}>{include}</div>;
          })}
        </div>
      ) : (
        <div />
      )}
    </div>
  );
};

const ProductInformation = ({ item }) => {
  const includes = item.includes && item.includes.split("?");
  const optionalIncludes =
    item.optionalIncludes && item.optionalIncludes.split("?");
  const custom = item.custom ?? "";
  const sizes = item.sizes ?? "";
  const materials = item.materials ?? "";
  const alsoAvailable = item.alsoAvailable && item.alsoAvailable.split("?");
  const description = item.description ?? "";
  const [tierSelected, setTierSelected] = useState(item.tiers[0].name);
  const findPrice = item.tiers.find((tier) => tier.name === tierSelected);
  const price = findPrice ? findPrice.price : "Unknown";
  return (
    <div>
      <div className={style.titleText}>{item.name}</div>
      <div
        className={style.priceText}
        style={{ fontFamily: "Montserrat-Regular" }}
      >
        {typeof price === "number" ? "£" + price.toFixed(2) : price}
      </div>
      <div className={style.divider} />
      <div
        style={{ marginBottom: "5px" }}
        className={style.quantityTitle}
        style={{ fontFamily: "Montserrat-Regular" }}
      >
        Quantity :
      </div>
      <div className={style.quantitySelector}>
        {item.tiers.map((tier) => (
          <div
            key={tier.name}
            className={style.tierBox}
            style={{
              backgroundColor:
                tier.name === tierSelected ? "var(--logo-pink)" : "#ffffff",
            }}
            onClick={() => {
              console.log("clicking tier selcted -> ", tier.name);
              setTierSelected(tier.name);
            }}
          >
            {tier.name}
          </div>
        ))}
      </div>
      <div className={style.basketButton}>Add to basket</div>
      <div>
        {item.sampleTrue ? "This is for a non-personalised sample only." : ""}
      </div>
      <div>
        {item.shouldContact
          ? "Please contact me to request a quote for a full order."
          : ""}
      </div>
      <ListItems title={"Includes:"} listItems={includes} />
      <div>{description}</div>
      <ListItems title={"Optional extras:"} listItems={optionalIncludes} />
      <div>{custom}</div>
      <div className={style.infoSectionContainer}>
        <div
          style={{ fontFamily: "Montserrat-Regular" }}
          className={style.subTitle}
        >
          Sizes:
        </div>
        <div>{sizes}</div>
      </div>
      <div className={style.infoSectionContainer}>
        <div
          style={{ fontFamily: "Montserrat-Regular" }}
          className={style.subTitle}
        >
          Materials:
        </div>
        <div>{materials}</div>
      </div>
      <ListItems
        title={"Also available in this design:"}
        listItems={alsoAvailable}
      />
    </div>
  );
};

export default ProductInformation;
