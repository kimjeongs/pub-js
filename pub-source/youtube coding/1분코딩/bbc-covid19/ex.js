$(function() {
	const graphicItem = $('.graphic-item');
	const step = $('.step');
	let stepTopArr = [];
	
	step.each(function(i){
		let stepTop = $(this).offset().top;
		stepTopArr.push(stepTop);
	});

	$(window).on('scroll',function() {
		const scroll = $(this).scrollTop();
		for(let i = 0; i < step.length; i++) {			
			if(stepTopArr[i] - scroll > $(window).innerHeight() * 0.1 && 
			stepTopArr[i] - scroll < $(window).innerHeight() * 0.8) {
				graphicItem.removeClass('visible');
				graphicItem.eq(i).addClass('visible');
			}
		}
	})
	graphicItem.eq(0).addClass('visible');

	$(window).on('load',function() {
		$('html,body').animate({scrollTop:0},10)
	})
})