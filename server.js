const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'client')))
.get('/', (request, response) => response.render('index.html'));




app.listen(3000, function() {
    console.log('server is running on port 3000');
});
