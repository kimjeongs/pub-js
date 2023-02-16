$(function() {
  const section = $('.ex-container > section');
  const sectionLen = section.length; 
  const sectionTopArr = [];

  $(window).scroll(function() {
    let scroll = $(this).scrollTop();
    const motionItem = $('.motion-area .motion-item');
    
    for (let i = 0; i < sectionLen; i++) {
      if (scroll > sectionTopArr[i] && scroll < sectionTopArr[i+1]) {
        section.eq(i).find('.cont-wrap').removeClass('cont-wrap').addClass('motion-area');
      }

      //motion 위치 조정
      section.eq(i).find(motionItem).each(function(idx) {
        const item = $(this);
        setTimeout(function(idx) {
          item.addClass('ir')
          //item.attr('data-num', idx);
        },idx * 300)
      })
    }

    //top visual {
    if(scroll > 0) {
      section.eq(0).find('.visual-img').css({
        transform : 'translateZ('+ scroll * 0.3 +'px)'
      })

      //스크롤 0 되면 fadeOut
      section.eq(0).find('.visual-txt-wrap').css({
        opacity:0,
        transition:1.5+'s'
      })
    } 

    
    
    
  })



  
  
  //section top 값
  sectionTopPos(); 
  function sectionTopPos() {
    section.each(function() {
      const sectionTop = $(this).offset().top;
      sectionTopArr.push(sectionTop);
    })
    const lastTop = sectionTopArr[sectionLen-1] + section.last().outerHeight();
    sectionTopArr.push(lastTop);
  }

})