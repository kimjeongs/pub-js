$(function(){
		var $section = $('.parallax > div'),
				$sectionInfo = [];

		$section.each(function(i){
			var $this = $(this);
			var upBtn = $this.find('.arrow > a:eq(0)');
			var downBtn = $this.find('.arrow > a:eq(1)');

			$sectionInfo.push($this.offset().top);

			upBtn.click(function(e){
				e.preventDefault();
				if(i==0) return; //첫번째 페이지면 비실행
				move(i-1);
			});
			downBtn.click(function (e) {
				e.preventDefault();
				if (i == $sectionInfo.length - 1) return;
				move(i+1);
			});
		});
		
		function move(i){
			var tt = $sectionInfo[i];

			$('html,body').stop().animate({
				scrollTop : tt
			},600,'easeOutCubic')
		}

		$section.css({position : 'fixed'});

		$(window).scroll(function(){
			var sct = $(this).scrollTop();

			$section.each(function(idx){
				var $this = $(this);
				var $newtop = $sectionInfo[idx] - sct;
				if (sct > $sectionInfo[idx]) {
					$newtop *= 0.5; // 속도를 반으로 줄임
				}
				$this.css({top:$newtop})
			})
		})
});