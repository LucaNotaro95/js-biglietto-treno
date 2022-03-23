
let età;
let km;

eta = parseInt(prompt("Quanti anni hai?"));
km = parseInt(prompt("Quanti chilometri? "));



let prezzofinale;

let prezzokm = 0.21*km;
 if(eta >= 1 && eta < 18){
    prezzofinale = Math.round((prezzokm - prezzokm * 0.2 + Number.EPSILON) * 100) / 100;
    document.getElementById("prezzo").innerHTML="sconto 20%, costo biglietto: " + prezzofinale + "euro";
    console.log(prezzofinale);
} else if(eta > 65){
    prezzofinale = Math.round((prezzokm - prezzokm * 0.4 + Number.EPSILON) * 100) / 100;
    document.getElementById("prezzo").innerHTML="sconto 40%, costo biglietto:  " + prezzofinale + "euro";
} else{
    prezzofinale = prezzokm;
   
    document.getElementById("prezzo").innerHTML="costo:  " + prezzofinale + "euro";

}