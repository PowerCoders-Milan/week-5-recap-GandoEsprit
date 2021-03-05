/**
 * Concatenare i due array e creare un ogetto che ha comme proprietà i valori string dell'array e come valore della proprietà i valori number dell'array
 * Imprimare l'ogetto nello schermo
 * 
 * Creare ogetto score vuoto
 * Creare una funzione arrayConcat che ha come parametro due array
 * Nella funzione creare una variabile array che concatena i due array
 * Creare due variabile arrayString e arrayNumber che contiene i valori string e interi della variabile array
 * Fare un loop nella variabile arrayString d'intro il quale agiungiamo le proprietà e i valori dell'ogetto score
 */
var array1 = ['marco', 'antonio', 'luca', 13, 18, 'leo', 'mary']
var array2 = [21, 19, 12, 'sebastian', 'will', 23, 20]

var score = {};

function arrayConcat(arrayA, arrayB){
    var array = arrayA.concat(arrayB);

    var arrayString = array.filter(element => typeof element === 'string');
    var arrayNumber = array.filter(element => typeof element === 'number');

    for(var i = 0; i < arrayString.length; i++){
        Object.defineProperty(score, `${arrayString[i]}`,{
            value: arrayNumber[i],
            enumerable: true,

        });
    }
    

}

arrayConcat(array1, array2);
console.log(score);