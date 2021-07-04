import React, { useState, Fragment, useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import ProductInformation from "./ProductInformation";
import style from "./product.module.css";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const MobileProduct = ({
  selectedImage,
  setSelectedImage,
  sortedImages,
  name,
}) => {
  return (
    <Fragment>
      <div className={style.mobileTitle}>{name}</div>
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
            style={{
              outline: selectedImage === idx ? "solid 2px #474747" : "none",
            }}
            key={picture.node.name}
            className={style.moreImageContainer}
            onClick={() => setSelectedImage(idx)}
          >
            <Img fluid={sortedImages[idx].node.childImageSharp.fluid} alt="" />
          </div>
        ))}
      </div>
    </Fragment>
  );
};

const BrowserProduct = ({ selectedImage, setSelectedImage, sortedImages }) => {
  return (
    <Fragment>
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
            style={{
              outline: selectedImage === idx ? "solid 2px #474747" : "none",
            }}
            key={picture.node.name}
            className={style.moreImageContainer}
            onClick={() => setSelectedImage(idx)}
          >
            <Img fluid={sortedImages[idx].node.childImageSharp.fluid} alt="" />
          </div>
        ))}
      </div>
    </Fragment>
  );
};

const isBrowser = typeof window !== "undefined";

const Product = ({ data, location }) => {
  const getWindowDimensions = () => {
    if (!isBrowser) {
      return {
        width: 0,
        height: 0,
      };
    }
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  };

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    if (isBrowser) window.addEventListener("resize", handleResize);
    return () => {
      if (isBrowser) window.removeEventListener("resize", handleResize);
    };
  }, []);

  //will only work with up to 9 images
  const sortedImages = data.allFile.edges.sort((a, b) => {
    return a.node.name - b.node.name;
  });

  const [selectedImage, setSelectedImage] = useState(0);

  const item = location.state ? location.state.item : {};
  return (
    <div style={{ fontFamily: "Montserrat" }}>
      <Header />

      <div className={style.topContainer}>
        {windowDimensions.width > 760 ? (
          <BrowserProduct
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
            sortedImages={sortedImages}
          />
        ) : (
          <MobileProduct
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
            sortedImages={sortedImages}
            name={item.name}
          />
        )}
        <div className={style.informationContainer}>
          <ProductInformation
            item={item}
            setSelectedImage={setSelectedImage}
            windowDimensions={windowDimensions}
          />
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
