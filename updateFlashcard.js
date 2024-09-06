const {arrFlashcards} = require("./arr")

function  updateFlashcard(takeId, newTask, newAnswer){
const i = arrFlashcards.findIndex((flashcard) => flashcard.id == takeId);
if(i == -1){
    console.log("Id não encontrado!");
    return;
}
arrFlashcards[i].task = newTask;
arrFlashcards[i].answer = newAnswer;
console.log("Dados atualizados!")
}

module.exports =  updateFlashcard


