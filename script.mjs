// import { getCharactersImages, getImageSelections } from "./helperFunctions.mjs";
// import * as helpers from "./helperFunctions.mjs";
// import { allCharactersImages } from "./otherCharacters.mjs";
// import { getCharactersImages } from "./helperFunctions.mjs";

let allCharactersImages = [
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
    name: `Eddard "Ned" Stari`,
    image: "images/ned.png",
  },
  {
    name: "Robb Stari",
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
    name: "Bran Stari",
    image: "images/bran.png",
  },
];

let characterSelections = [];

(async function randomQuote() {
  const response = await axios("https://api.gameofthronesquotes.xyz/v1/random");
  let quote = response.data.sentence;
  let person = response.data.character.name;
  let quoteContainer = document.getElementById("quoteContainer");
  quoteContainer.textContent = quote;
  let charImg = await getCharactersImages();
  charImg.forEach((char) => {
    if (char.name === person) {
      characterSelections.push(char);
    }
  });
  getCharSelections();
  displayCharacters();
})();

function getCharSelections() {
  const indexes = [];
  while (indexes.length < 5) {
    const randomIndexes = Math.floor(Math.random() * allCharactersImages.length);
    if (!indexes.includes(randomIndexes)) {
      indexes.push(randomIndexes);
      characterSelections.push(allCharactersImages[randomIndexes]);
    }
  }
}

function displayCharacters() {
  const randomIndexes = [];
  while (randomIndexes.length < characterSelections.length) {
    const index = Math.floor(Math.random() * characterSelections.length);
    if (!randomIndexes.includes(index)) {
      randomIndexes.push(index);
    }
  }
  randomIndexes.forEach((index) => {   
    let char = characterSelections[index]
    createCharacter(char.image, char.name);
  });
}

function createCharacter(image, name) {
  let template = document.getElementById(`characterTemplate`);

  let fragment = document.createDocumentFragment();

  let clone = template.content.cloneNode(true);

  clone.getElementById(`templateImage`).src = image;
  clone.getElementById(`templateName`).innerHTML = `<h3>${name}</h3>`;

  fragment.appendChild(clone);

  let characterSection = document.getElementById(`characterList`);
  let charDiv = document.createElement(`li`);
  characterSection.appendChild(charDiv);
  charDiv.appendChild(fragment);
}

async function getCharactersImages() {
  const response = await axios("https://thronesapi.com/api/v2/Characters");
  let charactersImages = response.data;
  charactersImages.forEach((character) => {
    let imageNames = {};
    imageNames.name = character.fullName;
    imageNames.image = character.imageUrl;
    allCharactersImages.push(imageNames);
  });
  return allCharactersImages;
}

// USED THIS FUNCTION TO GET LIST OF CHARACTERS IN THIS QUOTE API TO CROSS REFERENCE WITH THE CHARACTERS IN THE IMAGE API IN ORDER TO HARD CODE THE allCharactersImages ARRAY WITH CHARACTERS THAT WERE MISSING
// (async function getAllCharacters() {
//   let allCharacters = [];
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
// })()
