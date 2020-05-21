var validator = require("email-validator");
var userEmail = document.getElementById("userEmail");
var userCareer = document.getElementById("userCareer");
var errorMSG =   document.getElementById("errorMSG");
var contentDiv = document.getElementById("contentDiv");
var submit = document.getElementById("submit");
var form = document.getElementById("form");
var emails = [];

submit.addEventListener("click", noEntry);

userEmail.addEventListener("change", function(){
	var validEmail = validator.validate(userEmail.value);
	if (validEmail === true){
			registerd();
			console.log("User Email: " + userEmail.value);
	}else{
			noEntry();
			removeSubmitListener();
	}
})
userCareer.addEventListener("change", function(){
		console.log("User Career: " + userCareer.value);
	})

function registerd(){
	if(emails.indexOf(userEmail.value) !== -1){
  		errorMSG.textContent = "You already had Submitted your application";
  		errorFormEffect();
  	}else{
  		emails.push(userEmail.value);
		errorMSG.textContent = "";
		userEmail.classList.remove("errorBorder");
		submit.removeEventListener("click", noEntry);
		submit.addEventListener("click", submitFunction);
		console.log("Submitted :: User Email: " + userEmail.value + ":: User Career: " + userCareer.value);
  		}
}

function noEntry(){			
  	errorFormEffect();
	if(emails.indexOf(userEmail.value) !== -1){
  		errorMSG.textContent = "You already had Submitted your application";
  				
  	}else{
  		errorMSG.textContent = "please enter a valid email address.";	
  	}
}
function submitFunction(){
  	console.log("Submitted :: User Email: " + userEmail.value + ":: User Career: " + userCareer.value);
  	submit.innerHTML = "Submiting<span>.</span><span>.</span><span>.</span>";
  	setTimeout(thankYou, 2000);
  	submit.addEventListener("click", noEntry);
}

function thankYou(){
  	form.style.display = "none";
  	var thanksHeader = document.createElement("h2");
  	thanksHeader.textContent ="Thanks You for your interest!"
  	contentDiv.insertBefore(thanksHeader, contentDiv.childNodes[0]);
  	contentDiv.querySelector('p').textContent = "We will review your application and contact you for addition information should your background and experience meet the requirement of on of our openings.";
//Revert function is to check the case senario where user email is already submited before//
  	setTimeout(revert, 2000);

}

function errorFormEffect(){
	userEmail.classList.add("errorBorder");
  	userEmail.classList.add("errorShake");
  	setTimeout(function(){userEmail.classList.remove("errorShake");}, 200);
}  		
 
function revert(){
  	submit.innerHTML = "Sign Up Now<svg class='marginLeft-10' width='5px' height='8px' viewBox='0 0 5 8' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'><g id='Desktop' transform='translate(-786.000000, -555.000000)' fill='#FFFFFF'><polygon id='Triangle' transform='translate(788.500000, 559.000000) rotate(90.000000) translate(-788.500000, -559.000000) ' points='788.5 556.5 792.5 561.5 784.5 561.5'></polygon></g></g></svg>";
  	form.style.display = "block";
  	contentDiv.querySelector('h2').remove();
  	contentDiv.querySelector('p').textContent = "Prepare for your career with a Project Management, Web-development, Graphic design, or Digital Marketing Internship at Northern.";
  	removeSubmitListener();
}

function removeSubmitListener(){
	submit.addEventListener("click", noEntry);
	submit.removeEventListener("click", submitFunction);
}


