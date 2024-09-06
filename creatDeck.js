const {arrDeck} = require("./arr")
const mainMenu = require("./index");

function creatDeck(id, titleDeck){
    const objectDeck ={
     id: id,
     title: titleDeck
    }
    arrDeck.push(objectDeck)
}

module.exports = creatDeck