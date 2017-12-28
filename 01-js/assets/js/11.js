/*---------------------------------------------------------------------------------------------

                               LE DOM

----------------------------------------------------------------------------------------------*/
/*Le DOM est une interface de développement en Js pour HTML. Grâce au DOM, je vais être 
en mesure d'acceder / Modifier mon HTML.

L'Objet "document" : c'est le point d'entrée vers mon contenu html.

Chaque page chargée dans mon navigateur à un objet "document". 

// -- Comment puis-je faire pour récupérer les différentes informations de ma page HTML ?

/* ~~~~~~~~~~~~~document.getElementById~~~~~~~~~~~~~~~~~~~~~~~~~~~~

document.getElementById() : c'est une fonction qui va permettre de récupérer un éélment HTML à partir de son identifiant unique : ID


*/

var bonjour = document.getElementById('bonjour');
console.log(bonjour);

/* ~~~~~~~~~~~~~document.getElementByClassName~~~~~~~~~~~~~~~~~~~~~~~~~~~~

document.getElementByClassName() : c'est une fonction qui va permettre de récupérer un ou plusieurs éléments (une liste) HTML à partir de leur classe.


*/
var contenu = document.getElementsByClassName('contenu');
console.log(contenu);

//-- Me renvoi un tableau JS avec mes éléments HTML, ou encore autrement dit, une "Collection" d'éléments HTML.

/* ~~~~~~~~~~~~~document.getElementByTagName~~~~~~~~~~~~~~~~~~~~~~~~~~~~

document.getElementByTagName() : c'est une fonction qui va permettre de récupérer un ou plusieurs éléments (une liste) HTML à partir de leur * nom de balise *.

*/
var span = document.getElementsByTagName("span");
console.log(span);