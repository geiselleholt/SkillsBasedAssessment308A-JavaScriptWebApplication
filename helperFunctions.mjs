export async function getCharactersImages() {
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

export function getImageSelections() {
  for (i = 0; i < 5; i++) {
    const randomIndex = Math.floor(Math.random() * allCharactersImages.length);
    characterSelectionImages.push(allCharactersImages[randomIndex])
  }
  console.log(characterSelectionImages);
}