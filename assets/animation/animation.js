window.slideDuration = 500;



$(function(){

    setBackground();
    var progress = $('.progress').circleProgress({
        value: 0,
        fill: {
            color: '#FF9A00'
        },
        size: 200,
        startAngle: 0,
        animation: false
    });

    var i = 0;
    var images = $("header img").load(function(){
        i++;
        var amount = (i / images.length);
        progress.circleProgress({ value: amount})
        if(amount == 1)
        {
            $('.progress').fadeOut(200);
        }

    });
})

$(window).on('resize', function(){
    setBackground()
});
$(window).on('load resize', function(){
	initLoad();
});

// prev
$(".prev").on('click',function(){
    goPrev(1);

});

// next
$(".next").on('click',function(){
    goNext(1);
});


$("#chooseFlavour div").on("click", function(){

    var go = $(this).data('go');

    if(go > 0)
    {
        goNext();
        if(go > 1)
        {

            window.setTimeout(function() {
                goNext();
            },window.slideDuration);
        }
    }
    else if(go < 0)
    {
        goPrev();
        if(go < -1)
        {
            window.setTimeout(function() {
                goPrev();
            },window.slideDuration);
        }
    }

});

$(window).scroll(function() {

	var activeFlavour = $("#slider li.middle").data('target');
	if(activeFlavour !== undefined)
	{
		var animation = $(activeFlavour);
		var scrollPos = $(window).scrollTop();
		var percentage = (scrollPos / window.images) * 100;

		if(percentage > 0)
		{
			$("#animationtrigger").fadeOut();
            $(".slider-wrap .next, .slider-wrap .prev").fadeOut(0.2)
            $(animation).css({opacity: 1});
		}
		else
		{
			$("#animationtrigger").fadeIn();
            $(".slider-wrap .next, .slider-wrap .prev").fadeIn(0.2);
            $(animation).css({opacity: 0})
		}
		if(percentage > 15)
		{
			$("#animation").addClass('noMargin')
		}
		else
		{
			$("#animation").removeClass('noMargin')
		}
		if(percentage > 7 && percentage < 22)
		{
			$('#text01').addClass('visible');
			$('#text01').removeClass('hidden');
		} else {
			$('#text01').addClass('hidden');
			$('#text01').removeClass('visible');
		}
		if(percentage > 22 && percentage < 60)
		{
			$('#text02').addClass('visible');
			$('#text02').removeClass('hidden');
		} else {
			$('#text02').addClass('hidden');
			$('#text02').removeClass('visible');
		}
		if(percentage > 65 && percentage < 80)
		{
			$('#text03').addClass('visible');
			$('#text03').removeClass('hidden');
		} else {
			$('#text03').addClass('hidden');
			$('#text03').removeClass('visible');
		}
		if(percentage > 80)
		{
			$('#flavourdescriptions').addClass('visible');
			$('#flavourdescriptions').removeClass('hidden');

			$('#flavourdescriptions .next').addClass('visible');
			$('#flavourdescriptions .next').removeClass('hidden');

		} else {
			$('#flavourdescriptions').addClass('hidden');
			$('#flavourdescriptions').removeClass('visible');
		}

		if(percentage > 85)
		{
			$("#textwrapper .next, #textwrapper .prev").addClass('visible');
			$("#textwrapper .next, #textwrapper .prev").removeClass('hidden');
		}
		else
		{
			$("#textwrapper .next, #textwrapper .prev").addClass('hidden');
			$("#textwrapper .next, #textwrapper .prev").removeClass('visible');
		}



		if(percentage <= 100)
		{
			$("#animation").css({position:'fixed', bottom: 'auto', top: 100})
			$("#textwrapper").css({position:'fixed'})



		}
		else if(percentage > 100)
		{
			$("#animation").css({position:'absolute', bottom: 0, top: 'auto'})
			$("#textwrapper").css({position:'absolute', bottom: 0})
		}

		if(scrollPos == 0)
		{
			$("#slider li.middle").show();
		}
		else
		{
			$("#slider li.middle").hide();
		}

		var eq = Math.round(scrollPos / window.durationFactor);


		if(eq >= ($("li", animation).length - 1))
		{
			eq = $("li", animation).length - 1;
		}

        $("li", animation).css({opacity: 0}).removeClass('current');
		$("li:eq(" + eq + ")", animation).css({opacity: 1}).addClass('current');
	}
});

function goNext()
{
    if($("#slider li.cloned").length > 0)
    {
        return false;
    }

    var middle = getIndexMiddle() + 1;
    var leftClone = ((($("#slider li:last-child").index() + 1) - getIndexMiddle()) * 20) + "%";
    var firstToLast = $("#slider li:first-child").clone().css({'margin-left': leftClone}).addClass('cloned');

    $("#slider").append(firstToLast)

    var remove = $("#slider li:first-child");

    setSlides(middle, remove);

}


