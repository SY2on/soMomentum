const clock = document.querySelector(".clock");

function getClock(){
  const date = new Date();
  const hour= date.getHours().toString().padStart(2,'0');
  const minute = date.getMinutes().toString().padStart(2,'0');
  const seconds = date.getSeconds().toString().padStart(2,'0');
  clock.innerText = `${hour}:${minute}`;
}
getClock();
setInterval(getClock, 1000);
