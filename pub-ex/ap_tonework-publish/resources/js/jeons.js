$(function () {
  const section = $('.ex_container .section-wrap > section');
  const secLen = section.length;
  let secTop = [];
  const pin = $('.pin');
  const winH = $(document).outerHeight();

  

  $(window).on('scroll', function() {
    let scroll = $(this).scrollTop();

    //section 기본 클래스 추가
    for (let i = 0; i < secLen; i++) {
      if (scroll > secTop[i] && scroll < secTop[i+1]) {
        section.eq(i).find('.motion').addClass('active');
        section.eq(i).find(pin).addClass('fix');


        //모션 실행
        section.eq(i).find('.motion .item').each(function(idx) {
          let item = $(this);
          setTimeout(function(idx) {
            item.addClass('ir')
          }, idx * 500)
        })

      } else {
        // section.eq(i).find('.motion').removeClass('active');
        section.eq(i).find(pin).removeClass('fix');
      }
      
    }
    //.top-cont
    const topCont = $('.top-cont');
    const visualImg = topCont.find('.top-visual-img');
    const dist = 200;

    if(scroll > dist && scroll < secTop[1]) {
      visualImg.css({
        'transform': 'translateZ('+ scroll * 0.3 +'px)'
      })
    } 
    if(scroll == 0) {
      visualImg.next().removeClass('active');
    }
    

    //.sec02
    section02(scroll);

    



  })


  savSecTop();


  //.sec02
  function section02(scroll) {
    const section02Top = $('.sec02').offset().top;
    const section02Height = $('.sec02').height();

    if(scroll > section02Top) {
      if (scroll > section02Height) {
        $('.sec02').find(pin).removeClass('fix').css({
          top: 'auto',
          bottom: 0
        }); 
      }
    } else {
      $('.sec02').find(pin).removeClass('fix').css({
        top: 0,
        bottom: 'auto'
      }); 
    }
  }

  //section top값
  function savSecTop() {
    section.each(function(i) {
      let thisTop = $(this).offset().top;
      secTop.push(thisTop);
    })
    let lastSec = secTop[secLen-1]+section.last().height();
    secTop.push(lastSec);
  }



  
  

})