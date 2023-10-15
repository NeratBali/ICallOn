/* const express= require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path'); // Import the path module
const port=3000; 
let connectedPlayers={};

const app = express();
const server = http.createServer(app);
const io = socketIo(server); */
/* const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path'); // Import the path module

const app = express();
const server = http.createServer(app);
const io = socketIo(server); */
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
// Import the check-if-word module
const checkWord = require('check-if-word');

// Create an instance of the module with a language (e.g., 'en' for English)
const words = checkWord('en');

// Now you can use the 'words' instance
if (words.check('Paris')) {
  console.log('The word exists.');
} else {
  console.log('The word does not exist.');
}
