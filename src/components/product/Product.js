import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import ProductInformation from "./ProductInformation";
import style from "./product.module.css";

const Product = ({ location }) => {
  const item = location.state.item;
  const pictureArray = [1, 2, 3, 4];
  return (
    <div style={{ fontFamily: "Montserrat" }}>
      <Header />
      <div className={style.topContainer}>
        <div className={style.bigPictureContainer}>
          <div className={style.productPicture}>product image</div>
        </div>
        <div className={style.moreImagesContainer}>
          {pictureArray.map((picture) => (
            <div className={style.moreImageContainer}>
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

export default Product;
