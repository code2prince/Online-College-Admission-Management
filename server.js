const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, 'client')))
.get('/', (request, response) => response.render('index.html'));

/***
 * GET >> to get the data from server
 * POST >> to send data to server (generally when we submit any form)
 * DELETE >> to send data to server (generally to delete any record)
 * PUT >> to send data to server (generally to update the record)
 * PATCH >> to send data to server (generally to do minor updates)
 * /
*/

const studentList = [
    {id: 1, name: 'prince'},
    {id: 2, name: 'Rajeev'},
    {id:3, name:'raj'},

];

app.get('/getStudetList', function(request, response){
    // resquest > which is coming from client, it contain all the info related to client
    // response > which is sent to client


    //send data to client
    response.send(studentList);
});

app.get('/getStudetList/:id', function(request, response){
    // resquest > which is coming from client, it coantain all the info related to clinet
    // response > which is sent to client

    console.log('print request params >>>>>>> ', request.params);
    const id = parseInt(request.params.id);
    const foundStudent = studentList.find((x) => x.id === id)

    if(foundStudent) {     
        //send data to client
        response.send(foundStudent);
    }
    else {
        response.send('student not found');
    }
});

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

    user=user.map(x => {
        if(x.username === request.body.username){
            const object={
                username: x.username,
                password: request.body.password,
            }
            return Object;
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


app.listen(3000, function() {
    console.log('server is running on port 3000');
});



