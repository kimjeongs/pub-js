(() => {

	const actions = {
		birdFlies(key) {
			if (key) { //true 
				document.querySelector('[data-index="2"] .bird').style.transform = `translateX(${window.innerWidth}px)`; //백틱
			} else { //false
				document.querySelector('[data-index="2"] .bird').style.transform = `translateX(-100%)`; //백틱
			}
			
		},
		birdFlies2(key) {
			if (key) { //true 
				document.querySelector('[data-index="5"] .bird').style.transform = `translate(${window.innerWidth}px, ${-window.innerHeight*0.7}px)`; //백틱
			} else { //false
				document.querySelector('[data-index="5"] .bird').style.transform = `translate(-100%)`; //백틱
			}
			
		}
	}

	const stepElems = document.querySelectorAll('.step');
	const graphicElems = document.querySelectorAll('.graphic-item');
	let currentItem = graphicElems[0]; //현재 활성화된 visible 클래스가 붙은 .grapic-item을 지정하는 변수. 첫 이미지는 로딩 후 바로 보이게
	let ioIndex;

	//계속 도는 for문을 쓰지 않기 위해 현재 어떤 상태인지 체크. 내용이 나왔는지, 들어갔는지 체크
	const io = new IntersectionObserver((entries, obsever)=>{
		ioIndex = entries[0].target.dataset.index * 1;//곱하기는 숫자로 변환하기 위함
	});


	for (let i = 0; i < stepElems.length; i++) {
		io.observe(stepElems[i])//observe가 관찰함
		// stepElems[i].setAttributes('data-정한이름', i);
		// stepElems[i].dataset.정한이름 = i; 위나 아래 둘 중에 사용해서 인덱스 번호 붙이기
		stepElems[i].dataset.index = i;
		graphicElems[i].dataset.index = i;
	}

	function activate(action) {
		currentItem.classList.add('visible');
		if (action) { //birdFlies 
			actions[action](true);
		}
	}

	function inactivate(action) {
		currentItem.classList.remove('visible');
		if (action) { //birdFlies 
			actions[action](false);
		}
	}

	window.addEventListener('scroll', () => {
		let step;
		let boundingRect;

		//for (let i = 0; i < stepElems.length; i++ ) {
		for (let i = ioIndex - 1; i < ioIndex + 2; i++ ) {
			//ioIndex - 1 는 현재꺼 이전
			//ioIndex + 2 는 현재꺼+1 까지니까
			step = stepElems[i];

			if (!step) continue;//만약 step에 값이 없다면 패스
			boundingRect = step.getBoundingClientRect();//현재 위치 출력

			//top 값이 10퍼센트보다 크고 80퍼센트보다 작으면
			if(boundingRect.top > window.innerHeight * 0.1 && 
			boundingRect.top < window.innerHeight * 0.8) {
				console.log(step.dataset.index)
				
				inactivate(currentItem.dataset.action);
				// graphicElems[step.dataset.index].classList.add('visible');
				currentItem = graphicElems[step.dataset.index];
				activate(currentItem.dataset.action);
			}
		}
	});

	window.addEventListener('load',() => {
		setTimeout(() => scrollTo(0,0), 100)
		
	});

	activate(); // 첫번째 이미지 바로 로딩

})();//익명함수 전역변수 사용하지 않기 위해. 보호하기위해.