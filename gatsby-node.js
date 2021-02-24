const data = require("./src/data.json");
const path = require("path");

const TurnIntoSlug = (name) => {
  let path = name;
  if (path.includes("|")) {
    const splitPath = path.split("| ");
    path = splitPath[0] + splitPath[1];
  }
  path = path.replace(/\s+/g, "-").toLowerCase();
  return path;
};

exports.createPages = ({ actions }) => {
  const { createPage } = actions;

  const shopPage = path.resolve("./src/pages/shop.js");
  const productPage = require.resolve(`./src/components/product/Product.js`);

  data.shopCategories.forEach((category) => {
    const categoryPath = "/shop/" + TurnIntoSlug(category.name);
    console.log("creating page -> ", categoryPath);
    createPage({
      path: categoryPath,
      component: shopPage,
      context: category.name,
    });
    category.items.forEach((item) => {
      const itemPath = categoryPath + "/" + TurnIntoSlug(item.name);
      console.log("creating page -> ", itemPath);
      createPage({
        path: itemPath,
        component: productPage,
        context: {
          pathToDir:
            "products/weddingstationery/weddinginvitationsuitewatercolour",
        },
      });
    });
  });
};
