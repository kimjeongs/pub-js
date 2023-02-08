$(function() {
  const box = $('.box section');
  const boXLen = box.length;
  let boxTopArr;
  const btn = $('.btn li');
  const dist = 0.8;
  const currentBox = 0;

  //resize
  $(window).on('resize',function() {
    savePos();
  })
  
  //section top 값
  savePos();
  function savePos() {
    boxTopArr = [];

    $(box).each(function() {
      boxTop = $(this).offset().top;
      boxTopArr.push(boxTop);   
    })

    //마지막 박스 값
    const lastBoxTop = boxTopArr[boXLen-1] + box.last().height();
    boxTopArr.push(lastBoxTop);  
  }
  
  $(window).on('scroll',function() {
    const scroll = $(this).scrollTop();
    
    for (let i = 0; i < boXLen; i++) {
      if(scroll >= boxTopArr[i] * dist && scroll < boxTopArr[i+1] * dist ) {
      
        //버튼클릭
        activeBtn (i);
      }
    }    
  })

  //버튼 클릭시
  btn.on('click',function() {
    const idx = $(this).index();
    activeBtn (idx);

    //화면이동
    move(idx);
  })

  //마우스 휠
  $(window).on('wheel',function(e){
    
    if(e.originalEvent.wheelDeltaY <  120) {

      // move(i+1);
      // console.log('아래')
    } else {

      // move(i-1);
      // console.log('위')
    }
  })





  //버튼 active
  function activeBtn (i) {
    btn.removeClass('active');
    btn.eq(i).addClass('active');
  }

  //화면 이동
  function move(i) {    
    $('html,body').stop().animate( {
      'scrollTop' : boxTopArr[i]
    })

    currentBox = i;
  }



})