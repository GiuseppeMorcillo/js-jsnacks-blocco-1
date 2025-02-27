/*Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array*/
const numeri = []; //Creo un array vuoto
for (let i = 0; i < 6; i++) { //Ciclo che serve per chiedere all'utente 6 volte i numeri
    let numero = parseFloat(prompt(`Inserisci i numeri ${i + 1}:`)); // Mi salvo i numeri nella variabile numero
    if(numero % 2 == 1){ //Controllo se il numero è dispari
        numeri.push(numero);// Pusho dentro l'array i numeri dispari
    }
}
console.log(numeri);