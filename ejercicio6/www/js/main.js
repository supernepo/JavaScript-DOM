"use strict";

const paragraph = document.getElementsByTagName("p");

for (const words of paragraph) {
  const allparagraph = words.innerHTML;
  const wordsOfFive = allparagraph.filter(() => {
    allparagraph.length > 5;
  });
}
