$(function(){
	var section = $('#contents > .parallax > div');
	var sectionInfo = [];
	var totalLength = section.length;	
	var current = 0;
	
	section.each(function(i){
		var tg = $(this);
		sectionInfo.push(tg.offset().top);	
		
		var upBtn = tg.find('> .tit > .arrow > a:eq(0)');
		var downBtn = tg.find('> .tit > .arrow > a:eq(1)');
		
		upBtn.click(function(e){
			e.preventDefault();
			if(i == 0) return;
			move(i-1);
		});
		
		downBtn.click(function(e){
			e.preventDefault();
			if(i == totalLength - 1) return;
			move(i+1);
		});
		
	});//section.each

	function move(sectionIndex){
		var tt = sectionInfo[sectionIndex];
		$('html, body')
		.stop()
		.animate({scrollTop:tt}, {duration:600, ease:'easeOutCubic'});

		current = sectionIndex;
	}
	
	section.css('position', 'fixed');
	
	$(window).scroll(function(){
		var sct = $(window).scrollTop();
		
		section.each(function(i){
			var tg = $(this);
			var tt = -1 * sct + sectionInfo[i];
			if(sct > sectionInfo[i]) tt *= 0.5;		
			
			tg.css('top', tt);
			// console.log(tt);
			
		}); //section.each
	});//$(window).scroll


	//마우스휠
	var excuted = false;
	section.mousewheel(function(e){
		if(!excuted) {
			if(e.deltaY == -1) {//아래
				move(current + 1)
			} else {
				move(current - 1)
			}
			excuted = true;
		}
		setTimeout(() => {
			excuted = false;
		}, 300);
	});

	console.log(current)
	
	
}); //$(function()
