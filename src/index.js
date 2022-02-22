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

// Carousel Element section

let slider = document.getElementById("slider")
const nextBtn = document.getElementById("next-btn")
const prevBtn = document.getElementById("prev-btn")
let sliderWidth = slider.offsetWidth;
const sliderList = document.querySelector(".sliderwrap")
let count = 1;
const items = sliderList.querySelectorAll("li").length;

window.addEventListener("resize", function(){
   sliderWidth = slider.offsetWidth
   console.log(sliderWidth);
})


function prevSlide(){
    if(count > 1){
       count = count -2 
     sliderList.style.left = "-" + count * sliderWidth + "px"
     count++
    }else if(count = 1){
       count = items -1
       sliderList.style.left = "-" + count * sliderWidth + "px"
       count++
    }
   
  
}

function nextSlide(){
   if(count < items){
      sliderList.style.left = "-" + count * sliderWidth + "px"
     count++
   }else if(count = items){
      sliderList.style.left = "0px"
      count = 1
   } 
}

prevBtn.addEventListener("click", function(){
   prevSlide()
})

nextBtn.addEventListener("click",function(){
   nextSlide()
})