// L’utente sceglie pari o dispari
var domanda = prompt("Scegli pari o dispari");
// e inserisce un numero da 1 a 5.
var numeroUtente = Number(prompt("Inserisci un numero da 1 a 5"));
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function numberRandom(min, max){
  random =  Math.floor(Math.random() * (max + 1 + min)) + min;
  return random;
}
var computer = numberRandom(1, 5);
console.log(computer);

// Sommiamo i due numeri
var sum = numeroUtente + computer;
console.log(sum);

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
var risposta;

function isEvenOrOdd (sum){
  if(sum % 2 == 0 && domanda === "pari"){
  risposta = "Pari, quindi hai vinto"
  } else if (sum % 2 !== 0 && domanda === "dispari") {
    risposta = "Dispari, quindi hai vinto"
  } else if (sum % 2 !== 0 && domanda === "pari") {
    risposta = "Dispari, quindi hai perso"
  } else if (sum % 2 == 0 && domanda === "dispari") {
    risposta = "Pari, quindi hai perso"
  }
  return risposta;
}
// Dichiariamo chi ha vinto.
var risultato = isEvenOrOdd (sum);
console.log(risultato);
