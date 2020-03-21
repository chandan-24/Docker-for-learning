const express = require('express');
const app = express();
const greetings = [
    'Hello ',
    'Hello There ',
    'Well Hello There ',
    'Greetings ',
    'Alrighty then ',
    'Hola ',
    'Hey There ',
    'What\'s up? ',
    'Good day to you, ',
];

app.get('/', (req, res) => {
    res.send('Welcome Guest!');
});

app.get('/:name', (req, res) => {
    const randomNumber = Math.floor( Math.random() * greetings.length );
    const name = req.params.name;
    res.send(greetings[randomNumber] + name + '!');
});

app.listen(8080, () => {
    console.log('Listening on port 8080');
})