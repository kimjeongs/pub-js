const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "3bbc29b5718f3f165e47f38ef8c15a86";

function onGeoOk(position) { //인자로 정보를 받음
	const lat = position.coords.latitude;//위도
	const lon = position.coords.longitude;//경도
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
	fetch(url)
    .then((response) => response.json())
    .then((data) => {
		city.innerText = data.name;
		weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError() {
	alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);