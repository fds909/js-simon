/*
    Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
    Dopo 30 secondi l'utente deve inserire, uno alla volta,
    i numeri che ha visto precedentemente, tramite il prompt().
    Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei
    numeri da indovinare sono stati individuati.
*/

let randomNums = [];
let userNums = [];
const numbersOfNums = 5;
let numsDisplay = document.getElementById("random-nums");

randomNums = generateNumbers(numbersOfNums);

alert("Memorizza questi numeri, dovrai reinserirli tra 30 secondi");

// visualizzazione dei numeri
for (let i = 0; i < randomNums.length; i++) {
    numsDisplay.innerHTML += `<li>${randomNums[i]}</li>`;
}

setTimeout(guessing, 3000);
function guessing() {
    numsDisplay.classList.add("hidden");

    alert("Tempo scaduto: ora devi inserire i numeri");

    for (let i = 0; i < numbersOfNums; i++) {
        let num = parseInt(prompt("Inserisci un numero"));
        userNums.push(num);
    }

    // confronto tra numeri iniziali e numeri dell'utente
    let guessedNums = [];

    for (let i = 0; i < randomNums.length; i++) {
        if (userNums.includes(randomNums[i])) {
            guessedNums.push(randomNums[i]);
        }
    }

    // OUTPUT
    message = `Hai indovinato ${guessedNums.length} numeri`;

    if (guessedNums.length > 0) {
        message += ': ';
        for (let i = 0; i < guessedNums.length; i++) {
            message += `${guessedNums[i]} `;
        }
    }
    
    document.getElementById("result").innerHTML = message;
}

// |FUNCTIONS|
// Restituisce un numero intero casuale tra 'min' e 'max'
function getRandomInt(min, max) {
    return Math.floor(Math.random() * max) + min;
}

function generateNumbers(n) {
    const numbers = [];

    for (let i = 0; i < n; i++) {
        numbers.push(getRandomInt(1, 100));
    }

    return numbers;
}

// nasconde i numeri generati
function hideNumbers() {
    numsDisplay.classList.add('hidden');
}