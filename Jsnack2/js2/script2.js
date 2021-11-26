// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

//creo una variabile con un array di invitati


 
const guests = ["Giuseppe", "Federica", "Tullio", "Daniela", "Antonella", "Pecco"];

console.log(guests);

//chiedo all'utente il suo nome

let username = prompt("Come ti chiami?")
console.log(username);

//verifico SE appartiene alla mia lista

//ciclo while

// i = 0;

// while (i < guests.length) {

//     console.log("ciao");
//     if (username == guests [i]) {
//          alert ("porcodio");
//          i ++;
//     } else {
//          alert ("Muori oggi");
//     }
// }


//NON FINITO.















//ciclo for


let found = false;

let message = "Non puoi entrare"

for (let i = 0; i < guests.length; i++) {
    
    if (username == guests[i]) {
        found = true;
        console.log(found);        
    } 

    if (found == true) {

        const container = document.querySelector (".container");
        container.innerHTML = "PUOI ENTRARE";

    } else {
        const container = document.querySelector (".container");
        container.innerHTML = "NON PUOI ENTRARE";
    }

}    

