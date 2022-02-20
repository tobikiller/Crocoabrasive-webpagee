const btnToggle = document.getElementById("toggle-btn")
const navLink = document.querySelector(".navbar")
const btn1 = document.querySelector(".btn-1")
const btn2 = document.querySelector(".btn-2")

btnToggle.addEventListener("click", function(){
   navLink.classList.toggle("show")
   btn1.classList.toggle("show-btn")
   btn2.classList.toggle("show-btn")
   btn1.classList.toggle("show-rotate1")
   btn2.classList.toggle("show-rotate2")
})