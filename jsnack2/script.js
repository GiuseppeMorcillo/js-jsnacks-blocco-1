/*L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.*/

let firstWord = prompt("Inserisci la prima parola");
let secondWord =prompt("Inserisci la seconda parola");
if (firstWord.length === secondWord.length) { //Uso .lenght per controllare la lunghezza della parola cosi da poter verificare se siano uguali
    console.log("Le parole sono lunghe uguali")
} else {
    if (firstWord.length > secondWord.length) {// controllo quale delle due parole sia piu' grande 
        console.log("La prima parola è piu grande: " + firstWord);
    } else {
        console.log("La seconda parola è piu' grande: " + secondWord);
    }
}
