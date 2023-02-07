$(function(){
    // tab1
    function tab1() {
        let tabMenu = $('.tab1').find('.menu li a');
    
        tabMenu.on('click',function(e) {
            e.preventDefualt;
            let thisIndex = $(this).parent().index(),
                thisCont = $(this).parents('.tab1').find('.cont li'),
                className = 'active';

            $(this).parent().siblings().removeClass(className);
            $(this).parent().addClass(className);
            thisCont.removeClass(className);
            thisCont.eq(thisIndex).addClass(className);
        })
    }
    tab1();

    // tab2
    function tab2() {
        $('.tab2 .menu li').each(function(index){
            $(this).data('cont li', $('.tab2 .cont li').eq(index));
        })
        $('.tab2 .menu li a').on('click',function(e) {
            e.preventDefualt;
            $(this).parent().siblings().removeClass('active');
            $(this).parents('.tab2').find('.cont li').removeClass('active');
            $(this).parent().addClass('active').data('cont li').addClass('active');
        })
    }
    tab2();

    // tab3
    function tab3() {
        const liWid = $('.tab3 .menu li').width();
        $('.tab3').prepend('<div class="line"></div>')
                
        $('.tab3 .menu li a').on('click',function(e) {
            e.preventDefualt;            
            const tabMenu = $(this).parent(),
                thisCont = $(this).parents('.tab3').find('.cont li');
            let thisIndex = tabMenu.index();
            
            tabMenu.parent().siblings('.line').css('left', liWid * thisIndex);
            tabMenu.siblings().removeClass('active');
            tabMenu.addClass('active');
            thisCont.removeClass('active').hide().eq(thisIndex).slideDown().addClass('active');
        })
    }
    tab3();

    // tab4
    function tab4() {
        //li a를 클릭할때 전체 li 클래스 지우고 이 li에 클래스 active 추가
        //cont 전체 li 클래스 지우고 선택한 li의 인덱스와 동일한 cont 인덱스의 li 에 클래스 active 추가
        //왼쪽 정렬: li의 위치값이 박스 절반 값 보다 작으면 ul 의 위치는 0
        //오른쪽 정렬: li전체 값에서 선택한 li의 위치값을 뺀 값이 박스 절반 값보다 작으면 ul 위치 오른쪽 끝
        //li 전체값에서 선택된 li 위치값을 뺀 값이 박스의 절반(중앙기준)보다 크면 오른쪽 배치일때 중앙 정렬이 안됨 중앙 밖으로(왼쪽으로) 밀려남
        //가운데 정렬: li의 위치가 박스 절반 값 보다 크거나 오른쪽 정렬이 되지 않을때

        $('.tab4 .menu li a').on('click', function(e){
            e.preventDefualt;
            
            let target = $(this).parent(),
                idx = target.index(),
                liWid = 0,
                boxWid = $('.menu-outer').outerWidth(),
                boxHalf = $('.menu-outer').outerWidth() / 2,
                leftPos = 0,
                selectPos,
                pos;

            $('.tab4 .menu li').each(function() {
                liWid += $(this).outerWidth();
            });

            for (let i=0; i< target.index(); i++) {
                leftPos += $('.tab4 .menu li').eq(i).outerWidth();
            }
            selectPos = leftPos + target.outerWidth()/2;
            

            if (selectPos < boxHalf) {
                pos = 0;
            } else if (liWid - selectPos < boxHalf) {
                pos = liWid - boxWid;
            } else {
                pos = selectPos - boxHalf;
            }

            $(this).parent().siblings().removeClass('active');
            $(this).parent().addClass('active');

            $('.tab4 .menu').animate({scrollLeft:pos});

            $(this).parents('.tab-wrap').find('.cont li').siblings().removeClass('active').eq(idx).addClass('active');
            
        })
    }   
    tab4();



})