export const GetLastAreaOnUrl = (path) => {
  console.log("path -> ", path);
  return path.substring(path.lastIndexOf("/") + 1);
};

export const TurnIntoSlug = (name) => {
  let path = name;
  const specialCharacterIndex = path.indexOf("|");
  if (specialCharacterIndex !== -1) {
    path = path.slice(specialCharacterIndex, 2);
  }
  path = path.replace(/\s+/g, "-").toLowerCase();
  return path;
};
