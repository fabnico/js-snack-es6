/*
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà:
nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre
saranno tutte settate a 0.
*/


const randomNum = () => Math.floor(Math.random() * 100)

const squadre = [];

for(let i = 0; i < 5; i++){
   let squadra = {};
   let name = prompt('Inserisci il nome della squadra')
   squadra.nome = name;
   squadra.punti = 0;
   squadra.falli = 0;

   squadre.push(squadra);
}

console.log(squadre);

/*
Generare numeri random al posto degli 0 nelle proprietà:
punti fatti e falli subiti
*/

for (let i = 0; i < squadre.length; i++){
   squadre[i].punti = randomNum();
   squadre[i].falli = randomNum();
}
