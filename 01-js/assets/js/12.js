/* ---------------------------------------------------------------
                 La manipulation des contenus

 */

 function l(e){
     console.log(e);
 }

// -- Je souhaite récupérer mon lien, comment procéder ?
 var google =  document.getElementById('google');
 l(google)

 // Maintenat je souhaite acceser aux informations de ce lien ...

 // -- A : le lien vers lequel pointe la balise
 l(google.href)

 // -- B L'ID de la balise
 l(google.id)

 // -- la classe de la balise
 l(google.className)

 //-- D : Le texte de la balise
 l(google.textContent)

// Maintenant, je souhaite modifier le texte de la balise*
// comme une variable classique, je vais simplement venir affecter une nouvelle valeur
google.textContent = "Mon lien vers Google!"


/*----------------------------------------------------------------------------------

AJOUTER UN ELEMENT DANS AM PAGE

-------------------------------------------------------------------------------------------------*/

/**
 * Nous allons utiliser 2 méthodes:
 * 1 - La fonction document.create() va permettre de générer un nouvel élément 
 * dans le DOM; que je pourrai par la suite modifier avec les méthodes que nous 
 * venons de voir.
 * PS: Ce nouvel élément est placé en mémoire.
 -------------------------------------------------------------------------------------------------*/

 var span = document.createElement('span');

 // -- Si je souhaite lui donner un ID
 span.id = "MonSpan";

 // -- Si je souhaite lui attribuer du contenu ...
 span.textContent = "Mon beau texte en JS";

 // -- Comment ajouter l'élément dans la page ?
 // la fonction appendChild() va permettre de rajouter un enfant à un élément du DOM
 google.appendChild(span)

/*----------------------------------------------------------------------------------------------------
                      EXERCICE

 En partant du travail déjà réalisé SUR LA PAGE.
 Créez directement dans la page une balise <h1></h1> ayant comme contenu : "Titre de lmon article" .

 Dans cette balise, vous creerez un lien vers une url de votre choix.
 BONUS : Ce lien sera de couleur rouge et non souligné?

 -----------------------------------------------------------------------------------------------------*/

 // -- Création de la balise h1 + lien dans la balise
 var h1 = document.createElement('h1');
 var a = document.createElement('a');

 //-- Titre de mon article
 a.textContent = "Titre de mon article";

 // -- je veeux donner un lien à mon lien
 a.href = "#";

 // -- appendChild()

        // -- Je met mon lien (a) dans mon h1
        h1.appendChild(a);

        // -- Je met mon h1 dans ma page, dans mon body
        document.body.appendChild(h1);

// correction du bonnus

   // je veux que mon lien soit rouge
   a.style.color = "red";

   // 
   a.style.textDecoration = "none";
 
 