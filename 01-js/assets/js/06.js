/*------------------------------------------------------------------------

        LES FONCTIONS

----------------------------------------------------------------------------*/


// -- Déclarer une fonction
// -- Cette fonction ne retourne aucyune valeur

function ditBonjour(){
/**
 * * Lors de l'appel de cette fonction, les instructions ci-dessous seront executées ...
 */

 alert("Bonjour!");
}
/**
 * Je vais appeler ma fonction "ditBonjour" et déclacher se instructions.
 */
 ditBonjour();

 // -- Déclarer une fonction qui prend une variable en paramètre
 function Bonjour(Prenom, Nom){
     document.write("<p>Bonjour<strong>" + Prenom + " " + Nom + "</strong> ! <p>");

     

 }
 // Appeler / Utiliser une fonction avec des paramètrds
Bonjour('Thierry','Caron');

/**Exercice
 * Fonction permettant l'additionde 2 nombres passés en paarmètre
 */ 
 
 function addition(nb1, nb2){
     return nb1 + nb2;
 }

 document.write("<p>" + addition(4, 5) + "<p>");
