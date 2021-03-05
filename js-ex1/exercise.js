/**
 * Creare una funzione che prende un array in parametro
 * La funzione permetterà di conoscere la lunghezza dell'aray
 * E di sapere quanti numeri e quanti caratteri si sono 
 * 
 * Creare un funzione arryLength
 * Creare una variabile che contine la lunghezza dell'array
 * Fare un loop dell'array e d'intro il loop fare un controllo per sapere se il valore attuale dell'array è un carattere o numero
 */

 function arrayLenth(array){
     var longArray = array.length;

     var numberArray = 0;
     var caracterArray = 0;

     array.forEach(element => {
         if(typeof element === 'number'){
             numberArray++;
         }else{
             caracterArray++;
         }
     });

     console.log('the lenght of the array is: ' + array.length);
     console.log('They are in the array ' + numberArray + ' number');
     console.log('They are in the array ' + caracterArray + ' caracter');
 }

 var array = [1, 'a', 'b', 4, 'v', 'i', 'p', 9, 7];

 var array1 = [1, 'a', 'b', 4, 'v', 'i', 'p', 9, 7, 'e', 'b', 10];

 arrayLenth(array);
 arrayLenth(array1);