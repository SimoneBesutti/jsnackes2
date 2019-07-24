/*L'utente inserisce due parole in succesione con due prompt
il software stampa prima la parola più corta e poi la più lunga*/

//Dichiaro le variabili
var parola1, parola2

//Prompt per l'inserimento
parola1 = prompt("Inserisci una parola casuale");

parola2 = prompt("Inserisce un'altra parola");


//Confronto tra le parole
if(parola1.length > parola2.length){
    document.getElementById("mio_id").innerHTML = parola1 + " è più lunga";

} if(parola2.length > parola1.length){
    document.getElementById("mio_id").innerHTML = parola2 + " è più lunga ";
} else if(parola1.length == parola2.length){
    document.getElementById("mio_id").innerHTML = parola1 + " è lunga come " + parola2;
}