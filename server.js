const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, 'client')))
.get('/', (request, response) => response.render('index.html'));

const userList = [];


app.get('/getUserlist', (req, res) => {
    res.send(userList);
});

app.post('/createUser', (req, res) => {
    const user = req.body;
    userList.push(user);

    res.send({msg: 'User successfully added'});
});



app.listen(3000, function() {
    console.log('server is running on port 3000');
});