const express = require('express');
const path = require('path');
const { send } = require('process');

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, 'client')))
    .get('/', (request, response) => response.render('index.html'));

const userList = [
    {
        email: "princekumarsharma365@gmail.com",
        mobile: "6200978239",
        name: "SHRUTI SHARMA",
        password: "12345",
        type:"Student",
    },

    {
        email: "admin@gmail.com",
        mobile: "6200978239",
        name: "SHRUTI SHARMA",
        password: "12345",
        type: "Admin"
    },
    {
        email: "amit@gmail.com",
        mobile: "6200978239",
        name: "amit SHARMA",
        password: "12345",
        type: "Admin"
    },
];



app.get('/getUserlist', (req, res) => {
    res.send(userList);
});

app.post('/signUpUser', (req, res) => {
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
         const response={
            msg: 'User already exist, please try with another email account',
            isRegistered: false,
         }
         res.send(response);
    }
    else {
        userList.push(user);
        const response = { msg: 'User successfully added' , isRegistered: true, userid:user.email};
        res.send(response);
    }

});


////////

const studentList= [];

app.get('/getStudentList', (req, res) => {
    res.send(studentList);
});

app.post('/enrollStudentApplication', (req, res) => {
    const student = req.body;
    studentList.push(student);

    res.send({ msg: 'Student successfully added' });
});

////////

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

// login 

app.post('/loginFeature', (req, res) => {
    const user = req.body;

   // 1st way
    var loginSuccess = false;
    for(var i=0; i<userList.length; i++) {
        if(userList[i].email === user.email  && userList[i].password === user.password && userList[i].type===user.type){
            loginSuccess = true;
        } 
    }
    if(loginSuccess === true) {
        res.send({loginSuccess:true ,userid:user.email})
    } else {
        res.send({loginSuccess:false})
    }

    // // 2nd way
    // var index = userList.findIndex(u => (u.email === user.email && u.password === user.password) )
    // if(index!==-1) {
    //     res.send(userList[index])
    // } else {
    //     res.send('login failed')
    // }


    // // 3rd way
    // var foundUser = userList.find(u => (u.email === user.email && u.password === user.password) )
    // if(foundUser) {
    //     res.send(foundUser)
    // } else {
    //     res.send('login failed')
    // }


    // // 4th way
    // var foundUserArr = userList.filter(u => (u.email === user.email && u.password === user.password) )
    // if(foundUserArr.length > 0) {
    //     res.send(foundUserArr[0])
    // } else {
    //     res.send('login failed')
    // }


    //5th way
    /*
    var isLogin = userList.some(u => (u.email === "amit@gmail.com" && u.password === "12345") );
    if(isLogin) {
        res.send('success')
    }
    if(isLogin) {
        res.send('fail')
    }
    */

    // send back LOGIN FAIL MSG if user not found

    // else create an object with {email, type}
    
});


/////////////////////////////////////////////////////////////////////
const viewList= [];

app.get('/getviewtList', (req, res) => {
    res.send(viewList);
});

app.post('/viewStudentApplication', (req, res) => {
    const student = req.body;
    //studentList.push(student);

    res.send({ msg: 'Student successfully added' });
});


app.post('/formFeature', (req, res) => {
    const viewList = req.body;
    for(i=0; i<viewList.length; i++){
    if(x.viewList==='email')
    {
        console.log('user exist');
    }
    else

    studentLists.push(student);
    }

    res.send({ msg: 'User successfully added' });
});


// viewStudentApplication

const studentApplicationList= [];

app.get('/getStudentList', (req, res) => {
    res.send(studentApplicationList);
});

app.post('/getStudentList', (req, res) => {
    const student = req.body;
    studentApplicationList.push(student);

    res.send({ msg: 'Student apllication successfully added' });
});



app.listen(3000, function () {
    console.log('server is running on port 3000');
});