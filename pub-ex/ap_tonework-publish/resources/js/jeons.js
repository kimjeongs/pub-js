$(function () {
  const section = $('.ex_container .section-wrap > section');
  const secLen = section.length;
  let secTop = [];
  const pin = $('.pin');
  const winH = $(window).height();

  

  $(window).on('scroll', function() {
    let scroll = $(this).scrollTop();
   
    //fix
    fixSection(scroll);
    



  })

  //section top값
  function savSecTop() {
    section.each(function(i) {
      let thisTop = $(this).offset().top;
      secTop.push(thisTop);
    })
  }
  
  //section fix
  function fixSection(scroll) {
    for (let i = 0; i < secLen; i++) {
      if (scroll >= secTop[i]) {
        section.eq(i).find(pin).addClass('fix');
        if (scroll > secTop[i] + section.eq(i).height()) {
          section.eq(i).find(pin).removeClass('fix');
        }
      } else {
        section.eq(i).find(pin).removeClass('fix');
      }
    }
  }
  
  savSecTop();

  
  //  let fixTarget = $('.sec01').offset().top;
  //   let targetH = $('.sec01').height();

  //   if(scroll > fixTarget) {
  //     $('.sec01').find(pin).addClass('fix');
  //     if (scroll > targetH) {
  //       $('.sec01').find(pin).removeClass('fix').css({
  //         top: 'auto',
  //         bottom: 0
  //       }); 
  //     }
  //   } else {
  //     $('.sec01').find(pin).removeClass('fix').css({
  //       top: 0,
  //       bottom: 'auto'
  //     }); 
  //   }



  function fixSection(scroll) {
    for (let i = 0; i < secLen; i++) {
      if (scroll >= secTop[i]) {
        section.eq(i).find(pin).addClass('fix');
        if (scroll > secTop[i] + section.height()) {
          section.eq(i).find(pin).removeClass('fix');
        }
      } else {
        section.eq(i).find(pin).removeClass('fix');
      }
    }
  }

   function fixSection(scroll) {
    for (let i = 0; i < secLen; i++) {
      if (scroll >= secTop[i]) {
        section.eq(i).find(pin).addClass('fix');
        if (scroll > section.eq(i).height()) {
          section.eq(i).find(pin).removeClass('fix');
        }
      } else {
        section.eq(i).find(pin).removeClass('fix');
      }
    }
  }

})