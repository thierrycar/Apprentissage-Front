/*
 I. Créer un Tableau 3D "PremierTrimestre" contenant la moyenne d'un étudiant pour plusieurs matières.

    Nous auront donc pour un étudiant, sa moyenne à plusieurs matières.
    
    Par exemple : Hugo LIEGEARD : [ Francais : 12, Math : 19, Physique 4], ... etc
    
    **** Vous allez créez au minimum 5 étudiants ****

II. Afficher sur la page (à l'aide de document.write) pour chaque étudiant, la liste (ul et li) de sa moyenne à chaque matière, puis sa moyenne générale. 
*/

var PremierTrimestre = [
    
    { 
            nom      : "LIEGEARD",
            prenom   : "Hugo",
            moyenne  : {
                        Français : 12,
                        Math     : 19,
                        Physique : 4 

            },  

    },
    { 
            nom      : "CARON", 
            prenom   : "Thierry",
            moyenne :{
                        Français : 14,
                        Math     : 12,
                        Physique : 10

            },  

    },

    { 
            nom       : " DURAND",
            prenom    : "Paul",
            moyenne   :{
                        Français  : 12,
                        Anglais   : 12,
                        Espagnol : 9 

            },
    },  


    { 
            nom      : "MARTIN", 
            prenom   : "Stephane ",
            moyenne :{
                        Français : 12,
                        Philo     : 13,
                        Anglais : 10 

            }, 
    },
    { 
            nom      : "DUPONT", 
            prenom   : "Marie",
            moyenne :{
                        Français : 12,
                        Anglais  : 15,
                        Histoire : 10 
    
        } 
}
];

/*console.log(PremierTrimestre[0].moyenne)

for(let i = 0; i< PremierTrimestre.length; i++){
document.write(PremierTrimestre[i].prenom + " "+ PremierTrimestre[i].nom + "");
    for ( id in PremierTrimestre[i].moyenne){
    document.write(" " + id + " : " + PremierTrimestre[i].moyenne[id]);
        for( j=o, j < )
    j = j +  PremierTrimestre[i].moyenne[id]  
    }
    

}*/

// -- lesFlemards.js

function w(ceciEstUnParametreDeMaFonction) {
    document.write(ceciEstUnParametreDeMaFonction);
}

function l(e){
    console.log(e);
}

l(PremierTrimestre);


w('<ol>');
// -- Je souhaite afficher la liste de mes étudiants.
for(let i = 0 ; i < PremierTrimestre.length ; i++) {
    // On récupère l'objet étudiant de l'itération
    let Etudiant = PremierTrimestre[i];
    
    // aperçu dansla console
    l(Etudiant);

    // -- Ici, mes variables seront remises à 0 à chaque nouvel etudiant (itération)
    var NombreDeMatiere = 0, SommeDesNotes = 0;

    //Afficher le prénom et le nom d'un étudiant
    w('<li>');
        w(Etudiant.prenom + ' ' + Etudiant.nom );
        // -- Afficher la moyenne de l'étudiant aux différentes matières
        w('<ul>');
            for( let matiere in Etudiant.moyenne){
                l(matiere);
                l(Etudiant.moyenne[matiere]);

                NombreDeMatiere++;
                SommeDesNotes += Etudiant.moyenne[matiere];

                w('<li>');
                    w(matiere + ' : ' +Etudiant.moyenne[matiere]);
                w('</li>')
        }// -- Fin de la Boucle Matiere
        w('<li>');
            w('<strong>Moyenne Generale: </strong>' + ( SommeDesNotes / NombreDeMatiere ).toFixed(2) );
        w('</li>')
        w('</ul>');
    w('</li>');
}// -- Fin de la Boucle Etudiant
w('</ol>');