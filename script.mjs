// import { getCharactersImages } from "./helperFunctions.mjs";

let body = document.querySelector("body");

async function randomQuote() {
  const response = await axios("https://api.gameofthronesquotes.xyz/v1/random");
  let quote = response.data.sentence;
  let person = response.data.character.name;
  let quoteContainer = document.createElement("h2");
  quoteContainer.textContent = quote;
  body.appendChild(quoteContainer);
  let personContainer = document.createElement("h3");
  personContainer.textContent = person;
  body.appendChild(personContainer);
  let charImg = await getCharactersImages();
  charImg.forEach((char) => {
    if (char.name === person) {
      let imageContainer = document.createElement("img");
      imageContainer.src = char.image;
      body.appendChild(imageContainer);
    }
  });
}
randomQuote();

let allCharacters = [];

async function getAllCharacters() {
  const response = await axios(
    "https://api.gameofthronesquotes.xyz/v1/characters"
  );
  let characters = response.data;
  characters.forEach((character) => {
    let name = character.name;
    allCharacters.push(name);
  });
  let charactersConatainer = document.createElement("h4");
  charactersConatainer.textContent = allCharacters;
  body.appendChild(charactersConatainer);
}

getAllCharacters();

async function getCharactersImages() {
  let allCharactersImages = [];
  const response = await axios("https://thronesapi.com/api/v2/Characters");
  let charactersImages = response.data;
  charactersImages.forEach((character) => {
    let imageNames = {};
    let name = character.fullName;
    imageNames.name = name;
    let image = character.imageUrl;
    imageNames.image = image;
    allCharactersImages.push(imageNames);
  });
  return allCharactersImages;
}
