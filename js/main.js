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

// PASSWORD TEKSHIRISH UCHUN

let upparcase = document.querySelector('.upparcase');
let special = document.querySelector('.special');
let number = document.querySelector('.number');
let more = document.querySelector('.more');
let checkedBox = document.querySelector('.checked-box');
let checkBx = document.querySelector('#bxs');
let checkSpecial = document.querySelector('#bxs2');
let checkNumber = document.querySelector('#bxs3');
let checkMore = document.querySelector('#bxs4');

elForm.addEventListener('submit', (e) =>{
    e.preventDefault();

    nameInput.value = '';
    emailInput.value = '';
    numbInput.value = '';
    passwordInput.value = '';
    passwordInput2.value = '';
})

function nameFunc () {
    nameInput.addEventListener('keyup', () => {
        textName.innerHTML = "";
        try {
            if (nameInput.value.trim() == '') throw "*Ismingizni kiriting..."
        } catch (e) {
            textName.innerHTML = e;
        }
    })
    nameInput.addEventListener('blur', () => {
        if (nameInput.value.trim() == '') {
            textName.innerHTML = "*Ismingiz kiriting...";
            nameInput.style.borderColor = "red"
        } else {
            nameInput.style.borderColor = "green"
        }
    })
}
nameFunc();

function emailFunc() {
    emailInput.addEventListener('keyup', () => {
        textEmail.innerHTML = "";
        let emailkey = emailInput.value.trim();
        try {
            if (! emailkey.includes('@gmail')) throw "Email bo'lish sharti bajarilmadi"
        } catch (e) {
            textEmail.innerHTML = e;
        }
        try {
            if (! emailkey.includes('.com')) throw "Email bo'lish sharti bajarilmadi"
        } catch (e) {
            textEmail.innerHTML = e;
        }
        try {
            if (emailInput.value.trim() == '') throw "*Email kiriting..."
        } catch (e) {
            textEmail.innerHTML = e;
        }
    })
    emailInput.addEventListener('blur', () => {
        if (emailInput.value.trim() == '') {
            textEmail.innerHTML = "*Email kiriting...";
            emailInput.style.borderColor = "red"
        } else {
            emailInput.style.borderColor = "green"
        }
    })
}
emailFunc();

function numbFunc () {
    numbInput.addEventListener('keyup', () => {
        textNumber.innerHTML = '';
        let numbKey = numbInput.value.trim();
        try {
            if (! Number(numbKey)) throw "*Nomeringizni probellarsiz va boshqa belgilarsiz kiriting...";
        } catch (e) {
            textNumber.innerHTML = e;
        }
    })
    numbInput.addEventListener('blur', () => {
        if (numbInput.value.trim() == '') {
            textNumber.innerHTML = "*Nomeringizni kiriting...";
            numbInput.style.borderColor = "red"
        } else {
            numbInput.style.borderColor = "green"
        }
    })
}
numbFunc();

let parol;
    passwordInput.addEventListener('keyup', (value) => {
        checkedBox.classList.add('d-block');
        parol = value.target.value.trim();
        textPassword.innerHTML = "";
            try {
                if (parol == '') throw "*Password kiriting..."
            } catch (e) {
                textPassword.innerHTML = e;
            }
            try {
                if (parol.match(/[A-Z]/) != null) {
                    upparcase.style.opacity = "1";
                    checkBx.className = "bx bx-check";
                    checkBx.style.opacity = '1';
                    
                } else {
                    upparcase.style.opacity = "0.2";
                    checkBx.className = "bx bx-x"
                    checkBx.style.opacity = '0.2';
                    passwordInput.style.borderColor = "red"
                }
            } catch (e) {
                textPassword.innerHTML = e;
            }
            try {
                if (parol.match(/[0-9]/) != null) {
                    number.style.opacity = "1";
                    checkNumber.className = "bx bx-check"
                    checkNumber.style.opacity = '1';
                    
                } else {
                    number.style.opacity = "0.2";
                    checkNumber.className = "bx bx-x"
                    checkNumber.style.opacity = '0.2';
                    passwordInput.style.borderColor = "red"
                }
            } catch (e) {
                textPassword.innerHTML = e;
            }
            try {
                if (parol.match(/[!@#$%^&*]/) != null) {
                    special.style.opacity = "1";
                    checkSpecial.className = "bx bx-check"
                    checkSpecial.style.opacity = '1';
                } else {
                    special.style.opacity = "0.2";
                    checkSpecial.className = "bx bx-x"
                    checkSpecial.style.opacity = '0.2';
                    passwordInput.style.borderColor = "red"
                }
            } catch (e) {
                textPassword.innerHTML = e;
            }
            try {
                if (parol.length>=8) {
                    more.style.opacity = "1";
                    checkMore.className = "bx bx-check"
                    checkMore.style.opacity = '1';
                } else {
                    more.style.opacity = "0.2";
                    checkMore.className = "bx bx-x"
                    checkMore.style.opacity = '0.2';
                    passwordInput.style.borderColor = "red"
                }
            } catch (e) {
                textPassword.innerHTML = e;
            }
    })
    passwordInput.addEventListener('blur', () => {
        if (passwordInput.value.trim() == '') {
            passwordInput.style.borderColor = "red"
        } else {
            passwordInput.style.borderColor = "green"
        }
    })

    passwordInput2.addEventListener('keyup',  ()=>{
        checkedBox.classList.add('d-none');
        textPassword2.innerHTML = '';
        let value2 = passwordInput2.value.trim();
        try {
            if(parol == value2) {
                throw "Parol to'g'ri";
            } else {
                throw "Parol noto'g'ri";
            }
        } catch {
            textPassword2.innerHTML = e;
        }
    })
    
    // passwordInput2.addEventListener('blur',  ()=>{
    //     if (passwordInput2.value.trim() == '') {
    //         passwordInput2.style.borderColor = "red"
    //         textPassword2.innerHTML = "Passwordni qayta kiriting"
    //     } else {
    //         passwordInput2.style.borderColor = "green"
    //     }
    // })









