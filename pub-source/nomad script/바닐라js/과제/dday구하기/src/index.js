const clockTitle = document.querySelector(".js-clock");

function clock() {
	const christmas = new Date("2022-12-25");
	const today = new Date();
	const dday = christmas - today;

	const ddayDay = String(Math.floor(dday / (1000 * 60 * 60 * 24))).padStart(2,"0");
	const ddayHour = String(Math.floor((dday / (1000 * 60 * 60)) % 24)).padStart(2,"0");
	const ddayMinutes = String(Math.floor((dday / (1000 * 60)) % 60)).padStart(2,"0");
	const ddaySeconds = String(Math.floor((dday / 1000) % 60)).padStart(2, "0");

	clockTitle.innerText = `${ddayDay}d ${ddayHour}h ${ddayMinutes}m ${ddaySeconds}s`;}

clock();
setInterval(clock, 1000);

//1초 1000
//1분 1000 * 60
//1시간 1000 * 60 * 60
//1일 1000* 60 * 60 * 24
