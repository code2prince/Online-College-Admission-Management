const express = require('express');
const path = require('path');

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
        type:"student",
    },

    {
        email: "admin@gmail.com",
        mobile: "6200978239",
        name: "SHRUTI SHARMA",
        password: "12345",
        type: "admin"
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
        res.send({ msg: 'User already exist, please try with another email account',userList: userList });
    }
    else {
        userList.push(user);
        res.send({ msg: 'User successfully added' ,userList: userList});
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

//////////

// app.post('/login', (req, res) => {
//     const user = req.body;
//     // for(i=0; i<userList.length; i++){
//     // if(x.userList==='email')
//     // {
//     //     console.log('user exist');
//     // }
//     // else

//     // userList.push(user);
//     // }

//     res.send({ msg: 'User successfully login' });
// });


//console.log(userList[0]);
app.post('/loginFeature', (req, res) => {
    const user = req.body;
    var flag=false;
    for(i=0; i<userList.length; i++){
        
        if(user.userList==='email' && user.userList==='password')
        {
            //console.log('user exist');
            res.send({ msg: 'User successfully login' });
            return flag=true;
        }
        else
        {
            res.send({msg:'username and password not matching please try with correct userid and password'});
            
        }
    }
    return flag;
    
});



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