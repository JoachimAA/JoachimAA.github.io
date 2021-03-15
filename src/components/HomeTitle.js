import React from "react";
import style from "./homeTitle.module.css";
// import Img from "gatsby-image";
// import { graphql, StaticQuery } from "gatsby";
import BannerSrc from "../images/banner.jpg";

const HomeTitle = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${BannerSrc})`,
      }}
      className={style.name}
      // const HomeTitle = () => {
      //   return (
      //     <StaticQuery
      //       query={graphql`
      //         query HomeDetailsImages {
      //           file(relativePath: { eq: "banner.jpg" }) {
      //             childImageSharp {
      //               fluid(maxWidth: 200) {
      //                 ...GatsbyImageSharpFluid_withWebp
      //               }
      //             }
      //           }
      //         }
      //       `}
      //       render={(data) => (
      //         <div className={style.name}>
      //           <Img fluid={data.file.childImageSharp.fluid} />
      //         </div>
      //       )}
      //     />
      //   );
      // };
    />
  );
};

export default HomeTitle;
