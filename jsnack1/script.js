/*L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.*/

let firstNumber = parseInt(prompt("Inserisci il primo numero"));
let secondNumber = parseInt(prompt("Inserisci il secondo numero"))
if (firstNumber === secondNumber) {
    console.log("I numeri sono uguali")
} else {
    if (firstNumber > secondNumber) {
        console.log("Il primo numero è piu grande: " + firstNumber);
    } else {
        console.log("Il secondo numero è piu' grande: " + secondNumber);
    }
}