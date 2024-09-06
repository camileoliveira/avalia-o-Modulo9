const {arrDeck, arrFlashcards} = require("./arr")

function removeDeck(idRemove){
    
    arrDeck.forEach((deck) => {

        if( deck.id == idRemove){
            arrDeck.splice(deck,1)
            console.log("Removido")
        }
    })
    flashcardRemove()
}





function flashcardRemove (idRemove){
    const i = arrFlashcards.findIndex((flashcard) => flashcard.idDeck == idRemove)
    arrFlashcards.splice(i, 1)
}




module.exports = removeDeck

// Fazer: 
//Durante a remoção do baralho, deve-se excluir todos os flashcards daquele baralho
// Ir no array de flashcards
// localizar qual tem o id do baralho
// remove o objeto inteiro


//IMPEDIMENTO
// voltar as opçoes do incio p ver os flashcard