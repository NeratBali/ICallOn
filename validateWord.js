const express = require('express');
const app = express(); 
const checkIfWord = require('check-if-word');
const cors = require('cors'); // Import the 'cors' middleware


app.use(express.json());
const wordLanguage = checkIfWord('en');

// Use the 'cors' middleware to allow cross-origin requests
app.use(cors());

app.post('/validateWord', (req, res) => {
    const word = req.body.word;

    // Use the check-if-word package to validate the word
    const isValid = wordLanguage.check(word);

    // Set the 'Access-Control-Allow-Origin' header to allow requests from all origins
    res.header('Access-Control-Allow-Origin', '*');

    // Return the result as JSON
    res.json({ isValid });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
