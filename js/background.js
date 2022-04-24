const body= document.querySelector("body");

const imgSrc = [
  "0.jpg",
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg"
]

const selectedImg = imgSrc[Math.floor(Math.random()*imgSrc.length)];

body.style.background=`url('img/${selectedImg}')` ;
body.style.backgroundSize="cover";