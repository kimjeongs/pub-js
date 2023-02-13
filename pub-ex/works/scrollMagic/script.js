$(function () {
  //animation >> scene >> controller 애니메이션을 만들어 장면에 넣고 스크롤 매직으로 컨트롤

  // controller 생성
  let controller = new ScrollMagic.Controller();

  // animation 생성
  //#animate1은 애니메이션 적용 오브젝트, 1의 위치는 duration(지속 기간, 거리)
  let tween1 = TweenMax.to("#animate1", 1, {
    backgroundColor: "#333", //카멜 표기법
    scale: 2.5,
    rotation: 300,
    x: 130,
  });

  // scene 생성
  let scene = new ScrollMagic.Scene({
    triggerElement: "#trigger1", //애니메이션 발생 위치
    triggerHook: 0.7, //위에서 70퍼센트 위치, 0 ~ 1까지
    offset: 0, //빠르게/느리게 조정, triggerElement로 부터 애니메이션이 실행되는 start위치
    duration: "100%", // 얼마나 긴 시간동안 재생될지 설정, 100%로 지정하면 뷰포트 높이에 따라 유동적으로 end의 위치가 정해짐, 값이 작을수록 애니메이션은 빨리 끝나고 클수록 늦게 끝남, 안쓰면 애니메이션 실행 후 바로 끝남
  })
    .setTween(tween1) //애니메이션 등록
    .addTo(controller) //컨트롤러 등록
    .addIndicators({
      //트리거 인디케이터추가, 이름 지정
      name: "1",
    });

  //fromTo()
  let controller2 = new ScrollMagic.Controller();

  let tweenYoyo = TweenMax.fromTo(
    "#animate2",
    0.6,
    {
      //from
      backgroundColor: "#333333",
      scale: 1,
    },
    {
      //to
      scale: 2.5,
      backgroundColor: "#dc143c",
      x: 100,
      rotation: 360,
      repeat: -1, //fromTo() 메서드에 무한한 애니메이션 재생
      yoyo: true, //fromTo() 메서드에 애니메이션의 반복 재생
    }
  );

  let scene2 = new ScrollMagic.Scene({
    triggerElement: "#trigger2",
    duration: 150,
  })
    .setTween(tweenYoyo)
    .addTo(controller2)
    .addIndicators({
      name: "2",
    });

  //staggerFromTo()
});
