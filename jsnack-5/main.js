/*
jsnack 5
Partendo da un array semplice tipo:
var myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
chiediamo all’utente con 2 prompt due numeri tra 0 e la lunghezza dell’array
quindi creiamone uno nuovo con solo i valori che hanno la posizione compresa tra i due numeri inseriti dall’utente
*/

var myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];

let scelta = prompt(`Inserisci un numero tra 0 e ${myArray.length - 1}`)
let scelta2 = prompt(`Inserisci un altro numero tra ${scelta} e ${myArray.length - 1}`)

const userArray = myArray.filter((element,index) => {
   return (index >= scelta) && (index <= scelta2)
})

console.log(userArray);
