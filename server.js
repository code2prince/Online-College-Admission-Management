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
    console.log(userList.length);
    let userExist = false;
    for (i = 0; i < userList.length; i++) {
        if (userList[i].email === user.email) {
            userExist = true;
            console.log('user exist');
        }
        
    }
    if (userExist === true) {
        res.send({ msg: 'User already exist, please try with another email account',userList: userList });
    }
    else {
        userList.push(user);
        res.send({ msg: 'User successfully added' ,userList: userList});
    }

});




const studentList= [];

app.get('/getStudentList', (req, res) => {
    res.send(studentList);
});

app.post('/createStudent', (req, res) => {
    const student = req.body;
    studentList.push(student);

    res.send({ msg: 'Student successfully added' });
});


app.post('/login', (req, res) => {
    const user = req.body;
    // for(i=0; i<userList.length; i++){
    // if(x.userList==='email')
    // {
    //     console.log('user exist');
    // }
    // else

    // userList.push(user);
    // }

    res.send({ msg: 'User successfully added' });
});



app.post('/loginFeature', (req, res) => {
    const userLists = req.body;
    for(i=0; i<userLists.length; i++){
    if(x.userLists==='email')
    {
        console.log('user exist');
    }
    else

    userLists.push(user);
    }

    res.send({ msg: 'User successfully added' });
});


//
app.post('/formFeature', (req, res) => {
    const studentLists = req.body;
    for(i=0; i<studentLists.length; i++){
    if(x.studentLists==='email')
    {
        console.log('user exist');
    }
    else

    studentLists.push(student);
    }

    res.send({ msg: 'User successfully added' });
});

//


app.listen(3000, function () {
    console.log('server is running on port 3000');
});