

$(function() {
    //-- Je souhaite cacher toutes les DIV de ma page HTML
    console.log($('div'));

    $('div').hide('slow', function() {
        alert('Fin du Hide');
   
        //-- Une fois que la méthode hide() est terminée, mon alerte peut s'executer.
        //-- NB : La fonction s'executera pour l'ensemble des éléments du selecteur.

    $('div').css('background','yellow');
    $('div').css('color', 'red');
    

    $('div').show('slow');

});// Fin de la fonction anonyme et du hide

$('p').hide(1000).css('color','blue').css('font-size','20px').delay(2000).show(500);

$('p').hide(1000).css('color','green','font-size','20px').delay(2000).show(500);

});