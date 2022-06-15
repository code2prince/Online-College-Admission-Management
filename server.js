const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, 'client')))
.get('/', (request, response) => response.render('index.html'));

const userList = [];

<<<<<<< HEAD
    //send data to client
    response.send(studentList);
=======

app.get('/getUserlist', (req, res) => {
    res.send(userList);
>>>>>>> 053ac3de8b5d835f24dfe52979eff9efe707d2ee
});

app.post('/createUser', (req, res) => {
    const user = req.body;
    userList.push(user);

    res.send({msg: 'User successfully added'});
});

<<<<<<< HEAD
app.post('/enrollStudent', function(request, response){
    //var formData = request.body;
   
    const student=request.body;
    studentList.push(student);
    // const data={
    //     result:studentList
    // }
    console.log('student list ================ ', studentList);
    response.send({data: studentList });
});

app.put('/putExample', function(request, response){
    //var formData = request.body;
    console.log('req body from POST call ================ ', request.body);
    response.send(request.body);
});


app.delete('/deleteExample', function(request, response){
    //var formData = request.body;

    const student=request.body;
    studentList.pop(student);

    console.log('req body from POST call ================ ', studentList);
    response.send({data: studentList});
});


let user=[{
    username:"prince",
    password: 12345,
},
{
    username:"raj",
    password:12345,
}]

app.get('/getUser', function(request,response){
    response.send(user);
})

app.get('/getUser/:user', function(request,response){
   // response.send(user);

    const abc=request.params.user;
    const userfind= user.find((x)=> x.username === abc);
    if(userfind){
        response.send(userfind);
    }
    else{
        response.send('user not found');
    }
})

app.post('/enrollusername', function(request, response){
   
    const userid=request.body;
    user.push(userid);
    
    console.log('enroll username list ........... ', user);
    response.send({data: user });
});


app.put('/putUser',function(request, response){
    console.log(typeof request.body.username, request.body.password);

    //user = user.filter(x => x.username !== request.body.username);

    user=user.map(x => {
        if(x.username === request.body.username){
            const object={
                username: x.username,
                password: request.body.password,
            }
            return object;
        }
        return x;
    })
    console.log(user);
    response.send({ message: 'Password updated'});
});

app.delete('/deleteUser', function(request, response){
    console.log(typeof request.body.username, request.body.password);
    user= user.filter(x => x.username !== request.body.username);

    console.log(user);
    response.send({msg: 'user deleted'});
});
=======
>>>>>>> 053ac3de8b5d835f24dfe52979eff9efe707d2ee

app.patch('/patchUser',function(request, response){
    console.log(typeof request.body.username, request.body.password);

    //user = user.filter(x => x.username !== request.body.username);

    user=user.map(x => {
        if(x.username === request.body.username){
            const object={
                username: x.username,
                password: request.body.password,
            }
            return object;
        }
        return x;
    })
    console.log(user);
    response.send({ message: 'Password updated'});
});


