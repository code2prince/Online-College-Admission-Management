const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'client')))
.get('/', (request, response) => response.render('index.html'));

// server.get('/', function(request, response){
//     var student = {
//         id: 1, 
//         name: 'prince'
//     }
//     response.send(student);
// });

app.listen(3000, function() {
    console.log('server is running on port 3000');
});
