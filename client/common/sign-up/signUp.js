
let userList = [];


function createUser(){
    const name = document.getElementById('name').value;
    const userid = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const isPasswordOK = validatePassword(password);

    const passwordMatched = password === confirmPassword;

    if(!userid && !password) {
        console.log('Please enter username and password');
        return;
    }
    
    if(!passwordMatched) {
        console.log('password and confirm password doesnt match');
        return;
    }

    // if(!isPasswordOK) {
    //     console.log('password sohuld have one number, 1 special character and length between 8 to 16');
    //     return;
    // }

    const user = {
        name: name,
        email: userid,
        mobile: mobile,
        password: password,
    };

    const reqObject = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };
    
    const userPromise = fetch('http://localhost:3000/createUser', reqObject)
    userPromise.then(response => response.json()).then(result => console.log('after post call succed, data from server', result));
}

function validatePassword(password) {

    const format = /[0-9 `@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    const isPasswordValid = format.test(password);

    const length = password.length;
    const iStrongPassword =  false; 
    

    if(length >=8 && length <=16){
        iStrongPassword = true;
    } 


    if(isPasswordValid && iStrongPassword) {
        return true; 
    } else {
        return false;
    }
}

function getUserlist() {
    fetch('http://localhost:3000/getUserlist')
    .then(response => response.json())
    .then(result => {
        userList = result;
        printUser(userList);
    });
}

function printUser(users) {
    
    const userlistContainer = document.getElementById('userlist');
    userlistContainer.innerHTML = '';


    users.forEach(user => {
        const h1 = document.createElement('h1');
        h1.innerText = user.name;
        userlistContainer.appendChild(h1);
    });


    
}



