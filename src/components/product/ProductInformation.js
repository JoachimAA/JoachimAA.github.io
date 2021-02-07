import React, { useState, Fragment } from "react";
import style from "./productInformation.module.css";
import "../../css/vars.css";

const Includes = (includes) => {
  console.log("item inlcudes -> ", includes);
  return (
    <Fragment>
      {includes ? (
        <div>
          <div>Includes:</div>
          {includes.map((include) => {
            console.log("include -> ", include);
            return <div>{include}</div>;
          })}
        </div>
      ) : (
        <div />
      )}
    </Fragment>
  );
};

const ProductInformation = ({ item }) => {
  console.log("item -> ", item.includes);
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
      <div style={{ marginBottom: "5px" }} className={style.quantityTitle}>
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
      <div>{item.name}</div>
      <div>
        {item.sampleTrue ? "This is for a non-personalised sample only." : ""}
      </div>
      <div>
        {item.shouldContact
          ? "Please contact me to request a quote for a full order."
          : ""}
      </div>
      <Includes item={item.includes} />
    </div>
  );
};

export default ProductInformation;
