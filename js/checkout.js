// Exercise 6
function validate() {


	let nameExp = /^[a-zA-ZÀ-ÿ\s]{3,}$/;
	let emailExp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
	let addressExp = /^.{3,}$/;
	let lastNexp = /^[a-zA-ZÀ-ÿ\s]{3,}$/;
	let passwordExp = /^(?=.*[0-9])(?=.*[a-zA_Z]).{4,8}/;
	let phoneExp = /^\d{9}$/;


	var error = 0;
	// Get the input fields
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");
	var fAddress = document.getElementById("fAddress");
	var fLastN = document.getElementById("fLastN");
	var fPassword = document.getElementById("fPassword");
	var fPhone = document.getElementById("fPhone");

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");
	var errorAddress = document.getElementById("errorAddress");
	var errorLastN = document.getElementById("errorLastN");
	var errorPassword = document.getElementById("errorPassword");
	var errorPhone = document.getElementById("errorPhone");

	// Validate fields entered by the user: name, phone, password, and email
	if (fName.value.match(nameExp)) {
		fName.classList.remove("is-invalid");
		fName.classList.add("is-valid");
	} else {
		fName.classList.remove("is-valid");
		fName.classList.add("is-invalid");
	}

	if (fEmail.value.match(emailExp)) {
		fEmail.classList.remove("is-invalid");
		fEmail.classList.add("is-valid");
	} else {
		fEmail.classList.remove("is-valid");
		fEmail.classList.add("is-invalid");
	}

	if (fAddress.value.match(addressExp)) {
		fAddress.classList.remove("is-invalid");
		fAddress.classList.add("is-valid");
	} else {
		fAddress.classList.remove("is-valid");
		fAddress.classList.add("is-invalid");
	}

	if (fLastN.value.match(lastNexp)) {
		fLastN.classList.remove("is-invalid");
		fLastN.classList.add("is-valid");
	} else {
		fLastN.classList.remove("is-valid");
		fLastN.classList.add("is-invalid");
	}

	if (fPassword.value.match(passwordExp)) {
		fPassword.classList.remove("is-invalid");
		fPassword.classList.add("is-valid");
	} else {
		fPassword.classList.remove("is-valid");
		fPassword.classList.add("is-invalid");
	}

	if (fPhone.value.match(phoneExp)) {
		fPhone.classList.remove("is-invalid");
		fPhone.classList.add("is-valid");
	} else {
		fPhone.classList.remove("is-valid");
		fPhone.classList.add("is-invalid");
	}

}