export const formatTitle = (title: string) => {
  const wordsToRemove = [
    "tutorial",
    "youtube",
    "bmd",
    "davinci",
    "resolve",
    "resolve/",
    "resolve/fusion",
    "fusion",
    "studio",
    "how",
    "to",
    "make",
    "and",
    "a",
    "free",
    "version",
    "for",
    "in",
    "/",
    "-",
    "|",
    "–",
    ":",
  ];

  let formattedTitle = title.toLowerCase();

  const words = formattedTitle
    .split(" ")
    .filter(word => !wordsToRemove.includes(word.toLowerCase()));

  return words.join(" ").toUpperCase();
};
