$(function(){
	console.log('Main ready');

	$(window).scroll(function(){
		if ($(window).scrollTop() > 250) {
			$('header').addClass('whit_photo');
		} else {
			$('header').removeClass('whit_photo');
		};
	});

	var scroll = scrollAnimation()

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
				$('html body').animate({
					scrollTop : ($('section[fromto=' + go_to +']').offset().top) - 53
				}, 500);
				console.log(go_to);
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
						console.log(once)

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
	}

});