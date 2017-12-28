/*-----------------------------------------------------------------------------------------------
                                     ~LES EVENEMENTS ~


    Les évènements vont me permettre de déclencher une fonction cad une série d'instructions 
    suite à une action de mon utilisateur.


    OBJECTIF : Etre en mesure de capturer ces évènements afin d'executer une fonction.

    Les Evenements : Mouse (souris)
        click      : au clic sur un élément
        mouseenter : la souris passe au dessus de la zone qu'occupe un élément
        mouseleave : la souris sort de cette zone

    Les Evenements : keybooard(clavier)

        keydown    : une touche du clavier est enfoncée
        keyup      : une touche du clavier a été relachée.

    Les Evenements : WINDOW (fenetre)

        scroll     : défilement de la fenêtre
        resize     : redimensionnement de la fenetre

    Les Evenements : FORM (Formulaire)

        change : pour les éléments <input>, <select>, et <textarea>
        submit : à l'envoi (soumission) du formulaire
        input : pour capter la saisie d'un utilisateur sur un champ <input>

##########################LES ECOUTEURS D'EVENEME

    Pour attacher un evenement à un élément, ou autrement dit pour déclarer 
    un écouteur d'événement qui se chargera de déclencher une fonction, je 
    vais utiliser la syntaxe suivante :
    */

    var p = document.getElementById("MonParagraphe");

    //-- Je souhaite que mon paragraphe soit rouge au clic de la souris

    // 1 - Je définie une fonctionchargée d'executer cette action :

    function ChangeColorToRed(){
        p.style.color = "red";
    }

    p.addEventListener('click', ChangeColorToRed);

    /*----------------------------------------------------------
                    EXERCICE PRATIQUE
    A l'aide de javascript, creez un champ "input" type text avec un ID unique.
     Affichez ensuite dans une alerte,la saisie de l'utilisateur.

     --------------------------------------------------------------------*/
    // création du champ "input"
     var input = document.createElement("input");
    
    // Attribution d'un attribut
    input.setAttribute('type','text');
    input.setAttribute('placeholder', 'Saisissez un contenu...');

    // Attribution d'un ID
    input.id = "MonInput";

    // Ajout de l'élément dans ma page
    document.body.appendChild(input);

    //   ------------------------------------------------------------

    function voirLaSaisieDeMonInput(){
        alert(input.value);
    }

    input.addEventListener('change', voirLaSaisieDeMonInput);

    
    