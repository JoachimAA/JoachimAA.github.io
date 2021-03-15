import React from "react";
import style from "./homeDetails.module.css";
import LogoSrc from "../images/logo.svg";
import { Link } from "gatsby";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";

const HomeDetails = () => {
  return (
    <StaticQuery
      query={graphql`
        query BannerImage {
          file(relativePath: { eq: "me.jpg" }) {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={(data) => (
        <div className={style.container}>
          <Link to={"/contact"} className={style.link}>
            <div
              style={{ backgroundImage: `url(${LogoSrc})` }}
              className={style.image}
            />

            <div className={style.imageText}>Get in touch</div>
          </Link>
          <div>
            <Link to={"/about"} className={style.link}>
              <div style={{ width: "200px", height: "200px" }}>
                <Img fluid={data.file.childImageSharp.fluid} />
              </div>

              <div className={style.imageText}>About Lexie</div>
            </Link>
          </div>
        </div>
      )}
    />
  );
};

export default HomeDetails;
