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

function getHours(date){
  h=date.getHours();
  if( h>=5 && h<12){
    return "mornig";
  } else if ( h>=12 && h<17){
    return "afternoon";
  }else if (h>=17 && h<21){
    return "evening";
  }else{
    return "night";
  }
}

function paintingGreeting(){
  greeting.innerText=`Good ${getHours(new Date())}, ${username}`
}

function loginFunc(){
  localStorage.setItem(USERNAME_KEY,enterName.value);
}

loginForm.addEventListener("submit",loginFunc);