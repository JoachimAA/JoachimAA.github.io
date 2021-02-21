import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import ProductInformation from "./ProductInformation";
import style from "./product.module.css";
import { graphql } from "gatsby";
import Img from "gatsby-image";

const Product = ({ data, location }) => {
  console.log("data -> ", data);
  const item = location.state.item;
  const pictureArray = [1, 2, 3, 4];
  return (
    <div style={{ fontFamily: "Montserrat" }}>
      <Header />
      <div className={style.topContainer}>
        <div className={style.bigPictureContainer}>
          <Img fluid={data.file.childImageSharp.fluid} alt="" />
        </div>
        <div className={style.moreImagesContainer}>
          {pictureArray.map((picture) => (
            <div key={picture} className={style.moreImageContainer}>
              <div className={style.moreImageContent}>{picture}</div>
            </div>
          ))}
        </div>
        <div className={style.informationContainer}>
          <ProductInformation item={item} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

//"products/wedding-stationery/wedding-invitation-suite/one.png"

export const query = graphql`
  query {
    file(relativePath: { eq: "newone.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 600, maxHeight: 600) {
          ...GatsbyImageSharpFluid
        }
        # fixed(width: 400, height: 400) {
        #   ...GatsbyImageSharpFixed
        # }
      }
    }
  }
`;

export default Product;
