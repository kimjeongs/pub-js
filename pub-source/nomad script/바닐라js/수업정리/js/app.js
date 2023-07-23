const title = document.querySelector(".hello h1");

function handle() {
	title.style.color="blue";
}

// title.addEventListener("click", handle);
title.onclick = handle;


function hadleWindow() {
	document.body.style.backgroundColor = "tomato"
}

window.addEventListener("resize",hadleWindow);

function hadleCopy() {
	alert("copier!")
}
window.addEventListener("copy",hadleCopy);

function hadleOffline() {
	alert("no wifi")
}

function hadleOnline() {
	alert("on wifi")
}

//wifi on off 확인
window.addEventListener("offline",hadleOffline);
window.addEventListener("online",hadleOnline);


//
const h1 = document.querySelector("div h1");

function handleClick() {
	// const clickClass = "active";

	// if(h1.classList.contains(clickClass)) {
	// 	h1.classList.remove(clickClass);
	// } else {
	// 	h1.classList.add(clickClass)
	// }
	h1.classList.toggle("active");
}
h1.addEventListener("click",handleClick);

const player = {
	name : "nico",
	age : 21,
	sayHello : function(who) {
		console.log(`hello ${who} nice to meet you`);
	}
}
player.sayHello("lynn"); 
player.sexy = "soon";

console.log(player);

const calulator = {
	plus : function (a, b) {
		return a + b;
	},
	minus : function (a, b) {
		return a - b;
	},
	times : function (a, b) {
		return a * b;
	},
	divide : function (a, b) {
		return a / b;
	},
	power : function (a, b) {
		return a ** b;
	},
}

//return 후엔 함수 종료

const plusResult = calulator.plus(10, 2);
const minusResult = calulator.minus(plusResult, 2);
const timesResult = calulator.times(10, minusResult);
const divideResult =  calulator.divide(timesResult, plusResult);
const powerResult = calulator.power(10, divideResult);

console.log (plusResult, minusResult, timesResult, divideResult, powerResult);


isNaN(); //NaN인지 알려주는 함수