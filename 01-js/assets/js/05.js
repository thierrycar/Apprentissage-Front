/* -------------------------------------------------------------------
     INCREMENTATION T DECREMENTATION

--------------------------------------------------------------------*/

// Incrémentation//

var nb1 = 1;
nb1 = nb1 + 1;

console.log(nb1);

// -- Ecriture simplifiée
nb1++; // raccourci de nb1 +  -> Par pas de 1

// Affichage dans la console
console.log(nb1);


// Décrémentation

nb1=nb1 - 1;

nb1--;

console.log(nb1);

// Subtilité
nb1 = 0;
console.log("nb1++= "+nb1++);
nb1 = 0
console.log("++nb1 = " + ++nb1);
