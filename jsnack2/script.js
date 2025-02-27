/*L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.*/

let firstWord = prompt("Inserisci la prima parola");
let secondWord =prompt("Inserisci la seconda parola");
if (firstWord.length === secondWord.length) {
    console.log("Le parole sono lunghe uguali")
} else {
    if (firstWord.length > secondWord.length) {
        console.log("La prima parola è piu grande: " + firstWord);
    } else {
        console.log("La seconda parola è piu' grande: " + secondWord);
    }
}
