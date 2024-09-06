const { arrFlashcards } = require("./arr");

function findFlashcardByTask(task) {
  const arrFiltered = arrFlashcards.filter((flashcard) => {
    if (flashcard.task == task) {
      return flashcard;
    }
  });
  for (var i = 0; i < arrFiltered.length; i++) {
    console.log(
      `Pergunta: ${arrFiltered[i].task} - Resposta: ${arrFiltered[i].answer} - Id do Baralho: ${arrFiltered[i].idDeck}`
    );
  }
}

module.exports = findFlashcardByTask;
