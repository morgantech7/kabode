function scrollToVacancy(){

document.getElementById("vacancy").scrollIntoView({

behavior:"smooth"

});

}

document.getElementById("applicationForm").addEventListener("submit",function(e){

e.preventDefault();

let name=document.getElementById("name").value;

let age=document.getElementById("age").value;

if(name=="" || age==""){

alert("Please complete the application form.");

return;

}

document.getElementById("message").innerHTML=

"Application submitted successfully. Thank you for applying for the Information Coordinator position.";

this.reset();

});