let viewList=[];
function studentEnrollApplication(){
    const studentApplication = {
    
        name: name,
        gender:selectedGender,
        yeargap:selectedyeargap,
        marks:selectedmarks,
        dateofbirth:dateofbirth,
        email:email,
        number:number,
        address:address,
        fathername:fathername,
        occupation:selectedOccupation,
        mothername:mothername,
        qualification:qualification,
    };

 //

        const reqObject = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(studentApplication)
        };

        const studentPromise = fetch('http://localhost:3000/viewStudentApplication')
        studentPromise.then(response => response.json()).then(result => console.log('after post call succed, data from server', result));



        const requestObject = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(studentEnrollment)
        };
        
        const formPromise = fetch('http://localhost:3000/formFeature');
        formPromise.then(response => response.json())
        .then(result => console.log('after post call succed, data from server', result));
}


   
function displayStudent(list){
    
    var whereToDisplay = document.getElementById('student-list');

    
    
    whereToDisplay.innerHTML = '';
  
    for(var i=0; i<list.length; i++) {
  
      var seqNum  = document.createElement('div');
      seqNum.innerText = list[i].id;
  
      var name = document.createElement('div');
      name.innerText = list[i].name;

      var selectedGender =document.createElement('div');
      selectedGender.innerText = list[i].gender;

      var dateofbirth = document.createElement('div');
      dateofbirth.innerText = list[i].dateofbirth;
    
      var email = document.createElement('div');
      email.innerText = list[i].email;
    
      var number = document.createElement('div');
      number.innerText = list[i].number;
  
      var address = document.createElement('div');
      address.innerText = list[i].address;

      var fathername = document.createElement('div');
      fathername.innerText = list[i].fathername;
    
      var mothername = document.createElement('div');
      mothername.innerText = list[i].mothername;

      var qualification=document.createElement('div');
      qualification.innerText = list[i].qualification;
  
  
  
      var studentRow = document.createElement('div');
      studentRow.setAttribute('class', 'student-Application');
  
  
  
      studentRow.appendChild(seqNum);
      studentRow.appendChild(name);
      studentRow.appendChild(selectedGender);
      studentRow.appendChild(dateofbirth);
      studentRow.appendChild(email);
      studentRow.appendChild(number);
      studentRow.appendChild(address);
      studentRow.appendChild(fathername);
      studentRow.appendChild(mothername);
      studentRow.appendChild(qualification);
  
      whereToDisplay.appendChild(studentRow)
  
  
    }
  
    aplicantList = aplicantList.filter((student) => student.id !== id);

    displayStudent(aplicantList);
  }

