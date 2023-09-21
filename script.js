/* const restaurant={
    name:"Electra Eats",
    location:"Abuja",
    categories:['Appetizers','Dinner'],
    mainMenu:['Rice n stew','Chips n dips', 'Beans'],
    order:function(menuIndex){
        return this.mainMenu[menuIndex]
    },
    openingHours:{
        thu:{
            open:12,
            close:22,
        },
        fri:{
            open:11,
            close:23,
        },
        sat:{
            open:0,
            close:24,
        },
    },
}
console.log(restaurant.categories)
console.log(restaurant.mainMenu[0])
console.log(restaurant.mainMenu[1])
// The concept of array destructuring just lets us call an item in an array without the use of index eg.
const [x,y,z]=restaurant.mainMenu
const [a,b]=restaurant.categories
// This above is array destructuring
console.log(x)
console.log(a)
const {
    name: restaurantName,
    openingHours:hours,
    categories:cat,
}=restaurant;
console.log(`Name:${restaurantName}, Hours:${hours}, Categories:${cat}`); */
/* const axios = require("axios");

// User's input
const userInput = "cheetah"; // Replace with the user's input

// API URL and API key (replace with your specific API URL and key)
const apiKey = "X9doKd70W2Gf+YxDj2kJaw==1c71KIvFoPuLzd1D";

const apiUrl = `https://api.api-ninjas.com/v1/animals?name=${userInput}`;

// Make the API request
axios
  .get(apiUrl, {
    headers: {
      "X-Api-Key": apiKey,
    },
    params: {
      name: userInput,
    },
  })
  .then((response) => {
    // Check if the API response status is 200 (OK) to determine if the input exists
    if (response.status === 200) {
      console.log(`"${userInput}" exists in the Animal API.`);
    } else {
      console.log(`"${userInput}" does not exist in the Animal API.`);
    }
  })
  .catch((error) => {
    console.error("Error:", error);
  });
 */
const checkWord=require('check-if-word');
const words = checkWord('en');
const axios = require("axios");
let counter = 5;
let score=0;
let highScore=0;
const randomLetter = String.fromCharCode(0 | (Math.random() * 26 + 97));
const start = document.querySelector
("#numbers");
const submit = document.querySelector("#submit");
const restart= document.querySelector('#restart');
console.log(randomLetter);
const inputs=document.querySelectorAll('.input');
const animals=inputs[1];
const Name=inputs[0];
const place=inputs[2];
const things=inputs[3];
console.log(animals.value)
const scoreEl=document.querySelector('#score');
const highEL=document.querySelector('#highScore');
const checkAnimal = async () => {
  try{
    const response= await axios.get(
      `http://localhost:3000/api/check?q=${animals.value}`
    );
    if (response.status === 200 && animals.value.toLowerCase().startsWith(randomLetter)){
      score++;
    }
    else if(response.status === 404 ){
      console.log(`error 404 page not found`)
    }
  } catch(error){
    console.error(`Error: ${error}`);
  }
}
function startClick() { 
  setInterval(myFunction, 1000);
    start.style.height = "70px";
    start.style.width = "300px";
    start.style.fontSize = "45px";
    start.style.justifyContent = "center";
    start.style.textAlign = "center";
    inputs.forEach(function(input){
      input.disabled=false;
    })
    submit.disabled=false;
    restart.disabled=false;
};

// let myCounter = setInterval(myFunction(), 1000);
document.querySelector("#numbers").addEventListener('click', function(){
  setInterval(myFunction, 1000);
  start.style.height = "70px";
  start.style.width = "300px";
  start.style.fontSize = "45px";
  start.style.justifyContent = "center";
  start.style.textAlign = "center";
  inputs.forEach(function(input){
    input.disabled=false;
  })
  submit.disabled=false;
  restart.disabled=false;
  
} );
function myFunction() {
    
  if (counter >= 0) {
    // document.getElementById("numbers").innerHTML = counter;
    document.querySelector('#numbers').textContent = counter;
    if (counter < 1) {
      start.style.backgroundColor = "green";
      start.textContent =`I Call On ${randomLetter.toUpperCase()}`;
    }
    counter--;
  }
}
submit.addEventListener('click', function(){
  inputs.forEach(function(input){input.disabled=true});
  submit.disabled=true;
  inputs.forEach(function(input){
    if(Name.value.toLowerCase().startsWith(randomLetter) && Name.value.length>=3) {
        score++;
    }
    if(animals.value.toLowerCase().startsWith(randomLetter)){
      checkAnimal()
    }
    if(place.value.toLowerCase().startsWith(randomLetter) && place.value.length>3){
      score++;
    }
    if(things.value.toLowerCase().startsWith(randomLetter) && words.check(things.value===true)){
      score++;
    }
    console.log(score)
    scoreEl.textContent=score
  });
  function updateHighScore(){
    highEL.textContent=highScore;
    if(score>highScore){  
      highScore++;
      highEL.style.fontWeight='bold'
      highEL.style.fontSize='larger'
    }
    else
      clearInterval(animationInterval)
  };
  let animationInterval=setInterval(updateHighScore,100);
})
