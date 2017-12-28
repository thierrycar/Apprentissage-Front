/*-----------------------------------------------------------------------------------------------------

                               LES BOUCLES

-------------------------------------------------------------------------------------------------------*/

//-- La boucle FOR
//-- Pour i=1; tant que i <= strictement inferieur ou egal à 10; alors j'incrément i de 1.
for(let i = 1; i<= 10; i++){
    document.write('<p>Instruction executée: <strong>' + i +'</strong></p>');
}

//-- La boucle while

document.write('<hr>');

var j=1;
while(j<=10){
    document.write('<p>Instruction executée: <strong>' + j +'</strong></p>');

    //-- ATTENTION A NE PAS OUBLIER L'INCREMENTATION !
    j++;
}


/*----------------------------------------------------------------------------
                               EXERCICE
*/
//-- Supposons le tableau suivant :

var Prenoms =[ 'Jean', 'Marc', 'Matthieu', 'Luc', 'Pierre', 'Paul', 'Hugo'];

/* -- CONSIGNE : Grace à la boucle FOR, affichez la liste des prénoms du 
tableau suivant dans la console ou sur votre page.*/
for (let i = 0; i < 7; i++){
    console.log(Prenoms[i]);
}

console.log('----------')

for (let i = 0; i < Prenoms.length; i++){ // plus rapide si on affecte Prenoms.lenght à une variable
    console.log(Prenoms[i]);
}

console.log('-----------------')

var j=0;
while(j<Prenoms.length){
    console.log(Prenoms[j]);
    j++
}

console.log('--------------');
//-- Meme exercice avce la boucle ForEach
//-- Attetion à la performance !!!

Prenoms.forEach(affichePrenoms);

function affichePrenoms(prenom, indice){
    console.log(prenom);
}