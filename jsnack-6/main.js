/* jsnack 6
dato questo array di obj iniziale:
var arrayObj = [
  {name: 'Poppy', type: 'tshirt', color: 'red'},
  {name: 'Jumping', type: 'occhiali', color: 'blue'},
  {name: 'CrissCross', type: 'scarpe', color: 'black'},
  {name: 'Jenny', type: 'borsa', color: 'pink'},
];
Creiamo una copia dell’array di partenza e aggiungiamo ai singoli elementi (quindi ogni oggetto del nuovo array)
una nuova proprietà position che contiene una lettera casuale. non dobbiamo modificare l’array iniziale
*/

var arrayObj = [
  {name: 'Poppy', type: 'tshirt', color: 'red'},
  {name: 'Jumping', type: 'occhiali', color: 'blue'},
  {name: 'CrissCross', type: 'scarpe', color: 'black'},
  {name: 'Jenny', type: 'borsa', color: 'pink'},
];

function randomChar(){
   const alphabet = 'abcdefghilmnopqrstuvz'
   return alphabet[Math.floor(Math.random() * alphabet.length)]
}

console.log(randomChar())

const newArrayObj = arrayObj.map((el,i) => {
   el.position = randomChar()
   return el
})

console.log(newArrayObj)
