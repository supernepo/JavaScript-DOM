"use strict";
const responseGeneral = await fetch("https://rickandmortyapi.com/api/");
const fullData = await responseGeneral.json();
const episodes = fullData.episodes;
const responseEpisodes = await fetch(episodes);
const episodesFullData = await responseEpisodes.json();
const episodesData = episodesFullData.results;
const januaryEpisodes = episodesData.filter((episodesData) => {
  return episodesData.air_date.startsWith("January");
});
const januaryCharactersArrays = januaryEpisodes.map((januaryEpisodes) => {
  return januaryEpisodes.characters;
});
const charactersList = [];
for (let i = 0; i < januaryCharactersArrays.length; i++) {
  for (let j = 0; j < januaryCharactersArrays[i].length; j++) {
    charactersList.push(januaryCharactersArrays[i][j]);
  }
}
for (let i = 0; i < charactersList.length; i++) {
  const charactersGeneral = await fetch(charactersList[i]);
  const charactersData = await charactersGeneral.json();
  const characters = charactersData.name;
  console.log(characters);
}
