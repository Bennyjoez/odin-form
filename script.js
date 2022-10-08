const password = document.querySelector('#password');
const passwordConfirm = document.querySelector('#confirm-password');
const submitButton = document.querySelector('button[type="submit"]');
const passwordConfirmMessage = document.querySelector('p[class="password-match"]');

submitButton.addEventListener('click', alertStatus) 
function alertStatus() {
    if(password.value === "" || passwordConfirm.value === "") {
        alert('Password cannot be empty')
    }
}

passwordConfirm.addEventListener('keyup', confirm);

function confirm() {
    const accountPassword = password.value;
    const confirmPassword = passwordConfirm.value;

    if(accountPassword != '') {
        const accountPassword = password.value;
        passwordConfirm.setAttribute('pattern', `${accountPassword}`)
        if(confirmPassword.length === accountPassword.length) {
            if(confirmPassword === accountPassword) {
                passwordConfirmMessage.textContent = 'Passwords match';
                passwordConfirmMessage.classList.remove("password-dontmatch-css");
                passwordConfirmMessage.classList.add('password-match-css');
            } else {
                passwordConfirmMessage.textContent = "Password don't match";
                passwordConfirmMessage.classList.remove("password-match-css");
                passwordConfirmMessage.classList.add('password-dontmatch-css');
            }
        }
    } 


}
