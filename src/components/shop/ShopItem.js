import React from "react";
import style from "./shopItem.module.css";
import { Link } from "gatsby";
import { TurnIntoSlug } from "../../utils/helpers";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { StaticImage } from "gatsby-plugin-image";

const ShopItem = ({ item, categorySlug }) => {
  const sampleCost = item.tiers[0].price ? item.tiers[0].price : "Unknown";
  const itemSlug = TurnIntoSlug(item.name);
  const path = "src/images/logo.svg";
  const pathToImage =
    "../../images/products/" + categorySlug + "/" + itemSlug + "/1.jpg";
  console.log(pathToImage);

  return (
    <StaticQuery
      query={graphql`
        query {
          file(relativePath: { eq: "me.png" }) {
            childImageSharp {
              fluid(maxWidth: 600, maxHeight: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={(data) => (
        <div className={style.container}>
          <Link
            to={"/shop/" + categorySlug + "/" + itemSlug}
            state={{ item }}
            className={style.link}
          >
            <div className={style.image}>
              <StaticImage src={pathToImage} alt="" />
              {/* <Img fluid={data.file.childImageSharp.fluid} alt="" /> */}
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
      )}
    />
  );
};

export default ShopItem;
