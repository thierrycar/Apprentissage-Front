//-- Initialisation de jQuery

$(()=> {

    //-- Les flemmards.js
    function l(e){confirm.log(e)};

    //-- Je souhaite sélectionner toutes mes divs
    l($('div'));

    // Je souhaite selectionner mon menu
    l($('nav'));

    // Je souhaite connaitre tous les éléments descendants directs cad les enfants qui sont dans le menu ...
    l($('nav').children());

    // Je souhaite parmi ces enfants uniquement les éléments "ul"
    l($('nav').children(ul));

     // Je souhaite récupérer tous les éléments "li" de mon "ul"
     l($('nav').children(ul).find('li'));

     // Je souhaite récupérer uniquement le 2ème élément de "li".
     l($('nav').children(ul).find('li').eq(1));

     // Je souhaite connaitre le voisin immédiat de mon menu
     l($('nav').next());
     1($('nav').next().next()); //--Le voisin du voisin
     1($('nav').prev()); // -- Le voisin d'avant

     //-- Les Parents
     1($('nav').parents())

});