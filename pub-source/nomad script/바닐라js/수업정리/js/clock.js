const clock = document.querySelector("h2#clock");

function getClock() {
	const date = new Date();
	const hours = String(date.getHours()).padStart(2,"0");
	const minutes = String(date.getMinutes()).padStart(2,"0");
	const seconds = String(date.getSeconds()).padStart(2,"0");
	clock.innerText = `${hours}:${minutes}:${seconds}`;
}

//getHours()에는 padStart() 사용할 수 없음 문자로 변환하고 사용
getClock();
setInterval(getClock, 1000);


 