function goPrev()
{
    if($("#slider li.cloned").length > 0)
    {
        return false;
    }
    var middle = getIndexMiddle();
    var leftClone = ((($("#slider li:first-child").index() -1) - getIndexMiddle()) * 20) + "%";
    var lastToFirst = $("#slider li:last-child").clone().addClass('cloned').css({'margin-left':leftClone});

    $("#slider").prepend(lastToFirst)
    var remove = $("#slider li:last-child");
    setSlides(middle, remove);
}

function initLoad(){

		var landscape = $(window).width() > $(window).height();

		window.durationFactor = 100;
        window.offsetTop = $(window).height() / 4.6;

        // Get backgroundimg
        var background = $("header .background img");

		window.images = $("#animation ul:first-child li").length * window.durationFactor;

		var windowHeight = $(window).height();
		var topMenuHeight = $("#topmenu").height();

		var headerHeight = (windowHeight - topMenuHeight);
		var animationHeight = headerHeight + (window.images);

		// set header height
		$("#animation, #animation ul, #animation li, .slider-wrap, .slider-wrap #slider").css({height:headerHeight});
		$("header").css({height:animationHeight, position: 'relative'})

		// Get on screen image
		var screenImage = $("#slider li:first-child img");

		// Create new offscreen image to test
		var theImage = new Image();
		theImage.src = screenImage.attr("src");

		// Get accurate measurements from that.
		var imageWidth = theImage.width;
		window.imageHeight = theImage.height;

		if(window.imageHeight > headerHeight)
		{
			window.imageHeight = headerHeight;
		}

		if(landscape)
		{
			// set max-width of all images
			$("#slider img, #animation img").css({'height': '100%', width: 'auto'});

		}
		else
		{
			// set max-width of all images
			$("#slider img, #animation img").css({'width': '100%', height: 'auto'})
		}

		// set offset
		$('#slider, #animation, #animationtrigger, header .next, header .prev, #chooseFlavour').css({'margin-top': window.offsetTop});

		// rempove loading
		$("header .loading").fadeOut(2000);

		$('#animationtrigger').click(function(){
			$('html, body').stop(true,false).animate({
				scrollTop: window.images
			}, 8000);
		})

		setSlides(getIndexMiddle());

}

// slider
function setSlides(middle,remove){

	var landscape = $(window).width() > $(window).height();

	var currentActiveImageIndex = $("#animation ul li.current").index();

	$("#slider li.middle").fadeIn(500).removeClass('middle');
	$("#slider li:eq(" + middle + ")").addClass('middle')

	if($(window).scrollTop() > 0)
	{
		$("#slider li.middle").fadeOut(200);
	}

	$("#slider li").each(function(index,el){


		var percentage = (index - middle) * 20;

		var percentageFromMiddle = Math.abs(percentage);

		var percentageFromMiddle = ( percentageFromMiddle < 0 ? 0 : percentageFromMiddle);
		var percentageFromMiddle = ( percentageFromMiddle > 100 ? 100 : percentageFromMiddle);

		var opacity = 1 -( percentageFromMiddle / 100);
		var height = ((100 - (percentageFromMiddle)) / 100) * window.imageHeight;

		$(el).stop(false,false).animate({'margin-left':percentage + "%", opacity: opacity}, window.slideDuration, function(){
			if(remove)
			{
				$("#slider li.cloned").removeClass('cloned');
				remove.remove();
			}
		})

		if(landscape)
		{
			$(el).children('img').stop(false,false).animate({height: (100 - (percentageFromMiddle / 2) )+"%", width: 'auto'}, 500);
		}
		else
		{
			$(el).children('img').stop(false,false).animate({width: (100 - (percentageFromMiddle/2) )+"%", height: 'auto'}, 500);
		}
	});


	var animation = $("#slider li.middle").data('target');
    var newCurrent = $("li:eq(" + currentActiveImageIndex + ")", animation);

    newCurrent.css({opacity: 1}).addClass('current');
    $("#animation ul").css({'z-index': 0});
    if($(window).scrollTop() > 0) {
        $(animation).css({'z-index': 1}).animate({opacity: 1}, 200, function () {

            $("#animation ul")
                .not($(animation))
                .css({opacity: 0})
                .children("li")
                .not(newCurrent)
                .css({opacity: 0})
                .removeClass("current");
        });
    }



	$("#flavourdescriptions .panels>li").stop(true, true).fadeOut(200);
	$("#flavourdescriptions .panels>li:eq("+ $(animation).index() +")").fadeIn(200);

}

function getIndexMiddle()
{
	var indexMiddle = Math.ceil( $("#slider li").length / 2 ) -1

	return indexMiddle;
}



function setBackground()
{
    var landscape = ($(window).width() > $(window).height())

    var windowWidth = $(window).width();
    var middleWindow = $(window).height() / 2;

    // Get on screen image
    var screenImage = $("header .loading img");

    // Create new offscreen image to test
    var theImage = new Image();
    theImage.src = screenImage.attr("src");

    var imageWidth = 1370;
    var ratio = windowWidth / imageWidth;

    var middleImage = 565 * ratio;

    var marginTop = (middleImage - middleWindow) + 50;
    if(landscape) {
        $("header .loading img, header .background img").css({'margin-top': -marginTop});
    }
}