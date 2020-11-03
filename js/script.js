AOS.init();

$(window).scroll(function(){
    if ($(window).scrollTop() > 770 && $(window).scrollTop() < 1870) {
        $('header').css('background-color', '#920a25');
        $('.item-link').css('color', 'white');
    }
    else {
        $('header').css('background-color', '#B80A2D');
        $('.item-link').css('color', 'white');
    }
});

$(document).ready(function(){
	$(".list").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 750);
	});
});


