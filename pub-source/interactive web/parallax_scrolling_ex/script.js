$(function(){
	const section = $('.parallax-wrap > section'),
		sectionInfo = [];
	
	section.each(function(i) {
		sectionInfo.push($(this).offset().top);
	});

	$(window).on('scroll',function() {
		const scroll = $(this).scrollTop();

		section.each(function(i) {
			let newTop = sectionInfo[i] - scroll;

			if (scroll > sectionInfo[i]) { //스크롤 값이 section의 top값을 다 잡아 먹으면, 상단에 붙으면 느려짐
				// newTop = newTop * 0.5;
				newTop *= 0.5;
			}

			$(this).css({top:newTop});
		})
		
	})

});