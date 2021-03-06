import React, { useState } from "react";
import style from "./productInformation.module.css";
import "../../css/vars.css";
import { Fragment } from "react";

const IncludeListItems = ({ firstTier, title, listItems, selectedTier }) => {
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
            let newInclude = include;
            if (include.includes(firstTier + "/")) {
              const start = include.indexOf(firstTier);
              const startOfTier = include.substring(start);
              const goodChars = [
                "0",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "/",
              ];
              let found = false;
              let end = 0;
              for (let i = 0; i < startOfTier.length; i++) {
                if (!goodChars.includes(startOfTier[i]) && !found) {
                  found = true;
                  end = i;
                }
              }
              newInclude = include.replace(
                include.substring(start, end + start),
                selectedTier
              );
            }
            return <div key={include}>{newInclude}</div>;
          })}
        </div>
      ) : (
        <div />
      )}
    </div>
  );
};

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

const ProductInformation = ({ item, setSelectedImage, windowDimesions }) => {
  const includes = item.includes && item.includes.split("?");
  const optionalIncludes =
    item.optionalIncludes && item.optionalIncludes.split("?");
  const custom = item.custom ?? "";
  const sizes = item.sizes ?? "";
  const materials = item.materials ?? "";
  const alsoAvailable = item.alsoAvailable && item.alsoAvailable.split("?");
  const description = item.description ?? "";
  const [tierSelected, setTierSelected] = useState(
    item?.tiers ? item?.tiers[0].name : ""
  );
  const [variantSelected, setVariantSelected] = useState(
    item?.variants && item?.variants.length > 0 && item?.variants[0]?.name
  );
  const findPrice = item.tiers
    ? item.tiers.find((tier) => tier.name === tierSelected)
    : undefined;
  const price = findPrice ? findPrice.price : "Unknown";

  const linkMessage = item?.variants
    ? "Open " + variantSelected + " in Etsy"
    : "Open in Etsy";

  const productLink = item?.variants
    ? item?.variants.find((variant) => variant.name === variantSelected).link
    : item.link;

  return (
    <div>
      {windowDimesions > 760 ? (
        <Fragment>
          <div className={style.titleText}>{item.name}</div>
        </Fragment>
      ) : (
        <div />
      )}
      <div
        className={style.priceText}
        style={{ fontFamily: "Montserrat-Regular" }}
      >
        {typeof price === "number" ? "£" + price.toFixed(2) : price}
      </div>
      <div className={style.divider} />
      {item.variants ? (
        <Fragment>
          <div
            className={style.quantityTitle}
            style={{ fontFamily: "Montserrat-Regular", marginBottom: "5px" }}
          >
            Variant :
          </div>
          <div className={style.quantitySelector}>
            {item.variants.map((variant) => (
              <button
                key={variant.name}
                className={style.variantBox}
                style={{
                  backgroundColor:
                    variant.name === variantSelected
                      ? "var(--logo-pink)"
                      : "#ffffff",
                  fontFamily: "Montserrat-Regular",
                }}
                onClick={() => {
                  setVariantSelected(variant.name);
                  console.log(
                    "name -> ",
                    variant.name + " variant imageIndex -> ",
                    variant.imageIndex
                  );
                  setSelectedImage(variant.imageIndex);
                }}
              >
                {variant.name}
              </button>
            ))}
          </div>
        </Fragment>
      ) : (
        <div />
      )}
      <div
        className={style.quantityTitle}
        style={{ fontFamily: "Montserrat-Regular", marginBottom: "5px" }}
      >
        Quantity :
      </div>
      <div className={style.quantitySelector}>
        {item.tiers ? (
          item.tiers.map((tier) => (
            <button
              key={tier.name}
              className={style.tierBox}
              style={{
                backgroundColor:
                  tier.name === tierSelected ? "var(--logo-pink)" : "#ffffff",
                fontFamily: "Montserrat-Regular",
              }}
              onClick={() => {
                setTierSelected(tier.name);
              }}
            >
              {tier.name}
            </button>
          ))
        ) : (
          <div />
        )}
      </div>
      {item.link ? (
        <div className={style.basketButton}>
          <a
            href={productLink}
            className={style.link}
            target="_blank"
            rel="noreferrer"
          >
            {linkMessage}
          </a>
        </div>
      ) : (
        <Fragment />
      )}
      <div>
        {item.sampleTrue ? "This is for a non-personalised sample only." : ""}
      </div>
      <div>
        {item.shouldContact
          ? "Please contact me to request a quote for a full order."
          : ""}
      </div>
      <div className={style.description}>{description}</div>
      <IncludeListItems
        title={"Includes:"}
        listItems={includes}
        firstTier={item.tiers ? item.tiers[0].name : ""}
        selectedTier={tierSelected}
      />
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
