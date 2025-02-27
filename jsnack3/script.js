/*Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.*/
let somma = 0; //Inizializzo una variabile somma da utilizzare seguentemente
for (let i = 0; i < 10; i++) { // Ciclo per far si che l'utente inserisca 10 numeri 
    let numero = parseFloat(prompt(`Inserisci i numeri ${i + 1}:`)); //Mi salvo i numeri inseriti dall'utente dentro la variabile numero
    somma += numero; // Sommo i numeri inseriti dall'utente
}
console.log(somma);