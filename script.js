let optionOne = document.querySelector(".option-one");
let optionTwo = document.querySelector(".option-two");
let optionThree = document.querySelector(".option-three");
let optionFour = document.querySelector(".option-four");
let optionFive = document.querySelector(".option-five");
let optionSix = document.querySelector(".option-six");
let optionSeven = document.querySelector(".option-seven");
let optionEight = document.querySelector(".option-eight");
let body = document.querySelector("body");
let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");





optionOne.addEventListener("click", function(){ 
   optionThree.style.display=  "none";
   optionTwo.style.display=  "none";
   optionFour.style.display=  "none";
  optionOne.style.display=  "none";
  optionFive.style.display=  "none";
  optionSix.style.display=  "none";
  optionSeven.style.display=  "none";
  optionEight.style.display=  "none";
  body.style.backgroundImage= "url('https://gifdb.com/images/high/car-dashcam-explosion-plane-crash-6ee2ptpfhmjburvw.webp')";
  h1.innerHTML= "While Dom is flying to his penthouse in north korea his plane gets shot down by a north korean missile and he dies.";
  h2.style.display=  "none";
});

  optionTwo.addEventListener("click", function(){ 
     optionThree.style.display=  "none";
     optionTwo.style.display=  "none";
     optionFour.style.display=  "none";
    optionOne.style.display=  "none";
    optionFive.style.display=  "block";
     optionSix.style.display=  "block";
     optionSeven.style.display=  "block";
    optionEight.style.display=  "block";
    body.style.backgroundImage= "url('https://www.palms.com/sites/default/files/styles/coh_x_large/public/2023-05/Palms_33205Livingroom_v3.jpg?itok=SOkN3_qR')";
    h1.innerHTML= "Dom arrives at his penthouse in Las Vegas and watches some tv";
     h2.innerHTML= "Choose what happens to dom whie inside his penthouse";
    });

    optionThree.addEventListener("click", function(){ 
       optionThree.style.display=  "none";
       optionTwo.style.display=  "none";
       optionFour.style.display=  "none";
      optionOne.style.display=  "none";
      body.style.backgroundImage= "url('https://www.palms.com/sites/default/files/styles/coh_x_large/public/2023-05/Palms_33205Livingroom_v3.jpg?itok=SOkN3_qR')";
      h1.innerHTML= "Dom arrives at his penthouse in Russia and watches some tv";
       h2.innerHTML= "Choose what happens to dom whie inside his penthouse";

  
});

optionFour.addEventListener("click", function(){ 
   optionThree.style.display=  "none";
   optionTwo.style.display=  "none";
   optionFour.style.display=  "none";
  optionOne.style.display=  "none";
  body.style.backgroundImage= "url('https://www.palms.com/sites/default/files/styles/coh_x_large/public/2023-05/Palms_33205Livingroom_v3.jpg?itok=SOkN3_qR')";
  h1.innerHTML= "Dom arrives at his penthouse in Russia and watches some tv";
   h2.innerHTML= "Choose what happens to dom whie inside his penthouse";
  });






