// server.js

const express = require('express');
const cors = require('cors'); // CROSS ORIGIN RESSOURCE SHARING
const bodyParser = require('body-parser');
const article = require('./routes/article');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Use routes
app.use('/articles', article);

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
