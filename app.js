var getSignUpName = document.getElementById('signupname');
var getSignUpEmail = document.getElementById('signupemail');
var getSignUpPassword = document.getElementById('signuppassword');


function signup(){
   localStorage.setItem('signupname', getSignUpName.value);
   localStorage.setItem('signupemail', getSignUpEmail.value);
   localStorage.setItem('signuppassword', getSignUpPassword.value);
   Swal.fire({
    title: "SignUp Successfully",
    text: "Click for Login",
    icon: "success"
  }).then(() => {
    getSignUpName.value = "";
    getSignUpEmail.value = "";
    getSignUpPassword.value = "";
    location.href = "./index.html";
  });

  
}

function login(){
    var loginName = document.getElementById("loginemail")
    var loginPass = document.getElementById("loginpassword");

    if(loginName.value == localStorage.getItem('signupemail') 
        && loginPass.value == localStorage.getItem('signuppassword')){
        window.location.href = "welcome.html"; 
    }else{
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Invalid Email or Password",
            footer: '<a href="./signup.html">Signup</a>'
          });
    }
}





document.getElementById('welcomeusername').innerText = localStorage.getItem('signupname') || 'User';
function logout() {
  window.location.href = "index.html";
}