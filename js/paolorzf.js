$(function() {
    var words = [
        'un graphiste',
        'un développeur'
    ],
    i = 0;

    // On gère l'affichage du menu responsif pour les écrans inférieurs ou égaux à medium (<992px)
    $(".navbar-responsive").toggle();

    $(".menu").click(function() {
        $(".navbar-responsive").toggle("slow");
    });

    // On gère l'affichage aléatoire des phrases d'accroche du header (toutes les 3.5 secondes)
    setInterval(function() {
        $("#word").fadeOut(function() {
            $(this).html(words[i = (i + 1) % words.length]).fadeIn();
        });
    }, 3500);

    // On gère le scroll vers les différentes sections du site
    $(".scroll").click(function() {
        var section = $("." + this.id);
        $("html,body").animate({scrollTop: section.offset().top}, 'slow');
    });

    // On gère l'affichage des progressbar pour les compétences
    window.sr = ScrollReveal();
    sr.reveal('.progress-bar', {
        origin: 'left',
        duration: 2000,
        distance: '100%'
    })

    $('#top').click(function ()  {
        $('html, body').animate({
            scrollTop: '0px'
        }, 
        1000);
        return false; 
    });

    $('.card').css('height', $('.card').width());
    $('.card .img span').css('background-size', $('.card').width());
    $(window).resize(function() {
        $('.card').css('height', $('.card').width());
        $('.card .img span').css('background-size', $('.card').width());
    })
})

jQuery(function(){
    $(function () {
        $(window).scroll(function () { //Fonction appelée quand on descend la page
            if ($(this).scrollTop() > 400 ) {  // Quand on est à 200pixels du haut de page,
                $('#scrollUp').css('opacity','0.8'); // Replace à 10pixels de la droite l'image
            } else { 
                $('#scrollUp').removeAttr( 'style' ); // Enlève les attributs CSS affectés par javascript
            }
        });
    });
});
