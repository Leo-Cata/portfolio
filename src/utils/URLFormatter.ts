// replaces spaces with _ and makes the string lowercase
export const URLFormatter = (url: string) => {
  return url.toLowerCase().replace(/\s/g, "_");
};
