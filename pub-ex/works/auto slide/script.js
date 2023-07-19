$(function() {

  let slideWrpper = $('.slidewrapper'),
      slides = slideWrpper.find('li'),
      currentIdx = 0;
      timer = undefined, //timer 초기화
      // pager = slideWrpper.find('.pager a');

  //슬라이드 배치
  slides.each(function(idx) {
    $(this).css({left:`${idx*100}%`});
  })

  //페이저 슬라이드 작동시키키
  // pager.click(function(e){
  //   e.preventDefault();
  //   let idx = $(this).index();
  //   moveSlide(idx);
  // })

  //move slide 함수
  function moveSlide(i) {
    // if(currentIdx ===  i) return; //같은 페이지 선택하면 반환

    let currentSlide = slides.eq(currentIdx);
    let nextSlide = slides.eq(i);

    //다음 슬라이드 순간 left 100% , animate 0
    //현재 슬라이드 animate -100%
    nextSlide.css({left:'100%'}).animate({left:0});
    currentSlide.animate({left:'-100%'});
    currentIdx = i;

    //모든 페이저에서 active제거 현재 번호에 맞는 요소에 active 추가
    // pager.removeClass('active');
    // pager.eq(i).addClass('active');
  }

  function autoSlide() {
    if(timer == undefined) { // 꼬이지 않게 해줌 
      timer = setInterval(() => {
        // let nextIdx = (currentIdx + 1)%slides.length;
        let nextIdx = currentIdx + 1;
        if(nextIdx === slides.length) {
          nextIdx = 0;
        }
        moveSlide(nextIdx);
      },3000)
    }
  }
  autoSlide();
  
  // slideWrpper.mouseenter(function() {
  //   clearInterval(timer);
  //   timer = undefined; //timer 초기화
  // })
  // .mouseleave(function() {
  //   autoSlide();
  // })
})