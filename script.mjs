// Organize your JavaScript code into at least three (3) different module files, and import functions and data across files as necessary. ✅
import * as helpers from "./helperFunctions.mjs";
import { allCharactersImages } from "./characters.mjs";

let selectedChar = "";

// Create user interaction with the API through a search feature, paginated gallery, or similar. This feature should use GET requests to retrieve associated data. ✅
// Make use of Promises and async/await syntax as appropriate. ✅
(async function randomQuote() {
  const response = await axios("https://api.gameofthronesquotes.xyz/v1/random");
  selectedChar = response.data.character.name;
  console.log(selectedChar);
  let quote = response.data.sentence;
  const quoteSection = document.getElementById("quoteSection");
  quoteSection.textContent = `"${quote}"`;
  let charImg = await helpers.getCharactersImages();
  charImg.forEach((char) => {
    if (char.name === selectedChar) {
      helpers.characterSelections.push(char);
    }
  });
  helpers.displayCharacters();
})();

characterSection.addEventListener(`click`, handleCharacterSection);

// let counter = 0;
// let counterContainer = document.getElementById("counter");
// counterContainer.textContent = counter;

function handleCharacterSection(e) {
  e.preventDefault();
  console.log(e.target.src);
  let selectedImage = "";
  if (e.target.tagName === "UL") {
    return;
  } else {
    allCharactersImages.forEach((char) => {
      if (char.name === selectedChar) {
        selectedImage = char.image;
        console.log(selectedImage);
      }
    });
  }
  if (
    e.target.src === selectedImage ||
    e.target.src === `http://127.0.0.1:5500/${selectedImage}` ||
    e.target.src ===
      `https://geiselleholt.github.io/SkillsBasedAssessment308A-JavaScriptWebApplication/${selectedImage}`
  ) {
    // counter += 1;
    // console.log(counter);
    alert("Correct 😀 \nPlay again!");
    setTimeout(window.location.reload(), 2000);
  } else {
    // counter = 0;
    alert("Nope 😵 Try Again");
  }
}

// OTHER REQUIREMENTS -------------------------
// Ensure the program runs as expected, without any undesired behavior caused by misunderstanding of the JavaScript event loop (such as race conditions, API calls being handled out of order, etc.). ✅

// Create an engaging user experience through the use of HTML and CSS. ✅

// Ensure that the program runs without errors (comment out things that do not work, and explain your blockers - you can still receive partial credit). ✅

// Commit frequently to the git repository. ✅

// Include a README file that contains a description of your application. ✅

// Level of effort displayed in creativity, presentation, and user experience. ✅

// ----------------------------------------------
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
