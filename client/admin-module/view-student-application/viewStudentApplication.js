applicantList=[];

// const students = {
    
//   name: name,
//   gender:selectedGender,
//   dateofbirth:dateofbirth,
//   email:email,
//   number:number,
//   address:address,
//   fathername:fathername,
//   mothername:mothername,
//   qualification:qualification,
//   course:course,
//   stream:stream,
// };
// /////////////////
//   const reqObject = {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify(students)
//   };

//   const studentPromise = fetch('http://localhost:3000/approvedApplication', reqObject)
//   studentPromise.then(response => response.json()).then(result => {
 
//       console.log('after post call succed, data from server', result)});






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

  //  var status  = document.createElement('checkbox');
  //  status.setAttribute('data-id',list[i].id);
  //   status.innerText = 'Status';
  //   status.ariaChecked=SelectUser;


 ////////////////

  var selectStudnetBtton =  document.createElement('button');
  selectStudnetBtton.setAttribute('data-id', list[i].id);
  selectStudnetBtton.innerText = 'Select';
  selectStudnetBtton.onclick = selectUser;
  /////////////////
  

      

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
    studentRow.appendChild(selectStudnetBtton); ////////
    

    const whereToDisplay=document.getElementById('application-list');
    whereToDisplay.appendChild(studentRow);
   

  }
//////////////////////
      function selectUser(e) {
    console.log('selecting user', e.target);
    console.log(typeof e.target.dataset.id);

    var id = parseInt(e.target.dataset.id);

   
    aplicantList = aplicantList.filter((students) => students.id!== id);

    displayStudent(aplicantList);
  }
//////////////////

}
getStudentApplicationList();


