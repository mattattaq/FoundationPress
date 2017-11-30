$(document).ready(function() {
	scrollMenu('#mainmenu');

	$('.mobtab').on('click', function() {
		$(this).next('.questions').slideToggle(200);
		$(this).children('.arrow').toggleClass('open');
	});

	$('.trigger').on('click', function() {
		$(this).next('.answer').slideToggle(200);
		$(this).children('.arrow').toggleClass('open');
	});

	$('.tabbutton').on('click', function(event) {
		if($(this).hasClass('sel')) {
			event.preventDefault();
		} else {
			$('.tabbutton').removeClass('sel');
			$(this).addClass('sel');
			$('.tab').removeClass('seltab');
			var target = $(this).data('target');
			$('#'+target).addClass('seltab');
		}
	});

	$('.expandmenu').on('click', function() {
		$(this).toggleClass('active');
		$('#' + $(this).data('target')).slideToggle(200);
	});

	$('.languageswitch a').on('click', function() {
		if($('#collapsedmenu').css('display') == 'block') {
			$(this).children('.arrow').toggleClass('open');
			$(this).next('.submenu').slideToggle(200, function() {
				$('#mainmenu').animate({
					scrollTop: $(".languageswitch").position().top
				}, 500);
			});
		}
	});

});

$(window).resize(function() {
	scrollMenu('#mainmenu');
});

function scrollMenu(target) {
	if($('#collapsedmenu').css('display') == 'block') {
		var maxHeight = $(window).height() - 100;
		$(target).css('max-height',maxHeight);
		$(target).css('overflow-x','hidden');
		$(target).css('overflow-y','scroll');
	} else {
		$(target).removeAttr("style");
	}
}


// hide newslink when no link

$(window).load(function(){

    $("#mainmenu a").each(function(){

		var id = $(this).attr('href');

		// check if it's an anchor link
		if(id.indexOf("#") === 0 && $(id).length == 0)
		{
			$(this).parent().remove();
		}
	});
    setSelect();
});

$(window).scroll(function(){
    setSelect();
})


function setSelect()
{
    var scrollPos = $(window).scrollTop();
    $("#mainmenu li").removeClass('selected')

    $("#mainmenu li:visible:not(.languageswitch) a").each(function(){
        var id = $(this).attr('href');
        var offset = $(id).offset().top - 100;

        var nextId = $(this).parent().next(':visible:not(.languageswitch)').children('a').attr('href');

        if(typeof nextId != 'undefined') {
            var nextOffset = $(nextId).offset().top - 100;
        }
        else
        {
            var nextOffset = false;
        }

        if(offset <= scrollPos && (!nextOffset || nextOffset > scrollPos))
        {
            $(this).parent().addClass('selected');
        }

        if($(document).height() - $(window).height() ==  scrollPos)
        {
            $("#mainmenu li").removeClass('selected');
            $(this).parent().addClass('selected');
        }
    })
}

// catch anchor click and use scroll
$(function (){
	$("#mainmenu a, #logo a").click(function (e){

		// event tracking
		var hash = $(this).prop('href').substr($(this).prop('href').indexOf('#'))
		ga('send', 'event', 'mainmenu', 'click', hash);

		// check if it is an anchor link
		if($(this).attr('href').indexOf("#") === 0)
		{

			// prevent the default action
			e.preventDefault();

			// check if element with id exists
			if($($(this).attr('href')).length == 1)
			{
				// calculate scroll position
				var distance = $($(this).attr('href')).offset().top - $(window).scrollTop();
                var speed = 1500; //per second;
				var time = Math.abs(distance/speed) * 1000;

                // override
                var time = 0;

                // animate to the position
				$('html, body').stop(true,false).animate({
					scrollTop: $($(this).attr('href')).offset().top - 100
				}, time);
			}

		}
	});
});

// subscribe to newsletter
$(function(){
	$("form#subscribe_newsletter").submit(function(e) {
		e.preventDefault();
		$.ajax({
			type: 'post',
			url: $("form#subscribe_newsletter").attr('action'),
			data: $("form#subscribe_newsletter").serializeArray(),
			dataType: 'json',
			success: function(data){
				$("form#subscribe_newsletter").parent().find("p.error").remove();
				if(data.validate !== true)
				{
					$.each(data.errors, function(key,value) {
						$("form#subscribe_newsletter input[name=" + key + "]").addClass('error').before("<p class=\"error\" style=\"display:none\"><em>" + value + "</em></p>");
						$("form#subscribe_newsletter").parent().find("p.error").fadeIn();
					});
				}
				else
				{
					$("form#subscribe_newsletter").fadeOut(300, function(){
						$(this).after("<p><strong>" + data.message + "</strong></p>")
					});
				}
			}
		});
	});
});



// subscribe to newsletter
$(function(){
	$("form#contact").submit(function(e) {
		e.preventDefault();
		$.ajax({
			type: 'post',
			url: $("form#contact").attr('action'),
			data: $("form#contact").serializeArray(),
			dataType: 'json',
			success: function(data){
				$("form#contact").parent().find("p.error").remove();
				$("form#contact input, form#contact textarea").removeClass('error')
				if(data.validate !== true)
				{
					$.each(data.errors, function(key,value) {
						$("form#contact [name=" + key + "]").addClass('error').before("<p class=\"error\" style=\"display:none\"><em>" + value + "</em></p>");
						$("form#contact").find("p.error").fadeIn();
					});
				}
				else
				{
					$("form#contact").fadeOut(300, function(){
						$(this).before("<p><strong>" + data.message + "</strong></p>")
					});
				}
			}
		});
	});
});


$(function(){
	$(".showemail").each(function(){
		var decode = "mailto:" + atob($(this).attr('href'));
		$(this).attr('href', decode);
	})
})


// temp flavours
$(function(){
	$("#temp_flavours .selected").show();
	$("#temp_flavours .list li").click(function(){

		var id = "#" + $(this).data('target');

		$("#temp_flavours .list li").removeClass('selected');
		$(this).addClass("selected");

		$('#temp_flavours .panels .selected').stop(true,true).delay(200).fadeOut(200,function(){
			$(this).removeClass('selected');
		});
		$(id).addClass('selected').stop(true,true).fadeIn(400);
	})

})