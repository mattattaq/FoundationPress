// function includeJs(jsFilePath) {
//     var js = document.createElement("script");

//     js.type = "text/javascript";
//     js.src = jsFilePath;

//     document.body.appendChild(js);
// }

// includeJs("../../../flavour/views/flavourObject.js");
//offset
$('.nav-switch').click(function () {
    var divID = '#' + this.id;
    $('html, body').animate({
        scrollTop: $(divID).offset().top
    }, 100);
})

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
    //smooth scroll
    var scrollLink = $('.scroll');
    // Smooth scrolling
    scrollLink.click(function(e) {
      e.preventDefault();
      $('body,html').animate({
        scrollTop: $(this.hash).offset().top - 130
      }, 1000 );
    });

    document.addEventListener('scroll', function (event) {
        var scrollPos = $(document).scrollTop();
        $('.nav-switch').each(function() {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if( refElement.position().top - 135 <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('#mainmenu ul li a').removeClass("active");
                currLink.addClass("active");
            } else {
                currLink.removeClass("active");
            }
        });
    });
    
    //if the index of the url contains /de -> load german text
    if(window.location.href.indexOf("/de") > -1) {
        $("#lang-flavours").text('Geschmacks­richtungen');
        $("#lang-about").text('Über Go Splash');
        $("#lang-contact").text('Kontakt');
    }
    //if the index of the url contains en_ -> navigate to english index
    if(window.location.href.indexOf("en_") > -1) {
        $(".nav-switch").each(function() {
            $(".nav-switch").attr('href', function(i, existingLink) {
                return "index.php/" + existingLink;
            });
        });
    };
    //if the index of the url contains de_ -> navigate to german index
    if(window.location.href.indexOf("de_") > -1) {
        $(".nav-switch").each(function() {
            $(".nav-switch").attr('href', function(i, existingLink) {
                return "index.php/de/" + existingLink;
            });
        });
    };

    //display images
    console.log(flavours);
    var data = flavours;
    document.getElementById("slider");
    for(var i=0; i < flavours.length; i++) {
        var source = flavours[i].animation_images[0];
        var name = flavours[i].name;
        var id = flavours[i].id;
        var php = '<?php echo get_template_url()?; >'
        var html =
          '<li data-target="#flavour' + id + '">' +
            '<img src="' +  php  +   source + '" alt="' + name + '" title="' + name + '" />' +
          '</li>';
        $('#slider').append(html);
    }
});




