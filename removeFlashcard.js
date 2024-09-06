const { arrFlashcards } = require("./arr");

function removeFlashcard(idFlashcard) {
  const i = arrFlashcards.findIndex((flashcard) => flashcard.id == idFlashcard);
  if (i == -1) {
    console.log("Id não encontrado!");
    return;
  }
  arrFlashcards.splice(i, 1);
  console.log("Removido");
}

module.exports = removeFlashcard;
