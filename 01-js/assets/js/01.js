// alert('wow tu es sur ma page!');

// Deux slash por faire un commentaire uniligne.

/* Ici je peux faire un commentaire 
sur plusieurs ligne...

Raccourci : CTRL + /
ou CTRl + shift + /
*/

// -- 1. Déclarer une variable en JS

var Prenom;

// -- 2. Affecter une valeur
Prenom = "Marie-Pierre";

//-- . Afficher la variable de ma variable dans la console du navigateur.
console.log(Prenom);

 /*------------------------------------------------------------------------------
 |                 LES TYPES DE VARIABLES                                        |
 -------------------------------------------------------------------------------*/
    //-- "typeof " me permet de connaitre le type de ma variable
 
 console.log(typeof Prenom);

    //-- Declaration et affectation d'une valeur à une variable
var Age = 22;

//-- Afficher dans la console
console.log(Age);

//-- Vérifier son type
console.log(typeof Age);

/*---------------------------------------------------------------------------------------
|LA PORTEE DES VARIABLES   
|
Les variables déclarées directement à la racine du fichier sont appelées VARIABLES 
GLOBALES "GLOBAL".
 Elles sont disponibles dans l'ensemble de votre document, y compris dans les
  fonctions/boucles.

  La portée des variables GLOBALES s'arrêtent au fichier. Si je change de page, 
  les variables n'existent plus.

  Les variables déclarées à l'intérieur d'une fonction sont appelées VARIABLES LOCALES.
  Elles sont disponibles uniquement à l'intérieur de celles-ci.
                                                              |
----------------------------------------------------------------------------------------*/

//-- Les variables de type FLOAT

var uneDecimale = -2.984;
console.log(uneDecimale);
console.log(typeof uneDecimale);

//-- Les Booléens (VRAI/FAUX)

var unBooleen;
console.log(unBooleen);
console.log(typeof unBooleen);

/*---------------------------------------------------------------------------------------
|               LES CONSTANTES

La déclaration CONST permet de creer une constante accessible UNIQUEMENT en lecture.
Sa valeur ne pourra pas être modifiée par des réaffectations ultérieures.
Une constante ne peut êtrre déclarée à nouveau.
Géneralement par convention, les constantes sont en MAJUSCULES;

----------------------------------------------------------------------------------------*/

const HOST = "localhost";
const USER = "root";
const PASW = "mysql";

// Je ne peux pas faire cela:
// USER = "127.0.0.1";
//TypeError : Assignment to constant variable.


/*---------------------------------------------------------------------------------------
|               la minute info

Au fur et à mesure que l'on affecte ou ré-affecte des valeurs à une variable, celle-ci 
prend la nouvelle valeur et le nouveau type.
En Javascript (ECMA Script- ES), les variables sont aurto-typées.
Pour convertir une variable de type NUMBER en STRING et STRING en NUMBER, je peux 
utiliser les fonctions natives de Javascript.
----------------------------------------------------------------------------------------*/

console.log('---');

var unNombre ="24";
console.log(unNombre);
console.log(typeof unNombre);

// la fonction parseint()permet de retourner un ENTIER à partir d'un STRING.

unNombre = parseInt(unNombre);
console.log(unNombre);
console.log(typeof unNombre);

// -- Je reaffecte une valeur à ma variable
var unNombre ="12.55";
console.log(unNombre);
console.log(typeof unNombre);

//--La fonction parseFloat() permet de retourner un float à aprtir d'un string.
unNombre = parseFloat(unNombre);
console.log(unNombre);
console.log(typeof unNombre);

//-- Conversion d'un nombre en String avec toString()
var unNombreQuiDevientString = 10;
console.log(typeof unNombreQuiDevientString);
console.log(typeof unNombreQuiDevientString.toString);


