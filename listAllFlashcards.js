const { arrDeck , arrFlashcards } = require("./arr")


function listAllFlashcards(){
    for(var i = 0; i < arrFlashcards.length; i ++){
        const idDeck= arrFlashcards[i].idDeck
        const titleDeck = findTitleDeck(idDeck)

        console.log(`Pergunta: ${arrFlashcards[i].task} - Resposta: ${arrFlashcards[i].answer} - Baralho: ${titleDeck} `)
       }
}



function findTitleDeck(idDeck){
    const i = arrDeck.findIndex((deck) => deck.id == idDeck)
    if(i == -1){
        console.log("Id não encontrado!")
        return
    }
    return arrDeck[i].title
}


module.exports = {listAllFlashcards, findTitleDeck}