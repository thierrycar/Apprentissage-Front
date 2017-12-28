/*---------------------------------------------------------------

Les Conditions

-------------------------------------------------------------------*/

/*var MajoritelegaleFR = 18;

if(14 <= MajoritelegaleFR){
    alert('Bienvenue !');
}
// -- Le else n'est pas obligatoire
else {
    alert('Google')
}

/* -----
exercice
Creer une fonction permettant de vérifier l'age d'un visiteur (prompt).
S'il a la majorité légale, alors on lui souhaite la bienvenue, sinon redirectionsur google après lui avoir signelé le souci.
----*/

// -- 1. Déclarer la majorité légale
/*var MajoritelegaleFR = 18;

// -- Creer une fonction pour vérifier 

/**
 * Si l'agede l'utilisateur passé en paramètre est superieur ou égal à la majorité légale alors la fonction retourne vrai sinon, elle retourne faux
 * @param{Int} age
 * @return {boolean}
 */

/*function verifierAge(age){
    if(age >= MajoritelegaleFR){
        return true;

    }else{
        return false;
    }
}

// --3 Je demande l'age
var age = parseInt (prompt("Bonjour, quel age avez-vous", "age"));

// --4. Vérification de l'age
if (verifierAge)(age){
    alert("Bienvenue sur mon site reservé aux majeurs");
    document.write('080 !!!')

}else{
    document.location.href = "http://fr.lmtfy.com/?q=Majorit%C3ùA9+L%C3%A9gale+en+France";
}









function test(){
var age =parseInt (prompt("Bonjour, quel age avez-vous", "age"));
    if (age >= MajoritelegaleFR){
        alert("Bienvenue");
    } else{
            alert("Oups, vous êtes trop jeune. ")
            document.location.href="https://www.google.fr"
        }
}


test()

/*-----------------------------------------------------------------
             Les Operateurs de Comparaison

   L'opérateur de comparaison "==" signifie : égal à. 
   Il permet de vérifier que 2 valeurs sont identiques.

   L'opérateur de comparaison "===" signifie : strictement Egal 0. 
   Il va comparer la valeur et le type de donnée.

L'opérateur de comparaison" != " signifie Différent de.

L'opérateur de comparaisonn " !== " signifie Strictement différent de
--------------------------------------------------------------------*/

/*-------------------------------------------
                    Exercice

J'arrive sur un Espace Securise au moyen d'un email et d'un mot de passe.
Je dois saisir mon email et mon mot de passe afin d'être authentifié sur le site.

en cas d'echec une alerte m'informe du problème.
Si tout se passe bien, un méssage de bienvenue m'accueille.
-----------------------------------------------------------------------------*/

// -- Base de Données

var email, mdp;

email = "wf3@hl-media.fr";
mdp = "wf3";

/*
// Sans les fonctions

// -- 1. Demander à l'utilisateur son email
var emailUser = prompt("Bonjour, quel est votre email ?", "<Saisissez votre email>");

// --é. Je vérifie si l'email saisi correspond aà celui de la bdd
if(emailUser == email){
   // 2.atout est ok, je continue la vérification avec le mdp
   // 2a1 je demande mdp
   var mdpUser = prompt("votre mot de passe?", "saisissez votre mot de passe");

   if(mdpUser === mdp){
       alert("Bienvenue !");
   }else{
       alert("pas reconnu mdp");

   }
   
}else
    alert("Nous n'avons pas reconnu votre adresse email");
}

// -- . Demander à l'utilisateur son mot de passe



function verifie();
var mail= prompt("entrez votre email");
var mot = prompt("entrez votre mdp");
if mail == email && mot == mdp{
    alert("Bienvenue");
}else{
    alert("pas authentifié");
}

verifie();
*/

//Avec fonction


function monUtilisateurEstCorrect(emailUser,mdpUser){
    if(emailUser === email && mdpUser === mdp){
        return true;

    }else{
        return false
    }
}


var emailUser = prompt("Bonjour, quel est votre email ?", "<Saisissez votre email>");
var mdpUser = prompt("votre mot de passe?", "Saisissez votre mot de passe");

if(monUtilisateurEstCorrect(emailUser, mdpUser)){
    alert("Bienvenue" + emailUser);
}else{
    alert("Attention, email/mot de passe incorrect");
}


/*-------------------------------------------------------------------------------------------------------

                          LES OPERATEURS LOGIQUES

    L'opérateur ET : && ou AND
    Si la combinaison emailUser et email correspond ET la combinaisson mdpUser et mdp correspond.
    --> Dans cette condition les 2 doivent OBLIGATOIREMENT correspondre pour être validée.
    Ex. if(emailUser == email && mdpUser == mdp) {...}
    
    L'opérateur OU : || ou OR
    Si la combinaison emailUser et email correspond ET/OU la combinaisson mdpUser et mdp correspond.
     --> Dans cette condition, au moins une des 2 doit correspondre pour être validée.
    Ex. if(emailUser == email || mdpUser == mdp) {...}

     L'opérateur Contraire de  : ! ou NOT
     L'opérateur "!" signifie le CONTRAIRE DE ... OU NOT
     var monUtilisateurEstApprouve = true;
     if(!monUtilisateurEstApprouve){...} : Si mon utilisateur n'est pas approuvé
     Reviens à écrire:
     if(monUtilisateurEstApprouve == false){...}

------------------------------------------------------------------------------------------------------------*/