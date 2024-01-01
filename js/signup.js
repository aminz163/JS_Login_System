/* signup vars */

var signupName = document.getElementById("signupName");
var signupEmail = document.getElementById("signupEmail");
var signupPassword = document.getElementById("signupPassword");
var signupBtn = document.getElementById("signupBtn");
var success = document.getElementById("success");


var Users = [];

if(localStorage.getItem("usersList") !=null){
    Users = JSON.parse(localStorage.getItem("usersList"));
}

signupBtn.addEventListener("click", addUser);




function addUser(){
    var User = {
        userName: signupName.value,
        userEmail: signupEmail.value,
        userPassword: signupPassword.value 

    };

    Users.push(User);
    localStorage.setItem("usersList", JSON.stringify(Users));
    clearForm();

    success.classList.remove("d-none")
    
}



function clearForm(){
    signupName.value = '';
    signupEmail.value = '';
    signupPassword.value = '';
}

function gotologin(){
    window.location.href='landing.html';
}

