const { arrFlashcards, arrDeck } = require("./arr");

function listFlashCard(idBaralho) {
  for (var i = 0; i < arrFlashcards.length; i++) {
    const titleDeck = takeTitle (idBaralho)
    if (arrFlashcards[i].idDeck == idBaralho) {
      console.log(
        `Pergunta: ${arrFlashcards[i].task} - Resposta: ${arrFlashcards[i].answer} - Baralho: ${titleDeck}`
      );
    }
  }
}



module.exports = listFlashCard;

function takeTitle (idBaralho){
const i = arrDeck.findIndex((deck) => deck.id == idBaralho)
if(i == -1){
    console.log("Id não encontrado!")
    return
}
return arrDeck[i].title

}


// ir no array de flshcard
// pegar id do baralho
// ir no array do baralho com o id
// pegar o titulo
// colocar o titulo no console