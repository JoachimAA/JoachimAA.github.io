import React, { useState, useEffect } from "react";
import style from "./homeDetails.module.css";
import LogoSrc from "../images/logo.svg";
import { Link } from "gatsby";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";

const isBrowser = typeof window !== "undefined";

const HomeDetails = () => {
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
          {windowDimensions.width < 761 ? (
            <div>
              <div className={style.button}>
                <Link
                  className={style.buttonLink}
                  to={"/shop/wedding-stationery"}
                >
                  <div>{"Shop Wedding Stationery"}</div>
                </Link>
              </div>
              <div className={style.button}>
                <Link className={style.buttonLink} to={"/shop/invitations"}>
                  <div>{"Shop Invitations"}</div>
                </Link>
              </div>
            </div>
          ) : (
            <div />
          )}
          <div
            style={{
              margin: windowDimensions.width < 761 ? "60px 0 0 0" : "0",
            }}
          >
            <Link to={"/about"} className={style.link}>
              <div className={style.about}>
                <Img fluid={data.file.childImageSharp.fluid} />
              </div>

              <div className={style.imageText}>About Lexie</div>
            </Link>
          </div>
          <Link to={"/contact"} className={style.link}>
            <div
              style={{ backgroundImage: `url(${LogoSrc})` }}
              className={style.image}
            />

            <div className={style.imageText}>Get in touch</div>
          </Link>
        </div>
      )}
    />
  );
};

export default HomeDetails;
