/*
jsnack 2 - Updated
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

*/

const bikesList = [
   {
      'nome': 'bici1',
      'peso': 68
   },
   {
      'nome': 'bici2',
      'peso':32
   },
   {
      'nome': 'bici3',
      'peso': 5
   }
];


let lightBike = bikesList[0];

for (let i = 0; i < bikesList.length; i++){
   if(bikesList[i].peso < lightBike.peso){
      lightBike = bikesList[i];
   }
}

const {nome} = lightBike;

console.log(lightBike);

document.getElementById('myText').innerHTML = `La bicicletta più leggera è ${nome}`;
