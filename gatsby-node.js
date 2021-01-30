exports.onCreateNode = ({ node }) => {
  if (node.internal.type === `File`) {
    if (node.internal.description === "src/data.js") {
      consol.log("data file -> ", node.internal.description);
    }
  }
};
