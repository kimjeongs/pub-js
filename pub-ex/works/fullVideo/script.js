$(function() {
  const video = $('.full-video .video');
  const motionWrap = $('.motion-wrap');
  const motionTxt = motionWrap.find('.motion-txt');
  let speed = 500;

  if(motionWrap.length) {
    motionTxt.each(function(i) {
      if (motionTxt.eq(i).parents().is('.last-txt') ) {
        speed = speed + 200;
      }
      setTimeout(() => {
        $(this).addClass('ir');
        if ($('.last-txt').find('.motion-txt').hasClass('ir')) {
          setTimeout(() => {
            video.get(0).play();
          }, speed)
        }
      }, speed * i);

      console.log(video.get(0).currentTime)
    })   
  }

  

})