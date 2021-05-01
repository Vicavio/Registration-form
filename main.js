document.getElementById("button").addEventListener("click", validateForm);
function validateForm () {
    checkUser();
    checkEmail();
    checkPassword();
    confirmPassword();
}

function checkUser() { 
    const userName = document.getElementById("name");
    const requiredName = document.getElementById("requiredName");
    userName.value = userName.value.replaceAll(" ", "");
    if (userName.value == "" ) {
        requiredName.innerHTML = "Please enter username" ;
        userName.style.borderColor = "red";
      } else if(userName.value.length <3) {
        requiredName.innerHTML = "Username must be at least 3 characters" ;
        userName.style.borderColor = "red";
      } else {
          userName.style.borderColor = "green";
          requiredName.innerHTML = "";
      }
};
function validateEmail(email) {
    const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
  }

function checkEmail() {
    const email = document.getElementById("email");
    const requiredEmail = document.getElementById("requiredEmail");
    if(validateEmail(email.value)){
        email.style.borderColor = "green";
        requiredEmail.innerHTML = "";
    } else{ 
        requiredEmail.innerHTML = "Email is invalid" ;
        email.style.borderColor = "red";
    }
    };

    function checkPassword() {
        const password = document.getElementById("password");
        const requiredPassword = document.getElementById("requiredPassword");
        if (password.value === "") {
            password.style.borderColor = "red";
            requiredPassword.innerHTML = "Password is required"
        } else if (password.value.length < 6) {
            password.style.borderColor = "red";
            requiredPassword.innerHTML = "Password length must be at least 6 characters"
        } else {
            password.style.borderColor = "green";
            requiredPassword.innerHTML = "";
        }
    };

    
    function confirmPassword() {
        if(document.getElementById("repeatPassword").value == "") {
            document.getElementById("repeatPassword").style.borderColor = "red";
            document.getElementById("requiredPasswordAgain").innerHTML = "Enter previous password to confirm";
        } else if (document.getElementById("repeatPassword").value.length < 6){
            document.getElementById("repeatPassword").style.borderColor = "red";
            document.getElementById("requiredPasswordAgain").innerHTML = "Password length must be at least 6 characters";
        } else if(document.getElementById("password").value == document.getElementById("repeatPassword").value) {
            document.getElementById("repeatPassword").style.borderColor = "green";
            document.getElementById("requiredPasswordAgain").innerHTML = "";
        } else {document.getElementById("repeatPassword").style.borderColor = "red";
        document.getElementById("requiredPasswordAgain").innerHTML = "Password does not match"; 
    }
    };
