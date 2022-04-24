const todoInputForm = document.querySelector(".todo-input");
const todoInput = todoInputForm.querySelector("input");
const todoList = document.querySelector(".todo-list");

const TODOS_KEY = "todos";

let toDos = [];

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos){
  toDos = JSON.parse(savedToDos);
  toDos.forEach((item) => paintToDo(item));
}

function saveToDo(){
  localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function paintToDo(todo){
  const li = document.createElement("li")
  li.id = todo.id;
  const span = document.createElement("span");
  span.innerText=todo.content;
  const button = document.createElement("button");
  button.addEventListener("click", deleteToDo);
  button.innerText="x";
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function addToDo(){
  const newToDoObj = {id: Date.now(), content: todoInput.value};
  toDos.push(newToDoObj);
  saveToDo();
}

function deleteToDo(event){
  const targetToDo = event.target.parentElement;
  toDos=toDos.filter((toDos)=> toDos.id!==parseInt(targetToDo.id));
  saveToDo();
  targetToDo.remove();
}

todoInputForm.addEventListener("submit",addToDo);