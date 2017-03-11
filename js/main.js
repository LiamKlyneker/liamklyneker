$(function(){
	console.log('main.js ready');

	var templates = [
		'main',
		'about-me',
		'work',
		'contact'
	];

	__callAndFillTemplates(templates);

	__setContainer('home');

	/*$(window).scroll(function(){
		if ($(window).scrollTop() > 250) {
			$('header').addClass('whit_photo');
		} else {
			$('header').removeClass('whit_photo');
		}
	});

	var scroll = scrollAnimation();

	$('ul li').each(function(){
		scroll.goTo($(this).children('a'));
	});

	$('section.main').find('a').each(function(){
		scroll.goTo($(this));
	});

	$('section').each(function(){
		scroll.animated($(this));
	});



	function scrollAnimation(){

		function goTo(btn){
			$(btn).on('click', function(e){
				e.preventDefault();
				$(btn).parent().parent().find('a.active').removeClass('active');
				$(btn).addClass('active');
				var go_to = $(btn).attr('goto');
				$('html, body').animate({
					scrollTop : ($('section[fromto=' + go_to +']').offset().top) - 53
				}, 500);
			});
		}

		function animated(el){
			//scroll
			$(window).scroll(function(){
				if ($(window).scrollTop() > $(el).offset().top-171 && $(window).scrollTop() < $(el).offset().top + $(el).height() - 171) {
					$('header').find('a[goto='+$(el).attr('fromto')+']').addClass('active');
				} else {
					$('header').find('a[goto='+$(el).attr('fromto')+']').removeClass('active')
				}
			});

			//displays
			var once = true;
			$(window).scroll(function(){
				if (once === true) {
					if ($(window).scrollTop() > $(el).offset().top-300) {
						$(el).find('.scroll').fadeIn('fast');
						once = false;
					}
				}
				if ($(window).scrollTop() < $(el).offset().top-500) {
					$(el).find('.scroll').fadeOut('fast');
					once = true;
				}
			});
		}

		return {
			animated : animated,
			goTo     : goTo
		}
	}*/

});


// Global Clicks
$(document).on('click', 'a[href="#"]', function(ev){
	ev.preventDefault();
});
$(document).on('click', '[gl-toggle=menu-mobile]', function(){
	$('#menu-mobile').toggleClass('active');
	$('body').toggleClass('active-nav');
});
$(document).on('click', '[gl-nav] a', function(){
	var data = $(this).data();

	__setContainer(data.where);
});
$(document).on('click', '[gl-goto]', function(){
	var where = $(this).attr('gl-goto');
	__setContainer(where);
});

// Functions
function __setContainer(container){
	$('[container].active').addClass('inactive');
	$('html body').animate({scrollTop : 0 });
	setTimeout(function () {
		
		$('[container].active').removeClass('active inactive');
		$('[container='+container+']').addClass('active');
	}, 280);




	// Control header fixed
	if (container !== 'home') {
		$('#main-header-nav').addClass('active');
	} else {
		$('#main-header-nav').addClass('inactive');
		setTimeout(function () {
			$('#main-header-nav').removeClass('active inactive');
		}, 280);
	}

	// Control mobile menu
	if ($('body').hasClass('active-nav')) {
		$('body').removeClass('active-nav');
		$('#menu-mobile').removeClass('active');
	}
	$('[gl-nav] a').removeClass('active');
	$('[gl-nav] a[data-where='+container+']').addClass('active');
}
