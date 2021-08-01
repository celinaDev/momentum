const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(e) {
    const li = e.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(e) {
    e.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj); // Array에 넣기
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(item) {
    console.log("this is turn of item", item);
}

const savedToDos = localStorage.getItem(TODOS_KEY);
if (saveToDos != null) {
    const parsedToDos = JSON.parse(savedToDos); // ["a", "b"]
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo); // arrow function을 사용해도 무관
    //parsedToDos.forEach((item) => console.log('this is turn of item', item))
    // application의 parsedToDos의 Array값을 한번씩 실행 시켜줌, paintToDo({text: "a", id: 1212121})
    // forEach는 각각의 item을 줘 이제는 item이 object가 되는 것
}

// 우리가 하고 싶은 것은 실제로 Array에서 리스트를 지우는게 아니야.
// 지우고 싶은 item을 빼고 새 Array를 만드는 거야 - filter 함수

