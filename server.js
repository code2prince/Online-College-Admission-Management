const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, 'client')))
    .get('/', (request, response) => response.render('index.html'));

const userList = [];
const userApplications = [];


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




//
app.post('/loginFeature', (req, res) => {
    const user = req.body;
    console.log(userList.length);
    let userExist = false;

    /*
    [
        {
            email: "raj@mail.com"
            mobile: "2343124"
            name: "rajeev"
            password: "1111"
        },
        {
            email: "prince@mail.com"
            mobile: "2343124"
            name: "prince"
            password: "1111"
        }
    ]
    */


    for (i = 0; i < userList.length; i++) {
        if (userList[i].email === user.email && userList[i].password === user.password) {
            userExist = true;
            console.log('user exist');
        }
        
    }
    if (userExist === true) {
        res.send({ msg: 'Login successful' });
    }
    else {
        res.send({ msg: 'Login failed, please try with correct username and password' });
    }

});
//

const studentLists = [];

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



app.listen(3000, function () {
    console.log('server is running on port 3000');
});