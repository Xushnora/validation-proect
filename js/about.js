const elForm = document.querySelector('#form');
let nameInput = document.querySelector('#name');
let emailInput = document.querySelector('#email');
let numbInput = document.querySelector('#numb');
let passwordInput = document.querySelector('#password');
let passwordInput2 = document.querySelector('#password2');
let elBtnSubmit = document.querySelector('#btnSubmit');
let textName = document.querySelector('.textName');
let textEmail = document.querySelector('.textEmail');
let textNumber = document.querySelector('.textNumber');
let textPassword = document.querySelector('.textPassword');
let textPassword2 = document.querySelector('.textPassword2');

elForm.addEventListener('submit', (e) =>{
    e.preventDefault();

    nameInput.value = '';
    emailInput.value = '';
    numbInput.value = '';
    passwordInput.value = '';
    passwordInput2.value = '';
})

nameInput.addEventListener('keyup', (e) => {
    let nameValue =  nameInput.value.trim().toLowerCase()
    
    try {
        if(nameValue.match(/[a-z]/) != null && nameValue != '' && nameValue.match(/[0-9]/) != null) {
            nameInput.style.borderColor = 'green';
            textName.style.color = 'green';
            throw 'Bajarildi'
        } else {
            nameInput.style.borderColor = 'red';
            textName.style.color = 'red';
            throw 'Ismingizni kiriting'
        } 
    } catch (e) {
        textName.innerHTML = e;
    }
})