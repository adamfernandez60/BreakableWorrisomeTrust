let optionOne = document.querySelector(".option-one");
let optionTwo = document.querySelector(".option-two");
let optionThree = document.querySelector(".option-three");
let optionFour = document.querySelector(".option-four");

optionTwo.addEventListener("click", function(){
     optionTwo.style.display=  "block";
});

optionThree.addEventListener("click", function(){
     optionThree.style.display=  "block";
});

optionOne.addEventListener("click", function(){ 
  console.log("hi")
  body.style.backgroundImage = "url('https://www.ententechicago.com/wp-content/uploads/2022/12/dream-about-a-plane-crash.jpg')";
   optionThree.style.display=  "none";
   optionTwo.style.display=  "none";
   optionFour.style.display=  "none";
  
});



