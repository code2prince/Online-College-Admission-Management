
function getStudentApplicationList(){
  fetch("http://localhost:3000/getStudentList")
  .then(response=>response.json())
  .then(result=>{
    displayStudentApplications(result)
  });
}

function displayStudentApplications(list){
  
  for(var i=0; i<list.length; i++) {
  
    var seqNum  = document.createElement('div');
    seqNum.innerText = i+1;
    // var status  = document.createElement('div');
    // status.innerText = list[i].status;

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

    var qualification =document.createElement('div');
    qualification.innerText = list[i].qualification;

    var course =document.createElement('div');
    course.innerText = list[i].course;

    var stream =document.createElement('div');
    stream.innerText = list[i].stream;

    var studentRow = document.createElement('div');
    studentRow.setAttribute('class','application-row-grid');

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
    studentRow.appendChild(course);
    studentRow.appendChild(stream);

    const whereToDisplay=document.getElementById('application-list');
    whereToDisplay.appendChild(studentRow);
   

  }
}
getStudentApplicationList();


