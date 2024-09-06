const { arrFlashcards } = require("./arr");
const mainMenu = require("./index");

function creatFlashCard(id, taskFlashCard, answerFlashCard, deckId) {
  const objecFlashCard = {
    id: id,
    task: taskFlashCard,
    answer: answerFlashCard,
    idDeck: deckId,
  };

  arrFlashcards.push(objecFlashCard);
}

module.exports = creatFlashCard;
