$("#collapsedmenu").click(function toCollapse(){
    
    var menu = window.document.getElementById("collapsedmenu");
    var mainMenu = window.document.getElementById("mainmenu");

    if( $(menu).hasClass('expand') ) {
        $(menu).removeClass('expand');
        $(mainMenu).removeClass('expand');
        $(mainMenu).slideUp(500);
    } else {
        $(menu).addClass('expand');
        $(mainMenu).addClass('expand');
        $(mainMenu).slideDown(500);
    }
});

$(document).ready(function () {
    if(window.location.href.indexOf("/de") > -1) {
        $("#lang-flavours").text('Geschmacks­richtungen');
        $("#lang-about").text('Über Go Splash');
        $("#lang-contact").text('Kontakt');
    }
    if(window.location.href.indexOf("en_") > -1) {
        $(".nav-switch").each(function() {
            $(".nav-switch").attr('href', function(i, existingLink) {
                return "index.php/" + existingLink;
            });
        });
    };
    if(window.location.href.indexOf("de_") > -1) {
        $(".nav-switch").each(function() {
            $(".nav-switch").attr('href', function(i, existingLink) {
                return "index.php/de/" + existingLink;
            });
        });
    };
});


