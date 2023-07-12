const FirstName = document.querySelector("#first-name-input");
const LastName = document.querySelector("#last-name-input");
const email = document.querySeletor("#email-input");
const password = document.querySelector("#password-input");
const submitbtn = document.querySelector("#submit-btn");

//simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

FirstName.onkeyup = () => {
  FirstName.classList.remove("is-invalid");
  FirstName.classList.remove("is-valid");
};

LastName.onkeyup = () => {
  LastName.classList.remove("is-invalid");
  LastName.classList.remove("is-valid");
};

email.onkeyup = () => {
  email.classList.remove("is-invalid");
  email.classList.remove("is-valid");
};

password.onkeyup = () => {
  password.classList.remove("is-invalid");
  password.classList.remove("is-valid");
};

submitbtn.onclick = () => {
  let isFirstNameOk = false;
  let isLastNameOk = false;
  let isEmailOk = false;
  let isPasswordOk = false;

  if (FirstName.value === "") {
    FirstName.classList.add("is-invalid");
  }else{
    FirstName.classList.add("is-valid");
    isFirstNameOk = true;
  }

  if (LastName.value === ""){
    LastName.classList.add("is-invalid");
  }else{
    LastName.classList.add("is-valid");
    isLastNameOk = true;
  }

  if (validateEmail(email.value)){
    email.classList.add("is-valid");
    isEmailOk = true;
  }else{
    email.classList.add("is-invalid");
  }

  if (password.value.length < 6){
    password.classList.add("is-invalid");
  }else{
    password.classList.add("is-valid");
    isPasswordOk = true;
  }

  if(isFirstNameOk && isLastNameOk && isEmailOk && isPasswordOk){
    alert ("Registered successfully");
  }
};