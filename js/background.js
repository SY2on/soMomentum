const body= document.querySelector("body");

const imgSrc = [
  "0.jpeg",
  "1.jpeg",
  "2.jpeg",
  "3.jpeg",
  "4.jpeg",
  "5.jpeg",
  "6.jpeg",
  "7.jpeg",
  "8.jpeg",
  "9.jpeg"
]

const selectedImg = imgSrc[Math.floor(Math.random()*imgSrc.length)];

body.style.background=`url('img/${selectedImg}')` ;
body.style.backgroundSize="cover";