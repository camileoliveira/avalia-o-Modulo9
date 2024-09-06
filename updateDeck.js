const { arrDeck } = require("./arr");

function updateDeck(takeId, newTitle) {
  const i = arrDeck.findIndex((findId) => findId.id == takeId);
  if (i == -1) {
    console.log("Id não encontrado");
    return;
  }
  arrDeck[i].title = newTitle;
  console.log("Título alterado")
}

module.exports = updateDeck;

