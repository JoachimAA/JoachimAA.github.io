// import React from "react";
// import { graphql } from "gatsby";
// import Img from "gatsby-image";

// const GImage = ({ data }) => {
//   console.log("gatsby image data -> ", data);
//   return (
//     <div>
//       <h1>Hello gatsby-image</h1>
//       <Img fixed={data} />
//     </div>
//   );
// };

// export const query = graphql`
//   query {
//     file(relativePath: { eq: "blog/avatars/kyle-mathews.jpeg" }) {
//       childImageSharp {
//         # Specify the image processing specifications right in the query.
//         # Makes it trivial to update as your page's design changes.
//         fixed(width: 125, height: 125) {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }
//   }
// `;

// export default GImage;
