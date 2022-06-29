
var userDatabase = [
    { 
        name: 'prince', 
        email: 'prince@gmail.com', 
        phone: 324523453, 
        password: 'prince' 
    },
    { 
        name: 'Rajeev', 
        email: 'Raj@gmail.com', 
        phone: 84365435, 
        password: 'raj' 
    },
];

function Login(user){

    
    // var userid=document.getElementById('userid').value;
    // var password=document.getElementById('password').value;

    if(!user.email && !user.password) {
        alert('Pleaes enter username and password');
    } else {
        var foundItem = userDatabase.find(function(item){
            return item.email ===  user.email && item.password === user.password;
        });
        if(foundItem) {
            console.log('you are successfully loggedIN');
            return true;
        } else {
            console.log('username & password not found in database, please enter correct detail');
            return false;
        }
    }
}
user=
{ 
    
    email: 'prince@gmail.com', 
    password: 'prince' 
},
Login(user);


/*
this function should return true if details are valid or it should
*/
function validatePassword() {
    var password = 'a@123'; //document.getElementById('password').value;
    var format = /[0-9`@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    var isPasswordValid = format.test(password);
    var length = password.length;
    if(isPasswordValid) {
        console.log('password is in valid format'); 
    } else {
        console.log('password is not in valid format, use atleaset one number and one special character'); 
    }
    if(length >=8 && length <=16){
        console.log('password is strong length'); 
    } else {
        console.log('password must be of length between 8 to 16'); 
    }
}
