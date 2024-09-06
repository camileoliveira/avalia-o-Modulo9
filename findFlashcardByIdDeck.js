const { arrFlashcards } = require("./arr");
const {findTitleDeck} = require("./listAllFlashcards");

function findFlashcardByIdDeck(idDeck) {
  const arrFiltered = arrFlashcards.filter((flahscard) => {
    if (flahscard.idDeck == idDeck) {
      return flahscard;
    }
  });

  for (var i = 0; i < arrFiltered.length; i++) {
    const title = findTitleDeck(arrFiltered[i].idDeck)
    console.log(
      `Pergunta: ${arrFiltered[i].task} - Resposta: ${arrFiltered[i].answer} - Id do Baralho: ${title}`
    );
  }
}

module.exports = findFlashcardByIdDeck;
