/**
 * Creare tre funzione uno per cambiare il backgroundColor, uno per cambiare il colore del testo e un altro per il backgroundColor del buttone
 * Chiamera questi funzioni nel momento del click e del passaggio del mouse sopra il buttone
 * 
 * Creare una varibile ptag che recuperara il p tag 
 * crare una variabile button che recupera il buttone
 * Creare una funzione buttonClickBackgroun e d'intro questa cambiare il bacgroundColore della variabile pTag
 * Creare un'altra funzione buttonClickColor e d'intro cambiare il colore del testo della variabile pTag
 * Creare un'altra funzione buttonOver e che cambia il colore della variabile button
 * 
 */

var pTag = document.querySelector('p');
var button = document.querySelector('button')

function buttonClickBackgroun(){
    pTag.style.backgroundColor = 'red';
}

function buttonClickColor(){
    pTag.style.color = 'white';
}

function buttonOver(){
    button.style.backgroundColor = 'blue';
}

button.addEventListener('click', buttonClickBackgroun);
button.addEventListener('click', buttonClickColor);
button.addEventListener('mouseover', buttonOver);