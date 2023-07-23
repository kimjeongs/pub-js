const colors = [
	"#ef5777",
	"#575fcf",
	"#4bcffa",
	"#34e7e4",
	"#0be881",
	"#f53b57",
	"#3c40c6",
	"#0fbcf9",
	"#00d8d6",
	"#05c46b",
	"#ffc048",
	"#ffdd59",
	"#ff5e57",
	"#d2dae2",
	"#485460",
	"#ffa801",
	"#ffd32a",
	"#ff3f34"
  ];
  
  function btnClick() {
	const randomArr = [];
	for (let i = 0; i < 2; i++) {
	  	const rabdomExport = Math.floor(Math.random() * colors.length);
		if (randomArr.indexOf(rabdomExport) === -1) { //배열에 없으면 -1 반환함
			randomArr.push(rabdomExport);
		} else {
			i--; //함수 다시 실행
		}
	}
	const randomA = randomArr[0];
	const randomB = randomArr[1];

	document.body.style.background = `linear-gradient(${colors[randomA]},${colors[randomB]})`;
  }
  
  document.querySelector("button").addEventListener("click", btnClick);
  