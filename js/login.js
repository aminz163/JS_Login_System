var loginPassword = document.getElementById("loginPassword");
var loginEmail = document.getElementById("loginEmail");
var loginBtn = document.getElementById("loginBtn");
var welcomeUser = document.getElementById("welcomeUser");
var gotosignup = document.getElementById("gotosignup");
var Welcome = document.getElementById("Welcome");
var  emailAlert = document.getElementById("emailAlert");
var Users = [];

if(localStorage.getItem("usersList") !=null){
    Users = JSON.parse(localStorage.getItem("usersList"));
}

loginBtn.addEventListener("click",loginUser);

function loginUser(){
    var existingUserEmail = '';
    var existingUserIndex;
    var existingUserPassword='';
    var existingUserName='';

    for(var i =0 ; i< Users.length ; i++ ){
        if (loginEmail.value === Users[i].userEmail){
            existingUserEmail = Users[i].userEmail;
            existingUserPassword = Users[i].userPassword;
            existingUserName = Users[i].userName;
            existingUserIndex = i;


        }
    }

    if (existingUserEmail === ''){
        alert("User Not Found");
    }
    else if(!validateEmail() ){
        alert("Invalid Email Format");
    }
    else{
        console.log(existingUserEmail);
        console.log(existingUserPassword);
        console.log(existingUserIndex);


        if(loginPassword.value != existingUserPassword){
            alert("Password Incorrect");
        }
        else{
            welcomeUser.textContent = existingUserName;
            gotoWelcome();
        }
    }

}

function gotoWelcome(){
    
    loginBtn.classList.add("d-none")
    loginEmail.classList.add("d-none")
    loginPassword.classList.add("d-none")
    gotosignup.classList.add("d-none")
    Welcome.classList.remove("d-none");
    
}

function validateEmail(){
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    var x = regex.test(loginEmail.value);

    if(!x){
        emailAlert.classList.remove("d-none");

    }

    else{
        emailAlert.classList.add("d-none");
    }

    return x
}

loginEmail.addEventListener('blur', validateEmail)

