const password = document.querySelector('#password');
const passwordConfirm = document.querySelector('#confirm-password');
const submitButton = document.querySelector('button[type="submit"]');

submitButton.addEventListener('click', alertStatus) 
function alertStatus() {
    if(password.value === "" || passwordConfirm.value === "") {
        alert('Password cannot be empty')
    }
}

passwordConfirm.addEventListener('keyup', confirm);

function confirm() {
    if(password.value != '') {
        const accountPassword = password.value;
        passwordConfirm.setAttribute('pattern', `${accountPassword}`)
    }
}