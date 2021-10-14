function submitForm2(event) {
    event.preventDefault()
    let inputs = document.getElementById("my-form").elements
    let all_valid = true
    for (let x = 0; x < inputs.length - 1; x++) {
        valid = inputs[x].checkValidity()
        inputs[x].removeAttribute('placeholder')
        all_valid = all_valid && valid
        if (!valid) {
            inputs[x].value = ""
        }
    }
    if (all_valid) {
        alert("submitted!")

    } else {
        alert("bad format")
    }
    return false
}

/* ----------------- show or hide password ------------------*/
const pwInput = document.getElementById("password")
const eyeIcon = document.getElementById("eyeIcon")
const eyeslashIcon = document.getElementById("eyeslashIcon")

function showPw() {
    pwInput.type = "text"
    eyeslashIcon.style.visibility = "visible"
    eyeIcon.style.visibility = "hidden";
}

function hidePw() {
    pwInput.type = "password"
    eyeslashIcon.style.visibility = "hidden"
    eyeIcon.style.visibility = "visible";
}

/* ------------ agreeToTerms btn toggle with submit Btn -----------*/
const agree = document.getElementById("agree")
const submitBtn = document.getElementById("submitBtn")

function toggleSubmit() {
    if (agree.checked) {
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    }
}

/* ------------- set max date of dob to today ------------*/
var today = new Date();
const dd = today.getDate();
const mm = today.getMonth() + 1;
const yyyy = today.getFullYear();
const dob = document.getElementById("dob")
if (dd < 10) {
    dd = '0' + dd
}
if (mm < 10) {
    mm = '0' + mm
}
today = yyyy + '-' + mm + '-' + dd;
dob.setAttribute("max", today);