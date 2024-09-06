const {arrDeck} = require("./arr");


function listDeck(){
   for(var i = 0; i < arrDeck.length; i ++){
    console.log(`Título: ${arrDeck[i].title}`)
   }

}






module.exports = listDeck