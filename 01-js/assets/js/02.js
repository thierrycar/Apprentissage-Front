 // -- Déclarer un Tableau Indexé
 var monTableau = [];
 var myArray    = new Array;

 // -- Affecter des valeurs à un tableau indexé
 monTableau[0] = "Marie-Pierre";
 monTableau[1] = "Hugo";
 monTableau[2] = "Hamid";

 // -- Afficher le contenu de mon tableau dans la console.
 console.log(monTableau[1]); // -- Hugo
 console.log(monTableau[2]); // Hamid
 console.log(monTableau); // -- Afficher toutes les données

// -- Déclarer et affecter des valeurs à un tableayu indexé
var NosPrenoms = ["Marie-Pierre", "Thomas", "Olivier", "Chloe", "Riad", "Hugo"];
console.log(NosPrenoms);

// -- Déclarer et affecter des valeurs à un Objet
// PAS DE TABLEAU ASSOCIATIF EN JS !!!!!!!!

var Coordonnees = {
    prenom : "Hugo",
    nom    : "LIEGARD", 
    age    : 28
};

console.log(Coordonnees);
console.log(typeof Coordonnees);

// -- Je vais creer 2 tableaux indexés
var listeDePrenoms = ["Hugo", "Marie-Pierre", "Lounis", "Romain"];
var listeDeNoms = ["LIEGEARD", "DUPOUX", "DGADEN", "ELIE"];

//-- Je vais creer un tableau à 32 dimensuions à partir de mes 2 tableaux précédents.
var Annuaire = [listeDePrenoms, listeDeNoms];
console.log(Annuaire);

// -- Hugo LIEGARD
console.log(Annuaire[0][0]);
console.log(Annuaire[1][0]);

// Creez un tableau à 2 dimensipon

var AnnuaireDesStagiaires = [
    { prenom:"Florian", nom : "BOUTEILLE", tel : "06010101"},
    { prenom:"Thierry", nom : "BOUTEILLE", tel : "06010102"},
    { prenom:"Romain", nom : "ELIE", tel : "06010103"}
];

console.log(AnnuaireDesStagiaires);
console.log(AnnuaireDesStagiaires[1]);
console.log(AnnuaireDesStagiaires[1]['prenom']);
console.log(AnnuaireDesStagiaires[1].prenom);


// -- Exemple

// -- Exemple de Tableau 3D

var Contacts = [

    {
        prenom      : "Hugo",
        nom         : "LIEGEARD",
        coordonnees : {
                        email   : "wf3@hl-media.fr",
                        adresse : {
                                    ville   : "Ducos",
                                    cp      : 97224,
                                    region  : "Martinique",
                                    pays    : "France"
                                  },
                        tel     : {
                                    fixe    : "0596 108 328",
                                    fax     : "0596 108 632",
                                    port    : "0783 97 15 15"
                                  }
                      }
    },
    {
        prenom      : "Rodrigue",
        nom         : "NOUEL",
        coordonnees : {
                        email   : "wellcommunication.net@gmail.com",
                        adresse : {
                                    ville   : "Fort-de-France",
                                    cp      : 97200,
                                    region  : "Martinique",
                                    pays    : "France"
                                  },
                        tel     : {
                                    fixe    : "0596 XXX XXX",
                                    fax     : "0596 XX XX XX",
                                    port    : "0696 07 04 34"
                                  }
                      }
    }

];

console.log(Contacts);
console.log(Contacts[0].coordonnees.tel.port);
console.log(Contacts[1].coordonnees.tel.port);


/*------------------------------------------------------------------------
                         Ajouter un Element dans un tableau
-------------------------------------------------------------------------*/

var Couleurs =["Rouge", "Jaune", "Vert"];

// Je souhaite ajouter un élément dans mon tableau
/* Je fais appel à la fonction push() qui me renvoie le nombre d'éléments 
de mon tableau que je peux récupérer facultativement dans une variable.*/

console.log(Couleurs);
var nombreElementsDeMonTableau = Couleurs.push("Orange");
console.log(Couleurs);
console.log(nombreElementsDeMonTableau);

/**
 * NB : la fonction unshift()permet d'ajouter un ou plusieurs éléments au début du tableau
 */

 
 /*------------------------------------------------------------------------

                   RECUPERER ET SORTIR LE DERNIER ELEMENT
---------------------------------------------------------------------------*/

/**
 * La fonction pop() me permet de supprimer le dernier éllment de mon tableau
 * et d'en récupérer la valeur.
 * la même chose est possible avec le premier élément  avec la fonction shift().
 * 
 * nb /La fonction splice() vous permet de faire sortir un ou plusieurs éléments 
 * de notre tableau.
 */

var monDernierElement = Couleurs.pop();
console.log(monDernierElement);
console.log(Couleurs);