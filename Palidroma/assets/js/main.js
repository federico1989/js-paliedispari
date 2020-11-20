// Chiedere all’utente di inserire una parola
var parola = prompt("Inserisci la parola");

// Creare una funzione per capire se la parola inserita è palindroma
function palindroma(parola) {
  var parola1 = parola;
  var parola2 = parola.split("").reverse().join("");
  if (parola1 == parola2){
    return true;
  } else {
    return false;
  }

}
var soluzione = palindroma(parola);
if (soluzione) {
  console.log("La tua parola è palindroma");
}else {
  console.log("La tua parola non è palindroma");
}
