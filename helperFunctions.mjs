import { allCharactersImages } from "./characters.mjs";

// Use the fetch API or Axios to communicate with an external web API. Use the data provided by this API to populate your application’s content and features. ✅
export async function getCharactersImages() {
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

export function getImageSelections() {
  for (i = 0; i < 5; i++) {
    const randomIndex = Math.floor(Math.random() * allCharactersImages.length);
    characterSelectionImages.push(allCharactersImages[randomIndex])
  }
  console.log(characterSelectionImages);
}

export const characterSelections = [];
const characterSection = document.getElementById(`characterSection`);


export function createCharacter(image, name) {
  let template = document.getElementById(`characterTemplate`);

  let fragment = document.createDocumentFragment();

  let clone = template.content.cloneNode(true);

  clone.getElementById(`templateImage`).src = image;
  clone.getElementById(`templateName`).innerHTML = `<h2>${name}</h2>`;

  fragment.appendChild(clone);

  let charDiv = document.createElement(`li`);
  characterSection.appendChild(charDiv);
  charDiv.appendChild(fragment);
}



function getCharacterSelections() {
  const randomIndexes = [];
  while (randomIndexes.length < 5) {
    const randomIndex = Math.floor(Math.random() * allCharactersImages.length);
    if (!randomIndexes.includes(randomIndex)) {
      randomIndexes.push(randomIndex);
      characterSelections.push(allCharactersImages[randomIndex]);
    }
  }
}

export function displayCharacters() {
  getCharacterSelections();
  const randomIndexes = [];
  while (randomIndexes.length < characterSelections.length) {
    const index = Math.floor(Math.random() * characterSelections.length);
    if (!randomIndexes.includes(index)) {
      randomIndexes.push(index);
    }
  }
  randomIndexes.forEach((index) => {
    let char = characterSelections[index];
    createCharacter(char.image, char.name);
  });
}