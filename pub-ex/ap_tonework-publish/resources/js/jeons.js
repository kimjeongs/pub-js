$(function () {
  const section = $('.ex_container .sec-wrap > section');
  const secLen = section.length;
  let secTop = [];
  const pin = $('.pin');
  let currentPin;
  

  $(window).on('scroll', function() {
    let scroll = $(this).scrollTop();
   
    for(let i = 0; i <= secLen; i++ ) {
      if(scroll > secTop[i] && scroll <= secTop[i+1]) {
        console.log(i)
        if(['data-pin='+ currentPin] ) {
          $('.pin').eq(i).addClass('fix')
        }
      } 
    }
    
  })


  function savSecTop() {
    section.each(function() {
      let thisTop = $(this).offset().top;
      secTop.push(thisTop)
    })
  }

  function pinNum() {
    for(let i=0; i <= pin.length; i++) {
      pin.eq(i).attr('data-pin',i);
    }
  }
  
  
  savSecTop();
  pinNum();

  

})