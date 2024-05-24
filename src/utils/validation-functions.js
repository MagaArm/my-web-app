// regex pataterns 
const validEmailregex = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
const validAlphaRegex = new RegExp(/^[A-Za-z]/);

// initialize dom elements into object
let formStateObj = {
    form: document.getElementById("myForm"),
    firstName: document.getElementById("fname"),
    lastName: document.getElementById('lname'),
    usrEmail: document.getElementById('mail'),
    carChoice: document.getElementById('car'),
    isSubscribed: document.getElementById('subBtn'),
}
// need these to be separate from our validated fields object :)
let submitButtonState = document.getElementById("subscribeBtn");
let postSubmitParagraph = document.getElementById('postSubmitText');

// will handle className attributes to present text post valid form submission
let postSubText = {
    postName: document.getElementById("pName"),
    postLastName: document.getElementById("lName"),
    postEmail: document.getElementById("pEmail"),
    postChoice: document.getElementById('pChoice'),
}

// will handle error className attriubutes in the future
let errors = {
    name: document.getElementById('fNameError'),
    lastName: document.getElementById('lNameError'),
    email: document.getElementById('emailError'),
    choice: document.getElementById('choiceError'),
    check: document.getElementById('checkError')
}

// Event listener HOF's for each field. These manipulate DOM CSS attributes to update UI and hide nessecery attributes
const addFirstNameListener = () => {
    return formStateObj.firstName.addEventListener("input", () => {
        formStateObj.firstName.className = formStateObj.firstName.value.length > 2 && validAlphaRegex.test(formStateObj.firstName.value) ? "valid" : "error";
        errors.name.className = formStateObj.firstName.value.length > 2 && validAlphaRegex.test(formStateObj.firstName.value) ? "hideElement" : "errorText";
    });
}

const addLastNameListener = () => {
    return formStateObj.lastName.addEventListener("input", () => {
        formStateObj.lastName.className = formStateObj.lastName.value.length > 2 && validAlphaRegex.test(formStateObj.lastName.value) ? "valid" : "error";
        errors.lastName.className = formStateObj.lastName.value.length > 2 && validAlphaRegex.test(formStateObj.lastName.value) ? "hideElement" : "errorText";
    });
}

const addEmailListener = () => {
    return formStateObj.usrEmail.addEventListener("input", () => {
        formStateObj.usrEmail.className = validEmailregex.test(formStateObj.usrEmail.value) ? "valid" : "error";
        errors.email.className = validEmailregex.test(formStateObj.usrEmail.value) ? "hideElement" : "errorText";
    });
}

const addSelectListener = () => {
    return formStateObj.carChoice.addEventListener("click", () => {
        formStateObj.carChoice.className = formStateObj.carChoice.value !== 'empty' ? "valid" : "error";
        errors.choice.className = formStateObj.carChoice.value !== 'empty' ? "hideElement" : "errorText";

    });
}

const addSubscribedListener = () => {
    return formStateObj.isSubscribed.addEventListener("change", (e) => {
        formStateObj.isSubscribed.className = e.target.checked ? "valid" : "error";
        errors.check.className = e.target.checked ? "hideElement" : "errorText";
        submitButtonState.className = e.target.checked ? "" : "hideElement";
    });

}

// validates attributes we care about. If they are valid, the submission is successful
const handleSubmit = (e) => {
    // convert input fields into array
    var obj = Object.entries(formStateObj);
    // filter elements that have the className attribute set to valid. the target data is in the second element of each array
    const filteredObj = obj.filter(obj => obj[1].className === "valid");

    // If the length of our filtered objects is equal to 5, then all our input fields are valid and we can proceed with the for submission
    if (filteredObj.length === 5) {
        formStateObj.form.className = "hideElement";
        postSubmitParagraph.className = "";

        postSubText.postName.textContent = formStateObj.firstName.value;
        postSubText.postLastName.textContent = formStateObj.lastName.value;
        postSubText.postEmail.textContent = formStateObj.usrEmail.value;
        postSubText.postChoice.textContent = formStateObj.carChoice.value;
    }
    // prevent default event behavior from bubbling
    e.preventDefault();
}

// assign "handleSubmit" to the onSubmit event 
formStateObj.form.onsubmit = handleSubmit;

submitButtonState.className = "hideElement";
postSubmitParagraph.className = "hideElement";

errors.name.className = "hideElement";
errors.lastName.className = 'hideElement';
errors.email.className = 'hideElement';
errors.choice.className = 'hideElement';
errors.check.className = 'hideElement';

// call listeners
addFirstNameListener();
addLastNameListener();
addEmailListener();
addSelectListener();
addSubscribedListener();