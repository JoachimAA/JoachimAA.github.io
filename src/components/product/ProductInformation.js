import React, { useState } from "react";
import style from "./productInformation.module.css";

const ProductInformation = ({ item }) => {
  const [tierSelected, setTierSelected] = useState(item.tiers[0].name);
  const price = item.tiers.find((tier) => tier.name === tierSelected).price;
  console.log("tierSelected -> ", tierSelected);
  return (
    <div>
      <div className={style.titleText}>{item.name}</div>
      <div className={style.titleText}>{price}</div>
      <div className={style.divider} />
      <div style={{ marginBottom: "5px" }}>Quantity :</div>
      <div className={style.quantitySelector}>
        {item.tiers.map((tier) => (
          <div
            className={style.tierBox}
            style={{
              backgroundColor: tier.name === tierSelected ? "#edd1d5" : "none",
            }}
            onClick={() => {
              console.log("clicking tier selcted -> ", tier.name);
              setTierSelected(item.name);
            }}
          >
            {tier.name}
          </div>
        ))}
      </div>
      <div className={style.basketButton}>Add to basket</div>
      <div>{item.name}</div>
      <div>description for every item</div>
      <div>
        There is lots of options for changing havent figured out exact wording
        yet
      </div>
    </div>
  );
};

export default ProductInformation;
