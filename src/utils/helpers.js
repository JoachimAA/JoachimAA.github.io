export const SocialMediaLinks = {
  facebook: "https://www.facebook.com/ArtheyPaperDesigns/",
  instagram: "https://www.instagram.com/artheypaperdesigns/",
};

export const GetLastAreaOnUrl = (path) => {
  console.log("path -> ", path);
  return path.substring(path.lastIndexOf("/") + 1);
};

export const TurnIntoSlug = (name) => {
  let path = name;
  if (path.includes("|")) {
    const splitPath = path.split("| ");
    path = splitPath[0] + splitPath[1];
  }
  path = path.replace(/\s+/g, "-").toLowerCase();
  return path;
};