let enrollStudentForm=[{
    
    address: "Chennai",
    dateofbirth: "2001-06-15",
    email: "sharma365@gmail.com",
    fathername: "Amit",
    gender: "male",
    id: 1,
    marks: "below 60",
    mothername: "Sita",
    name: "Amol",
    number: "8888888888",
    occupation: "Bussiness",
    qualification: "GRADUATION",
    yeargap: "yes",
},
{
    address: "Chennai",
    dateofbirth: "2001-03-18",
    email: "princekumarsharma365@gmail.com",
    fathername: "Manoj Sharma",
    gender: "male",
    id: 2,
    marks: "above 60",
    mothername: "Asha Devi",
    name: "Prince Sharma",
    number: "8873091666",
    occupation: "Bussiness",
    qualification: "12th(HSC/INTERMEDIATE)",
    yeargap: "no",
},
{
    address: "Patna",
    dateofbirth: "2001-03-08",
    email: "rishiraj@gmail.com",
    fathername: "Ram Yadav",
    gender: "male",
    id: 3,
    marks: "above 60",
    mothername: "Sita ",
    name: "Rishi raj",
    number: "6254075962",
    occupation: "farmer",
    qualification: "Graduation",
    yeargap: "no",
},
{
    address: "Muzzafarpur",
    dateofbirth: "2001-03-15",
    email: "rshinha20320@gmail.com",
    fathername: "Amit Rai",
    gender: "male",
    id: 4,
    marks: "above 60",
    mothername: " Saraswati Devi",
    name: "Raushan",
    number: "9135045962",
    occupation: "farmer",
    qualification: "Graduation",
    yeargap: "yes",
},
{
    address: "Ranchi",
    dateofbirth: "2001-03-07",
    email: "saroj123@gmail.com",
    fathername: "Ramesh Mandal",
    gender: "male",
    id: 5,
    marks: "above 60",
    mothername: "Ankita Mandal",
    name: "Saroj Mandal",
    number: "9898987596",
    occupation: "Bussiness",
    qualification: "12th(HSC/INTERMEDIATE)",
    yeargap: "yes",
},
{
    address: "Gujrat",
    dateofbirth: "1999-09-08",
    email: "rksharma123@gmail.com",
    fathername: "Rajesh Sharma",
    gender: "male",
    id: 6,
    marks: "below 60",
    mothername: "Kushum Devi",
    name: "Rahul Sharma",
    number: "7942253655",
    occupation: "Service",
    qualification: "GRADUATION",
    yeargap: "yes",
},
{
    address: "Raipur",
    dateofbirth: "2000-07-06",
    email: "anujkumar888@gmail.com",
    fathername: "Anil Sharma",
    gender: "male",
    id: 7,
    marks: "below 60",
    mothername: "Mira Devi",
    name: "Anuj Sharma",
    number: "9644425365",
    occupation: "Service",
    qualification: "GRADUATION",
    yeargap: "no",
},
{
    address: "Siwan",
    dateofbirth: "2000-01-14",
    email: "anujkumar888@gmail.com",
    fathername: "Manoj sharma",
    gender: "female",
    id: 8,
    marks: "below 60",
    mothername: "Asha Devi",
    name: "Shruti Sharma",
    number: "6200975252",
    occupation: "Bussiness",
    qualification: "GRADUATION",
    yeargap: "no",
},
{
    address: "Ranchi",
    dateofbirth: "2001-05-09",
    email: "anchalsharma567@gmail.com",
    fathername: "Upendra Sharma",
    gender: "female",
    id: 9,
    marks: "below 60",
    mothername: "Nilu Sharma",
    name: "Anchal Sharma",
    number: "8748854522",
    occupation: "Bussiness",
    qualification: "GRADUATION",
    yeargap: "no",
},
{
    address: "Bhilai",
    dateofname: "Anil Sharma",
    gender: "female",
    id: 10,
    marks: "below 60",
    mothername: "Mira Sharma",
    name: "Jyoti Sharma",
    number: "9987854125",
    occupation: "Bussiness",
    qualification: "Post-Graduation",
    yeargap: "no",
}
]

app.get('/getEntroll', function (request,response){
    response.send(enrollStudentForm);
})
app.get('/getEnroll/:enrollStudentForm' , function(request,response){
    
    const enroll=request.params.enrollStudentForm;
    const enrollStudentFormFind = enrollStudentForm.find((x)=> x.name=== enroll);
    if(enrollStudentFormFind){
        response.send(enrollStudentFormFind);
    }
    else{
        response.send('enroll student not found');
    }

})

app.post('/enrollStudentForm', function(request, response){
   
    const enrollFormData=request.body;
    enrollStudentForm.push(enrollFormData);
    
    console.log('enroll student  list ........... ', enrollStudentForm);
    response.send({data: enrollStudentForm });
});

app.listen(3000, function() {
    console.log('server is running on port 3000');
});



