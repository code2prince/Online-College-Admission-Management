

function Login(){

    debugger;
    var userid=document.getElementById('userid').value;
    var password=document.getElementById('password').value;

    if(!userid && !password) {
        alert('Pleaes enter username and password');
    } else {
        // send data to server and wait for response

        const user = {
            email: userid,
            password: password
        };

        const reqObject = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        };
        
        const loginPromise = fetch('http://localhost:3000/loginFeature', reqObject);
        loginPromise.then(response => response.json())
        .then(result => console.log('after post call succed, data from server', result));
    }
}


