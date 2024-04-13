const button = document.querySelector('.submit-button');
const inputs = document.querySelectorAll('input');
const invalidLabels = document.querySelectorAll('.invalid-label')

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
})

button.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(event)
})