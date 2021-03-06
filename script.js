// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere (creare quindi una lista di utenti autorizzati),
// stampa un messaggio appropriato sull’esito del controllo.

// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che “cosa” ci serve?

// Consigli del giorno:
// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
// 3. si ma noi cosa vogliamo fare?
// 4. torniamo a scrivere in italiano
// 5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo “a mano”

// email

const utentiAuto = ["prova","chiarag295@gmail.com", "pincopanco81@gmai.com", "pancopinco82@gmail.com"];

const verificaMail = prompt("Verifica la tua mail");

let emailAutorizzata = false;

for(let i = 0; i < verificaMail.length; i++){
  
  if (verificaMail === utentiAuto[i]) {

    emailAutorizzata = true;
  }
 
}  

if (emailAutorizzata === true) {
  
  console.log("Ciao! Lancia i dadi per giocare");
  
  document.getElementById("messMail").innerHTML =
  "Ciao! Lancia i dadi per giocare";
  
  }else{
  
  console.log("Non sei autorizzato a giocare");
  
  document.getElementById("messMail").innerHTML =
  "Non sei autorizzato a giocare";

}


// Dadi
const btnDadi = document.querySelector('#Dadi');

if( emailAutorizzata === true){
  
  btnDadi.addEventListener("click", function(){
    
    let randomUser = Math.ceil(Math.random()*6);
    let randomPc = Math.ceil(Math.random()*6);
    
    console.log(randomUser);
    console.log(randomPc);
    
    document.getElementById('random-user').innerHTML = randomUser;
    
    document.getElementById('random-pc').innerHTML = randomPc;
    
  }
  
  if (randomUser > randomPc){
    
    document.getElementById('esito-partita').innerHTML = ("Hai vinto!");
    
  } else if (randomPc > randomUser){
    
    document.getElementById('esito-partita').innerHTML = ("Hai perso :(");
    
  } else {
    
    document.getElementById('esito-partita').innerHTML = ("Parità");
  }

}
