// Il software deve chiedere per 10 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.



//ciclo for

let sum = 0;

for (let i = 0; i < 10; i++) {

    const userNumber = parseInt(prompt("inserisci un numero"));
    console.log(userNumber);

    sum += userNumber;
}

console.log("Totale " + sum);

const container = document.querySelector (".container");
container.innerHTML = sum;




//ciclo while

let sum = 0;

let i = 0;

while (i < 10) {

    const userNumber = parseInt(prompt("inserisci un numero"));
    sum += userNumber;
    i++;
    
}

console.log("Totale " + sum);

const container = document.querySelector (".container");
container.innerHTML = sum;
