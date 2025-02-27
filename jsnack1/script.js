/*L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.*/

let firstNumber = parseInt(prompt("Inserisci il primo numero"));
let secondNumber = parseInt(prompt("Inserisci il secondo numero"))
if (firstNumber === secondNumber) { //Controllo se i numeri siano uguali
    console.log("I numeri sono uguali")
} else {
    if (firstNumber > secondNumber) { //Entra dentro questa condizione in caso la prima sia fala e quindi controlla il numero piu' grande
        console.log("Il primo numero è piu grande: " + firstNumber);
    } else {
        console.log("Il secondo numero è piu' grande: " + secondNumber);
    }
}