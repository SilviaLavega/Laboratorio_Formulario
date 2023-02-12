
// -------------- VARIABLES ------------------------
const nameField = document.getElementById('name');
const errorName = document.getElementById('nameError');

const emailField = document.getElementById('email');
const errorEmail = document.getElementById('emailError');

const passwordField = document.getElementById('password');
const errorPassword = document.getElementById('passwordError');

const confirmField = document.getElementById('password2');
const errorConfirm = document.getElementById('password2Error');


// -------------- VALIDADORES ------------------------
const validPassword = /^[\s\S]{8,25}$/;
const emailValido =  /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const validName = /^[A-Za-z\s]+$/;

// -------------- VALIDACION DEL NOMBRE ------------------------
function Name(){

	if(nameField.value == ""){
		errorName.innerHTML = "Rellene este campo";
		nameField.classList.remove("successIcon");
		nameField.classList.add("invalid");
		nameField.classList.add("errorIcon");
		return false; 
	}
	else if(validName.test(nameField.value)){
		nameField.classList.remove("invalid");
		nameField.classList.remove("errorIcon");
		errorName.innerHTML = "";
		nameField.classList.add("valid");
		nameField.classList.add("successIcon");
		return true; 
	}
	else {
		errorName.innerHTML = "Nombre inválido";
		nameField.classList.remove("successIcon");
		nameField.classList.add("invalid");
		nameField.classList.add("errorIcon");
		return false; }
	}

// -------------- VALIDACION DEL EMAIL ------------------------
function Email(){


	if(emailField.value == ""){
		emailField.classList.remove("successIcon");
		emailField.classList.add("invalid");
		emailField.classList.add("errorIcon");
		errorEmail.innerHTML = "Rellene este campo";
		return false; 
	}
	else if(emailValido.test(emailField.value) ){
		emailField.classList.remove("invalid");
		emailField.classList.remove("errorIcon");
		errorEmail.innerHTML = "";
		emailField.classList.add("valid");
		emailField.classList.add("successIcon");
		return true; 
	}
	else {
		errorEmail.innerHTML = "Email inválido pruebe otra vez";
		emailField.classList.remove("successIcon");
		emailField.classList.add("invalid");
		emailField.classList.add("errorIcon");
		return false; 
	}
} 

// -------------- VALIDACION DE LA CONTRASEÑA ------------------------
function Password(){
	

	if(passwordField.value == ""){
		passwordField.classList.remove("successIcon");
		passwordField.classList.add("invalid");
		passwordField.classList.add("errorIcon");
		errorPassword.innerHTML = "Rellene este campo";
		return false; }
	else if(validPassword.test(passwordField.value) ){
		passwordField.classList.remove("invalid");
		passwordField.classList.remove("errorIcon");
		errorPassword.innerHTML = "";
		passwordField.classList.add("valid");
		passwordField.classList.add("successIcon");
		return true; 
	}
	else {	
		errorPassword.innerHTML = "No debe tener menos de 8 caracteres";
		passwordField.classList.remove("successIcon");
		passwordField.classList.add("invalid");
		return false; }
}

// -------------- VALIDACION DE LA CONFIRMACION DE CONTRASEÑA ------------------------
function Password2(){


	if(confirmField.value == ""){
		confirmField.classList.remove("successIcon");
		confirmField.classList.add("invalid");
		confirmField.classList.add("errorIcon");
		errorConfirm.innerHTML = "Rellene este campo";
		return false;
	 }
	else if (passwordField.value == confirmField.value ){
		confirmField.classList.remove("invalid");
		confirmField.classList.remove("errorIcon");
		errorConfirm.innerHTML = "";
		confirmField.classList.add("valid");
		confirmField.classList.add("successIcon");
		return true; 
	}
	else {	
		confirmField.classList.remove("successIcon");
		confirmField.classList.add("invalid");
		confirmField.classList.add("errorIcon");
		errorConfirm.innerHTML = "Las contraseñas no coinciden";
		return false; 
	} 
}

// -------------- VALIDACION DEL FORMULARIO ------------------------

function validarForm(){

	if (Password2() && Password() && Email() && Name()){
		alert("Inscrito correctamente");
		return true; }
	else {
		return false; }
}

