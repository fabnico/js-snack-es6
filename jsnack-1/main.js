/*
Creare un oggetto palla che abbia le seguenti proprietà.
Nome = palla
Peso = 10
*/

const palla = {
   'Nome': 'palla',
   'Peso': 10
};

console.log(palla);

/*
Attraverso un prompt dare la possibilità all’utente di
modificare il peso della palla.
*/

palla.Peso = parseInt(prompt('Inserisci il peso della palla'));

console.log(palla);
