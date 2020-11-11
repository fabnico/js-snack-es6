/*
Creare un array di oggetti: ogni oggetto descriverà una bici
da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
*/


const bikesList = [
   {
      'nome': 'bici1',
      'peso': 10
   },
   {
      'nome': 'bici2',
      'peso':18
   },
   {
      'nome': 'bici3',
      'peso': 25
   }
];

console.log(bikesList)

let lightBike = bikesList[0];

for (let i = 0; i < bikesList.length; i++){
   if(bikesList[i].peso < lightBike.peso){
      lightBike = bikesList[i];
   }
}

console.log(lightBike);

document.getElementById('myText').innerHTML = `La bicicletta più leggera è ${lightBike.nome}`;
