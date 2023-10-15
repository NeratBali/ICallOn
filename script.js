// import checkWord from 'check-if-word';
// const words = checkWord('en');
let counter = 5;
let score=0;
let highScore=0;
let intervalId;
let randomLetter;
let validationResult; 
const start = document.querySelector
("#numbers");
const submit = document.querySelector("#submit");
const restart= document.querySelector('#restart');
const inputs=document.querySelectorAll('.input');
const Name=inputs[0];
const animals=inputs[1];
const place=inputs[2];
const things=inputs[3];
console.log(inputs[3])
let word;
const scoreEl=document.querySelector('#score');
const highEL=document.querySelector('#highScore');
let animationInterval=setInterval(updateHighScore,100);
function updateHighScore(){
  if(score > highScore){  
    highScore=score;
    highEL.style.fontWeight='bold'
    highEL.style.fontSize='larger'
    highEL.textContent=highScore;
  }
  else
    clearInterval(animationInterval)
};
function counterReset(){
  counter=5;
}
function randomLetterGen(){
  randomLetter = String.fromCharCode(0 | (Math.random() * 26 + 97));
}
function myFunction() {
  if (counter >= 0) {
    // document.getElementById("numbers").innerHTML = counter;
    document.querySelector('#numbers').textContent = counter;
    if (counter < 1) {
      start.style.backgroundColor = "green";
      start.textContent =`I Call On ${randomLetter.toUpperCase()}`;
      submit.disabled=false;
    }
    counter--;
  }
}
function validateWord(){
  const apiURL = "http://127.0.0.1:3000/validateWord";

  // Send the word to the server-side script for validation using the complete API URL
  fetch(apiURL, {
    method: "POST",
    body: JSON.stringify({ word }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((result) => {
      if (result.isValid) {
        console.log("The word is valid.");
        validationResult=true
      } else {
        console.log("The word is not valid.");
      }
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });
}
// function checkAnimal(animal){
//   const apiUrl=`http://127.0.0.1:8000/api/check?q=${animal}`;
//   fetch(apiUrl)
//     .then(response=>{
//       if(response.status===200){
//          score++;
//       }
//     })
//     .catch(error=>{
//       console.log(error)
//     })
// }
// let myCounter = setInterval(myFunction(), 1000);
document.querySelector("#numbers").addEventListener('click', function(){
  randomLetterGen()
  clearInterval(intervalId);
  intervalId = setInterval(myFunction, 500);
  start.style.height = "70px";
  start.style.width = "300px";
  start.style.fontSize = "45px";
  start.style.justifyContent = "center";
  start.style.textAlign = "center";
  inputs.forEach(function(input){
    input.disabled=false;
  })
  restart.disabled=false;
} );

submit.addEventListener('click', function(){
  word=things.value;
  validateWord()
  inputs.forEach(function(input){input.disabled=true});
  submit.disabled=true;
  console.log(randomLetter)
  if(Name.value.toLowerCase().startsWith(randomLetter) && Name.value.length>=3) {
    score++;
    console.log(`name${score}`)
  }
  if(place.value.toLowerCase().startsWith(randomLetter) && place.value.length>3){
     score++;
     console.log(`place${score}`)
     console.log(`Yup I'm not the problem`)
     console.log(word)
  }
  if(animals.value.toLowerCase().startsWith(randomLetter)){
    console.log('Yea')
    ++score;
    console.log(`animals${score}`)
    console.log(validationResult)  
  }
  if(word.toLowerCase().startsWith(randomLetter) && validationResult){
    ++score;
  }
  scoreEl.textContent=score;
  updateHighScore() 
  // console.log(score)
  });
  

document.querySelector('#restart').addEventListener('click', function(){
  randomLetterGen()
  clearInterval(intervalId);
  counterReset()
  intervalId = setInterval(myFunction, 500);/* 1000 milliseconds==1second */
  start.style.height = "70px";
  start.style.width = "300px";
  start.style.fontSize = "45px";
  start.style.justifyContent = "center";
  start.style.textAlign = "center";
  inputs.forEach(function(input){
    input.value=" ";
    input.disabled=false;
    
  })
  restart.disabled=false;
});