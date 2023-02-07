$(function(){
	// acco1
	$('.acco1 .btn').on('click',function() {
		let accoLi = $(this).parent('li'),
			className = 'active';
			
		if (accoLi.hasClass(className)) {
			accoLi.removeClass(className)
		} else {
			accoLi.addClass(className)
		}
	})

	// acco2
	$('.acco2 .btn').on('click',function() {
		let accoLi = $(this).parent('li'),
			accoAllLi = $(this).parents('.acco-wrap').find('li'),
			className = 'active';

		if (accoLi.hasClass(className)) {
			removeActive();
		} else {
			removeActive();
			accoLi.addClass(className);
		}		

		function removeActive() {
			accoAllLi.removeClass(className);
		}
	})

	//acco3
	$('.acco3 .btn').on('click',function() {
		let accoLi = $(this).parent('li'),
			accAllLi = $(this).parents('.acco-wrap').find('li'),
			accoCont = $(this).parents('.acco-wrap').find('.cont'),
			className = 'active';

		if (accoLi.hasClass(className)) {
			accoClose();
		} else {
			accoClose();
			$(this).siblings().slideDown();
			accoLi.addClass(className);
		}

		function accoClose() {
			accAllLi.removeClass(className);
			accoCont.slideUp();
		}
	})

	// toggle 
	$('.toggle-wrap').on('click','.btn',function() {
		$(this).siblings().slideToggle();
		$(this).parent('.toggle-wrap').toggleClass('active')
	})
});