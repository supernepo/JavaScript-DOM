"use strict";
const names = [
  "A-Jay",
  "Manuel",
  "Manuel",
  "Eddie",
  "A-Jay",
  "Su",
  "Reean",
  "Manuel",
  "A-Jay",
  "Zacharie",
  "Zacharie",
  "Tyra",
  "Rishi",
  "Arun",
  "Kenton",
];

function removeReplicates(value, index, self) {
  return self.indexOf(value) === index;
}

let newArrayNames = names.filter(removeReplicates);
console.info(newArrayNames);
