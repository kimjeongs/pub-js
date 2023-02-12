$(function () {
  const box = $(".box section");
  const boXLen = box.length;
  let boxTopArr;
  const btn = $(".btn li");
  const dist = box.height()*0.2; // 박스의 80퍼센트
  let currentBox = 0;
  const speed = 1500;

  savePos();

 //새로고침
  $(window).on('beforeunload', function(){
    reload();
  });

  //resize
  $(window).on("resize", function () {
    reload(); //새로고침
    savePos(); //좌표값
    full(); //풀페이지
  });

  //버튼 클릭시
  btn.on("click", function () {
    const idx = $(this).index();
    activeBtn(idx);

    //화면이동
    move(idx);
  });

  $(window).on("scroll", function () {
    const scroll = $(this).scrollTop();

    for (let i = 0; i < boXLen; i++) {
      if (scroll >= boxTopArr[i] - dist && scroll < boxTopArr[i + 1] - dist) {
        //버튼클릭
        activeBtn(i);
      }
    }

    box.each(function(i) {
      let newTop = boxTopArr[i] - scroll;
      console.log(boxTopArr[i],scroll,newTop)
      if (scroll > boxTopArr[i]) { //스크롤이 0 이하
        newTop = newTop * -0.5;
      }
      $(this).css({top:newTop});
      
    })
  });

  //버튼 active
  function activeBtn(i) {
    btn.removeClass("active");
    btn.eq(i).addClass("active");
  }

  //section top 값
  function savePos() {
    boxTopArr = [];

    $(box).each(function () {
      boxTop = $(this).offset().top;
      boxTopArr.push(boxTop);
    });

    //마지막 박스 값
    const lastBoxTop = boxTopArr[boXLen - 1] + box.last().height();
    boxTopArr.push(lastBoxTop);
  }

  //화면 이동
  function move(i) {
    $("html,body").stop().animate({
      scrollTop: boxTopArr[i],
    });

    currentBox = i;
  }

  //풀페이지
  function full() {
    let winH = $(window).outerHeight();
    box.height(winH);
  }

  //scroll top 0
  function reload() {
    $(window).scrollTop(0);
  }

});
