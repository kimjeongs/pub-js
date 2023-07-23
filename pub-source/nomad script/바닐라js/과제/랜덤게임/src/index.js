const gameForm = document.querySelector(".game");
const gameSetupRange = gameForm.querySelector(".game-setup__range input");
const gameSetupNumber = gameForm.querySelector(".game-setup__number input");
const arrange = document.querySelector(".arrange");
const result = document.querySelector(".result");

function onSubmit(e) {
	e.preventDefault();
	const gameSetupRangeValue = parseInt(gameSetupRange.value);
	const gameSetupNumberValue = parseInt(gameSetupNumber.value);

	if (gameSetupNumberValue > gameSetupRangeValue) {
		alert('0 이상 입력값 이하 수를 입력하세요')
	} else {
		arrange.querySelector(".user").innerText = gameSetupNumberValue;
		arrange.classList.remove("hidden");
	}

	const randomNum = Math.floor(Math.random() * gameSetupRangeValue) + 1;
	arrange.querySelector(".machine").innerText = randomNum;

	if(randomNum === gameSetupNumberValue) {
		result.innerText = "You win!"
	} else {
		result.innerText = "You lost!"
	}
}
gameForm.addEventListener("submit", onSubmit);
