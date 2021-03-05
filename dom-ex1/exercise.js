/**
 * Creare una funzione quando si clicca nel buttone, prendere il texte all'interno delle campo e creare un elemente p
 * dove mettiamo il text che contiene il campo per farlo vedere allo schermo
 *      
 * Creare una variabile button che contiene l'elemento button
 * Creare una variabile input che contiene l'elemento input
 * creare una funzione clickButton che crea un elemento p e all'interno di questo elemento mettere il valore della variabile input
 * e aggiungerlo al body
 * creare un evento click alla variabile button che riceve l'evento click e la funzione come parametro 
 */
var button = document.querySelector('button');

var input = document.querySelector('input');

function clickButton(){
    var pTag = document.createElement('p');
    pTag.appendChild(document.createTextNode(input.value));
    document.body.appendChild(pTag);
}

button.addEventListener('click', clickButton)