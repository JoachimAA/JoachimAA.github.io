export const GetLastAreaOnUrl = (path) => {
  console.log("path -> ", path);
  return path.substring(path.lastIndexOf("/") + 1);
};
