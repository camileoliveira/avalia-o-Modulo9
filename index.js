const prompt = require("prompt-sync")({ sigint: true });
const { arrDeck, arrFlashcards } = require("./arr");
const creatDeck = require("./creatDeck");
const listDeck = require("./listDeck");
const updateDeck = require("./updateDeck");
const removeDeck = require("./removeDeck");
const creatFlashCard = require("./creatFlashCard");
const listFlashCard = require("./listFlashCard");
const {listAllFlashcards} = require("./listAllFlashcards");
const updateFlashcard = require("./updateFlashcard");
const removeFlashcard = require("./removeFlashcard");
const findFlashcardByTask = require("./findFlashcardByTask");
const findFlashcardByIdDeck = require("./findFlashcardByIdDeck");

function mainMenu() {
  do{
  question = prompt(`
    1.Criar Baralho;
    2. Listar Baralho;
    3. Atualizar Baralho
    4. Deletar Baralalho;
    5. Criar Flashcard;
    6. Listar Flashcards;
    7. Atualizar Flashcard;
    8. Deletar Flashcard;
    9. Buscar Flashcard;
    10. Sair
    `);

    if (question == "1") {
      const id = arrDeck.length + 1;
      const titleDeck = prompt("Título do baralho: ");
      creatDeck(id, titleDeck);
    }
    if (question == "2") {
      listDeck();
    }
    if (question == "3") {
      const takeId = prompt("Id do baralho que você quer atualizar? ");
      const newTitle = prompt("Novo título do baralho: ");
      updateDeck(takeId, newTitle);
    }
    if (question == "4") {
      const idRemove = prompt("Id do baralho que você quer remover: ");
      removeDeck(idRemove);
    }

    if (question == "5") {
      const id = arrFlashcards.length + 1;
      const taskFlashCard = prompt("Pergunta: ");
      const answerFlashCard = prompt("Resposta: ");
      const deckId = prompt("Id do baralho associado: ");
      creatFlashCard(id, taskFlashCard, answerFlashCard, deckId);
    }
    if (question == "6") {
      questionList = prompt(`
    1. Listar todos os Flashcards
    2. Listar Flashcard de um baralho
    `);

      if (questionList == "1") {
        listAllFlashcards();
      }

      if (questionList == "2") {
    const idDeck = prompt(
    "Indique o id do baralho você quer ver os Flashcards: "
        );
        listFlashCard(idDeck);
      }
    }
    if (question == "7") {
      const takeId = prompt("Id do Flashcard que você quer atualizar? ");
      const newTask = prompt("Nova pergunta: ");
      const newAnswer = prompt("Nova resposta: ");
      updateFlashcard(takeId, newTask, newAnswer);
    }
    if (question == "8") {
      const idFlashcard = prompt("Id do flashcard para remover: ");
      removeFlashcard(idFlashcard);
    }
    if (question == "9") {
      questionFind = prompt(`
    Buscar Flashcard por:
    1. Pergunta
    2. Por id do baralho 
    `);

    if (questionFind == "1") {
        const task = prompt(`Digite a pergunta :`);
        findFlashcardByTask(task);
      }
      if (questionFind == "2") {
        const idDeck = prompt("Id do baralho: ");
        findFlashcardByIdDeck(idDeck);
      }
    }
  }
  while (question != "10")
}

mainMenu();

module.exports = mainMenu;
