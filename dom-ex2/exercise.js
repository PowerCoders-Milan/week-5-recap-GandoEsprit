/**
 * Chiedere un password all'utilizatore
 * Si il password dell'utilizatore è coretto, eliminare la class transparent e creare una nuova class green e fare vedere la password
 * 
 * Creare una variabile pTag che contiene il tag p
 * Fare una condizione per controllare la password
 * Si la password dell'utilizatore è giusto, eliminare la class transparent con la proprietà remove e creare ila class green con add
 * Doppo fare vedere il contenuto di p
 */
var password = prompt('Put the password');
 var pTag = document.querySelector('p');

 if(password === 'gando'){
     pTag.classList.remove('transparent')
     pTag.classList.add('green');
 }