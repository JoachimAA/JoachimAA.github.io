import React, { useState, Fragment } from "react";
import Header from "../Header";
import Footer from "../Footer";
import ProductInformation from "./ProductInformation";
import style from "./product.module.css";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
const Product = ({ data, location }) => {
  //will only work with up to 9 images
  const sortedImages = data.allFile.edges.sort((a, b) => {
    return a.node.name - b.node.name;
  });

  console.log(sortedImages);

  const [selectedImage, setSelectedImage] = useState(0);

  const item = location.state.item;
  return (
    <div style={{ fontFamily: "Montserrat" }}>
      <Header />
      <div className={style.topContainer}>
        <div className={style.bigPictureContainer}>
          {sortedImages.length > 1 ? (
            <div
              className={style.arrow}
              onClick={() => {
                selectedImage !== 0
                  ? setSelectedImage(selectedImage - 1)
                  : setSelectedImage(sortedImages.length - 1);
              }}
              style={{
                left: "calc(0% + 8px)",
              }}
            >
              <ChevronLeftIcon fontSize="large" />
            </div>
          ) : (
            <Fragment />
          )}
          {sortedImages.length > 0 ? (
            <Img
              fluid={sortedImages[selectedImage].node.childImageSharp.fluid}
              alt=""
            />
          ) : (
            <div>no image</div>
          )}
          {sortedImages.length > 1 ? (
            <div
              className={style.arrow}
              onClick={() => {
                selectedImage !== sortedImages.length - 1
                  ? setSelectedImage(selectedImage + 1)
                  : setSelectedImage(0);
              }}
              style={{
                right: "calc(0% + 8px)",
              }}
            >
              <ChevronRightIcon fontSize="large" />
            </div>
          ) : (
            <Fragment />
          )}
        </div>
        <div className={style.moreImagesContainer}>
          {sortedImages.map((picture, idx) => (
            <div
              key={picture.node.name}
              className={style.moreImageContainer}
              onClick={() => setSelectedImage(idx)}
            >
              <Img
                fluid={sortedImages[idx].node.childImageSharp.fluid}
                alt=""
              />
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

//"products/wedding-stationery/wedding-invitation-suite-watercolour/1.png"

export const query = graphql`
  query AssetsPhotos($pathToDir: String) {
    allFile(
      filter: {
        extension: { regex: "/(jpg)/" }
        relativeDirectory: { eq: $pathToDir }
      }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 600, maxHeight: 600) {
              ...GatsbyImageSharpFluid
            }
          }
          id
          name
        }
      }
    }
  }
`;

export default Product;
