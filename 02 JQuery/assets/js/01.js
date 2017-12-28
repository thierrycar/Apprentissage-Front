/* --------------------------------------
La disponibilité du DOM

    A partir du moment ou le DOMM, cad l'ensemble de l'arborescence 
    de ma page est completement chargée; je peux commencer à utiliser jQuery

    Je vais mettre l'ensemble de mon code dans une fonction, cette 
    fonction sera appelé AUTOMATIQUEMENT par jQuery lorsque le DOM sera 
    entièrement défini.

    3 façons de faire :

    ---------------------------------------------------------------------------------------*/

    jQuery(document).ready(function(){
        //-- Ici, le DOM est entèrement chargé, je peux procéder à mon code JS;
    });

    //Lorsqu'on voit $, c'est "jQuery"
    $(document).ready(function() {
        //-- Ici, le DOM est entèrement chargé, je peux procéder à mon code JS;
    })

    //-- 3eme possiblité
    $(function() {
        alert("Jai 20 ans !");
    

        //-- en JS:
        // document.getElementById('TexteEnJQuery').innerHTML = "<strong>Mon texte en JS</strong>";

        //-- En jQuery, les selecteurs sont les mêmes qu'en CSS :

        $('#TexteEnJQuery').html('Mon Texte en JQ');

    });
