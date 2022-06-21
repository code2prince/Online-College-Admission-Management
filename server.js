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
    for(i=0; i<userList.length; i++){
    if(x.userList==='email')
    {
        console.log('user exist');
    }
    else

    userList.push(user);
    }

    res.send({msg: 'User successfully added'});
});

const studentList= [];

app.get('/getStudentList', (req, res) => {
    res.send(studentList);
});

app.post('/createStudent', (req, res) => {
    const student = req.body;
    studentList.push(student);

    res.send({msg: 'Student successfully added'});
});



app.listen(3000, function() {
    console.log('server is running on port 3000');
});