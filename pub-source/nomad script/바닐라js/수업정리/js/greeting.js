const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


//처음 방문자
function onLoginSubmit(event) {
	// console.dir(loginInput)
	event.preventDefault(); //submit event 새로고침 막음
	const userName = loginInput.value;
	localStorage.setItem(USERNAME_KEY,userName);
	loginForm.classList.add(HIDDEN_CLASSNAME);
	paintGreetings(userName);
}
function paintGreetings(userName) {
	// greeting.innerHTML = "Hellog " + userName;
	greeting.innerHTML = `Hello ${userName}`;
	greeting.classList.remove(HIDDEN_CLASSNAME);
}

//기존 방문자
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
	//show form
	loginForm.classList.remove(HIDDEN_CLASSNAME);
	loginForm.addEventListener("submit",onLoginSubmit);
} else {
	//show h1
	paintGreetings(savedUsername)
}