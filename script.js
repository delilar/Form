const button = document.querySelector('.submit-button');
const inputs = document.querySelectorAll('input');
const invalidLabels = document.querySelectorAll('.invalid-label');
const password = document.getElementById('password');

function passwordValidate(password) {
    return /^(?=.*[a-zA-Z]).{8,}$/.test(password);
}

inputs.forEach((input, index) => {
    input.addEventListener('input', () => {
        if (input.checkValidity() === false){
            input.classList.remove('valid');
            invalidLabels[index].classList.add('invalid');
            input.classList.add('invalid');
        }
        if (input.value === ''){
            invalidLabels[index].classList.remove('invalid');
            input.classList.remove('invalid');
        }
        if (input.checkValidity() === true){
            invalidLabels[index].classList.remove('invalid');
            input.classList.remove('invalid');
            input.classList.add('valid');
        }
    })
    password.addEventListener('input', () => {
        console.log(/^(?=.*[a-zA-Z]).{8,}$/.test(password));
        passwordValidate(password.value)
    })
})



button.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(event)
})