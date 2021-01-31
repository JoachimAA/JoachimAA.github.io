const { createFilePath } = require(`gatsby-source-filesystem`);
const data = require("./src/data.json");
const path = require("path");

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createPage } = actions;

  const template = path.resolve("./src/pages/shop.js");

  data.shopCategories.forEach((category) => {
    var path = "/shop/" + category.slug;
    console.log("creating page -> ", path);
    createPage({
      path,
      component: template,
      context: category.name,
    });
  });
};
