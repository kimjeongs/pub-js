const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODO_KEY = "todos";

let toDos = [];

function saveTodos() {
	localStorage.setItem(TODO_KEY, JSON.stringify(toDos));
}
// stringify : js Object, array, js어떤 코드든 string으로 바꿔줌

function deleteToDo(event) {
	const li = event.target.parentElement;
	li.remove();
	toDos = toDos.filter((item) => item.id !== parseInt(li.id));
	// function sexyFilter(item) { return item.id !== }
	// toDos.filter(sexyFilter);
	//filter 안의 함수가 true여야 리턴해서 유지됨 false면 제외됨 
	//지우는게 아니라 새 배열을 만듦
	saveTodos(); //스토리지에 새로 저장
}

function paintToDo(newTodo) {
	const li = document.createElement("li");
	li.id = newTodo.id;
	const span = document.createElement("span");
	span.innerText = newTodo.text;
	const button = document.createElement("button");
	button.innerText ="X";
	button.addEventListener("click", deleteToDo);
	li.appendChild(span);
	li.appendChild(button);
	toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
	event.preventDefault();
	const newTodo = toDoInput.value;
	toDoInput.value = "";
	const newTodoObj = {
		text: newTodo,
		id: Date.now(),//밀리초 알려주는 함수를 아이디로 이용
	};
	toDos.push(newTodoObj);
	paintToDo(newTodoObj);
	saveTodos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// function sayHello(item) {
// 	console.log("this is the turn of", item);
// }
// arrow function : (item) => "this is the turn of", item

const savedToDos = localStorage.getItem(TODO_KEY);

if (savedToDos !== null) {
	const parsedToDos = JSON.parse(savedToDos);
	//parse 오브젝트, 배열 등 으로 바꿔줌
	toDos = parsedToDos;//스토리지에 저장되어 있는 이전 리스트를 배열에 불러옴
	// parsedToDos.forEach((item) => "this is the turn of", item);
	parsedToDos.forEach(paintToDo);
	//forEach 는 배열에서 사용하는 함수 인자로 배열 item을 가져옴 
}
