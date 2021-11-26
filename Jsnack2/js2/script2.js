// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

//creo una variabile con un array di invitati


 
const guests = ["Giuseppe", "Federica", "Tullio", "Daniela", "Antonella", "Pecco"];

console.log(guests);

//chiedo all'utente il suo nome

let username = prompt("Come ti chiami?")

//verifico SE appartiene alla mia lista
const container = document.querySelector (".container");

if (guests.includes(username)) {
    container.innerHTML = ("Puoi entrare");
    
} else {
    container.innerHTML = ("Non puoi entrare");
}

//voglio che il prompt accetti anche le lettere minuscole