/*----------------------------------------------
Les selecteurs Jquery
------------------------------------------------*/

//-- Format : $('selecteur')
//-- En jQuery, tousles selecteurs css sont disponibles...

$(function() {


    function l(e) {
        console.log(e);
    }

    //-- Sélectionner les balises SPAN
        // Version JS
        l(document.getElementsByTagName('span'));

        // Version jQuery
        l($('span'));

    //-- Selectionner mon Menu
        // JS
        l(document.getElementById('menu'));
        
        // jQuery
        l($('menu'));

    //-- Selectionner une classe
        // JS
        l(document.getElementsByClassName('MaClasse'));

        //
        l($('.MaClasse'));

    // Selectionner un Attribut

        // jQuerry
        l($("[href='http://www.google.fr']"));


});