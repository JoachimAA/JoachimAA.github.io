import React from "react";
import style from "./shopCategory.module.css";
import { Link } from "gatsby";

const ShopCategory = ({ category }) => {
  return (
    <div className={style.container}>
      <Link className={style.link} to={"/shop/" + category.slug}>
        <div>{category.name}</div>
      </Link>
    </div>
  );
};

export default ShopCategory;
