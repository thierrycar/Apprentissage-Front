/*--
Votre mission, que vous devez accepter !
Réaliser une fonction permettant à un internaute de :
-Saisir son prénom dans un Prompt
-Retourner à l'Utilisateur : Bonjour [Prenom], Quel age as-tu?
-Saisir son Age
-Retourner à l'utilisateur : Tu es donc né en [Année de naissance]
Afficher un récapitulatif dans la page : Bonjour [Prenom], tu as [age] !
*/

/*function  qui(prenom, age){
var laDate = new Date();
var prenom = prompt("comment t'appelles-tu?");
 return: "Bonjour" + prenom + ", "
var age = prompt("Quel age as-tu ?"); 
 return: "tu es donc né en" + laDate.getUTCFullYear -age +"."

}

qui(prenom,age)
document.write("Bonjour" + qui)*/

// 1. Initialisation des variables
var dateObj       = new Date();
var anneeActuelle = dateObj.getFullYear()

// 2. Création d'une fonction
function Hello(){

    // 2a. Je demande à l'utilisateur son prénom
    let prenom = prompt("Hello ! What is your name ?", "<Saisir votre prénom>")
    // let est un mot clé syn de var qui permet de réduire la portée de la variable
    // 2b. Je lui demande son age
    let age = parseInt( prompt("Hello " + prenom + "! How old are you ?", "<Saisir votre age>"));
    // 2c. Déduire l'année de naissance, et l'afficher dans une alerte
    alert("Tu es donc né en " + (anneeActuelle - age) +"!");
    // 2d. J'affiche tout ça dans la page (Récapitulatif)
    document.write("Hello " + prenom + "! Tu as " + age + " ans.")
}
   

// 3 . Execution de ma fonction
Hello();

