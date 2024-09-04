const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Set EJS as the template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse the body of POST requests
app.use(bodyParser.urlencoded({ extended: false }));

// Home route
app.get('/', (req, res) => {
    res.render('index');
});

// Form route
app.get('/form', (req, res) => {
    res.render('form');
});

// Submit route to handle form submission
app.post('/submit', (req, res) => {
    const message = req.body.message;
    res.send(`Message received: ${message}`);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
