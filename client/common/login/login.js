function Login(){
    debugger;
    var userid=document.getElementById('userid').value;
    var password=document.getElementById('password').value;
    var type=document.getElementById('type').value;

    if(!userid || !password) {
        alert('Please enter username and password');
    } else {
        // send data to server and wait for response

        const user = {
            email: userid,
            type:type,
            password: password,
        };

        const reqObject = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        };
        const loginPromise = fetch('http://localhost:3000/loginFeature', reqObject);
        loginPromise.then(response => response.json())
        //.then(result => console.log('after post call succed, data from server', result))
        .then(result => {
            if(result.loginSuccess === false) {
                alert('login failed, please try again');
            }
            else {
                // Login is successful here
                // if user is admin then send to admin dashboard
                if(type === 'Admin') {
                    window.location.href = 'http://localhost:3000/admin-module/dash-board/dashboard.html';
                }
                else {
                    window.location.href = 'http://localhost:3000/student-module/dash-board/dashboard.html';
                }
                // if user is student, send to student dashboard
            }
        });
      //  alert("Succesfully Login");
    }
}





