const loginForm = document.querySelector(".login");
const enterName = loginForm.querySelector("input");
const main = document.querySelector(".main");
const greeting = main.querySelector(".greeting");

const USERNAME_KEY = "username";
const HIDDEN_CLASNAME = "hidden";

const username = localStorage.getItem(USERNAME_KEY)

if ( username == null ){
  loginForm.classList.remove(HIDDEN_CLASNAME);
} else {
  main.classList.remove(HIDDEN_CLASNAME);
  paintingGreeting();
}

function paintingGreeting(){
  greeting.innerText=`hello, ${username}`
}

function loginFunc(){
  localStorage.setItem(USERNAME_KEY,enterName.value);
}

loginForm.addEventListener("submit",loginFunc);