let optionOne = document.querySelector(".option-one");
let optionTwo = document.querySelector(".option-two");
let optionThree = document.querySelector(".option-three");
let optionFour = document.querySelector(".option-four");
let body = document.querySelector("body");
let h1 = document.querySelector("h1");





optionOne.addEventListener("click", function(){ 
   optionThree.style.display=  "none";
   optionTwo.style.display=  "none";
   optionFour.style.display=  "none";
  optionOne.style.display=  "none";
  body.style.backgroundImage= "url('https://gifdb.com/images/high/car-dashcam-explosion-plane-crash-6ee2ptpfhmjburvw.webp')";
  h1.innerHTML= "While Dom is flying to his penthouse in north korea his plane gets shot down by a north korean missile and he dies.";
  
});






