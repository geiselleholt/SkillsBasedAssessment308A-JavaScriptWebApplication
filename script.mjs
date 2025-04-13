// import { getCharactersImages } from "./helperFunctions.mjs";
// import * as helpers from "./helperFunctions.mjs";
// import { otherChars } from "./otherCharacters.mjs";
// import { getCharactersImages } from "./helperFunctions.mjs";

let otherChars = [
  {
    name: "Aemon Targaryen",
    image: "images/aemon.png",
  },
  {
    name: "Jaime Lannister",
    image: "images/jaime.png",
  },
  {
    name: "Aerys II Targaryen",
    image: `images/aerys.png`,
  },
  {
    name: "Daario Naharis",
    image: "images/daario.png",
  },
  {
    name: "Joer Mormont",
    image: "images/joer.png",
  },
  {
    name: "Lyanna Mormont",
    image: "images/lyanna.png",
  },
  {
    name: "Mance Rayder",
    image: "images/mance.png",
  },
  {
    name: `Eddard "Ned" Stark`,
    image: "images/ned.png",
  },
  {
    name: "Robb Stark",
    image: "images/robb.png",
  },
  {
    name: "Sandor Clegane",
    image: "images/sandor.png",
  },
  {
    name: "Tormund",
    image: "images/tormund.png",
  },
  {
    name: "Lord Varys",
    image: "images/varys.png",
  },
  {
    name: "Walder Frey",
    image: "images/walder.png",
  },
  {
    name: "Bran Stark",
    image: "images/bran.png",
  },
];

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
  let imageContainer = document.createElement("img");
  imageContainer.style.width = "300px";
  let charImg = await getCharactersImages();
  charImg.forEach((char) => {
    if (char.name === person) {
      imageContainer.src = char.image;
      body.appendChild(imageContainer);
    } else {
      otherChars.forEach((char) => {
        if (char.name === person) {
          imageContainer.src = char.image;
          body.appendChild(imageContainer);
        }
      });
    }
  });
}
randomQuote();

// let allCharacters = [];

// async function getAllCharacters() {
//   const response = await axios(
//     "https://api.gameofthronesquotes.xyz/v1/characters"
//   );
//   let characters = response.data;
//   characters.forEach((character) => {
//     let name = character.name;
//     allCharacters.push(name);
//   });
//   let charactersConatainer = document.createElement("h4");
//   charactersConatainer.textContent = allCharacters;
//   body.appendChild(charactersConatainer);
// }

// getAllCharacters();

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
