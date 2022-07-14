
let aplicantList = [];
let studentList =[];
function submitForm() {

    const name = document.getElementById('name').value;
    const fathername = document.getElementById('fathername').value;
    const mothername = document.getElementById('mothername').value;
    const email = document.getElementById('email').value;
    const number = document.getElementById('number').value;
    const address = document.getElementById('address').value;
    const dateofbirth = document.getElementById('date').value;
    const qualification = document.getElementById('qualification').value;
    const course = document.getElementById('course').value;
    const stream = document.getElementById('stream').value;

    var radioButtons = document.querySelectorAll('input[name="gender"]');
    var selectedGender;
    // for(var i=0; i<radioButtons.length; i++)
    for (var rd of radioButtons) {
        if (rd.checked) {
            selectedGender = rd.value;
            break;
        }
    }


    var radioButtons = document.querySelectorAll('input[name="yeargap"]');
    var selectedyeargap;
    // for(var i=0; i<radioButtons.length; i++)
    for (var rd of radioButtons) {
        if (rd.checked) {
            selectedyeargap = rd.value;
            break;
        }
    }


    var radioButtons = document.querySelectorAll('input[name="marks"]');
    var selectedmarks;
    // for(var i=0; i<radioButtons.length; i++)
    for (var rd of radioButtons) {
        if (rd.checked) {
            selectedmarks = rd.value;
            break;
        }
    }

    var checkboxes = document.querySelectorAll('input[name="language"]:checked');
    var language = [];
    checkboxes.forEach((checkbox) => {
        language.push(checkbox.value);
    });

    var checkboxes = document.querySelectorAll('input[name="SelfDeclearation"]:checked');
    var SelfDeclearation = [];
    checkboxes.forEach((checkbox) => {
        SelfDeclearation.push(checkbox.value);
    });


  
    var radioButtons = document.querySelectorAll('input[name="Occupation"]');
    var selectedOccupation;
    // for(var i=0; i<radioButtons.length; i++)
    for (var rd of radioButtons) {
        if (rd.checked) {
            selectedOccupation = rd.value;
            break;
        }
    }



    const student = {
    
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
        course:course,
        stream:stream,
        language:language,
        SelfDecleared:SelfDeclearation,
    };
/////////////////
        const reqObject = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(student)
        };

        const studentPromise = fetch('http://localhost:3000/enrollStudentApplication', reqObject)
        studentPromise.then(response => response.json()).then(result => console.log('after post call succed, data from server', result));





    if (name && email && number ) {
        
        console.log('sending data', name, dateofbirth, email, number, selectedyeargap, selectedmarks, selectedGender, selectedOccupation, qualification,course,stream, fathername, mothername, address);
        // console.log('send data to server' ,name,selectedyeargap,selectedmarks,selectedGender,dateofbirth,language,email,number,fathername,selectedqualification2,selectedOccupation,mothername,selectedqualification1,address);
    }
    else 
    {
        alert('Please provide full detail');
        const students= {
            email: email,
           
        };

        const reqObject = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(students)
        };
        
        const formPromise = fetch('http://localhost:3000/formFeature', reqObject);
        formPromise.then(response => response.json())
        .then(result => console.log('after post call succed, data from server', result));
    }
   // alert("sucessfully submitted")
}




    
function displayStudent(list){
    // TODO: display all the studentlist > applicationArray
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

      var course=document.createElement('div');
      course.innerText = list[i].course;

      var stream=document.createElement('div');
      stream.innerText = list[i].stream;
  
  
      var deleteStudnetBtton =  document.createElement('button');
      deleteStudnetBtton.setAttribute('data-id', list[i].id);
      deleteStudnetBtton.innerText = 'Delete';
      deleteStudnetBtton.onclick = deleteUser;
      
  
  
      var studentRow = document.createElement('div');
      studentRow.setAttribute('class', 'student-row');
  
  
  
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
      studentRow.appendChild(deleteStudnetBtton);
  
      whereToDisplay.appendChild(studentRow)
  
  
    }
     
  function deleteUser(e) {
    console.log('deleteing user', e.target);
    console.log(typeof e.target.dataset.id);

    var id = parseInt(e.target.dataset.id);

    // TODO: get the id of application
    // TODO: filter the applicationArray by id
    aplicantList = aplicantList.filter((student) => student.id !== id);

    // TODO: call displayApplication by passign the filtered Array
    displayStudent(aplicantList);
  }

  

}

function displayFilter(){
    if(aplicantList.length>0){

        var filterDiv=document.getElementById('filter');
        filterDiv.innerHTML=''
        // create a male-female dropdown
        // create selectElement
        var Filter=document.createElement('select');
        //attach onchange
        Filter.onchange=filterAplicationList;

        //create option element with attribute "select " & "value"
        var select =document.createElement('option');
        select.text = "select";
        select.value = "select";
        //select.setAttribute('value', 'select');
        //select.innerText= 'select';
        var male=document.createElement('option');
        //male.setAttribute('value', 'male');
        //male.innerText= 'male';
        male.text = "male";
        male.value = "male";
        var female=document.createElement('option');
        //female.setAttribute('value', 'female');
        //female.innerText= 'female';

        female.text = "female";
        female.value = "female";

        
        Filter.appendChild(select);
        Filter.appendChild(male);
        Filter.appendChild(female);

       
        filterDiv.appendChild(Filter)
    }
}
function filterAplicationList(e){
    console.log(e.target.value);
    if(e.target.value!=='select'){
        var output = aplicantList.filter((x)=>x.gender===e.target.value );
        console.log(output);
        displayStudent(output)
    }
    else{
        displayStudent(aplicantList)
    }
}


function getStudentList() {
    fetch('http://localhost:3000/getStudentList')
    .then(response => response.json())
    .then(result => {
        studentList = result;
        printUser(studentList);
    });
}

// function printUser(student) {
    
//     const studentlistContainer = document.getElementById('studentList');
//     studentlistContainer.innerHTML = '';


//     students.forEach(student => {
//         const h1 = document.createElement('h1');
//         h1.innerText = student.name;
//         studentlistContainer.appendChild(h1);
//     });
// }

    
 
