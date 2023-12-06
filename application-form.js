const fullName = document.getElementById('name');
const email = document.getElementById('email');
const phoneNumber = document.getElementById('phone__number');
const errorMsg1 = document.querySelector('.error__message1');
const errorMsg2 = document.querySelector('.error__message2');
const errorMsg3 = document.querySelector('.error__message3');
const errorMsgSsn = document.querySelector('.error__message-ssn');
const applicationBtn = document.getElementById('application__btn');
const generalErrorMsg = document.querySelector('.btn__error-message');
const inputVal = document.querySelector('input')



const emailCheckRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneNumberCheckRegex = /^\+\d{1,4}\s\(\d{3}\)\s\d{3}-\d{4}$/;
const nameCheckRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;


const validateFullName = (value) => {
    if (!nameCheckRegex.test(value)) {
        errorMsg1.innerText = 'Full name required';
    } else {
        errorMsg1.innerText = '';
        generalErrorMsg.innerText = '';
    }
}

const validateEmail = (value) => {
    if (!emailCheckRegex.test(value)) {
        errorMsg2.innerText = 'Invalid email';
    } else {
        errorMsg2.innerText = '';
        generalErrorMsg.innerText = '';
    }
}

const validatePhoneNumber = (value) => {
    if (!phoneNumberCheckRegex.test(value)) {
        errorMsg3.innerText = 'Invalid number format';
    } else {
        errorMsg3.innerText = '';
    }
}


fullName.addEventListener('input', e => validateFullName(e.target.value));
email.addEventListener('input', e => validateEmail(e.target.value));
phoneNumber.addEventListener('input', e => validatePhoneNumber(e.target.value));


const form = document.getElementById('form');

applicationBtn.addEventListener('click', e => {
    const allInputs = form.querySelectorAll('input');

    let allFilled = true;

    for (let i = 0; i < allInputs.length; i++) {
        if (allInputs[i].value.trim() === '') {
            allFilled = false;
            break;
        }
    }

    if (!allFilled) {
        e.preventDefault();
        generalErrorMsg.innerText = 'Some or all fields are empty';
    }
});






// BACK TO TOP BUTTON

const backToTopBtn = document.getElementById('back__to-top');

window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;
    // console.log(`scrollPos is  ${scrollPosition}`)
    if (scrollPosition > 1000) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
})

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: -1000,
        behavior: 'smooth'
    });
})





















































// const formElements = {
//     fullName: document.getElementById('name'),
//     email: document.getElementById('email'),
//     phoneNumber: document.getElementById('phone__number'),
//     errorMsg1: document.querySelector('.error__message1'),
//     errorMsg2: document.querySelector('.error__message2'),
//     errorMsg3: document.querySelector('.error__message3'),
//     applicationBtn: document.getElementById('application__btn'),
//     generalErrorMsg: document.querySelector('.btn__error-message'),
//     allInputs: document.querySelectorAll('input')
// }

// const nameCheckRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;
// const emailCheckRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// const phoneNumberCheckRegex = /^\+?[1-9][0-9]{9}$/;

// const validateInput = (value, regex, errorMsg) => {
//     if (!regex.test(value)) {
//         errorMsg.innerText = errorMsg.dataset.message;
//     } else {
//         errorMsg.innerText = '';
//     }
// }

// const handleFullNameInput = () => {
//     validateInput(formElements.fullName.value, nameCheckRegex, formElements.errorMsg1);
// }

// const handleEmailInput = () => {
//     validateInput(formElements.email.value, emailCheckRegex, formElements.errorMsg2);
// }

// const handlePhoneNumberInput = () => {
//     validateInput(formElements.phoneNumber.value, phoneNumberCheckRegex, formElements.errorMsg3);
// }

// const handleApplicationBtnClick = () => {
//     let allInputsValid = true;

//     formElements.allInputs.forEach(allInput => {
//         if (allInput.value === '') {
//             allInputsValid = false;
//             formElements.generalErrorMsg.innerText = 'Some or all fields are empty';
//         }
//     })

//     if (!allInputsValid) {
//         return;
//     }

//     handleFullNameInput();
//     handleEmailInput();
//     handlePhoneNumberInput();
// }

// formElements.fullName.addEventListener('input', handleFullNameInput);
// formElements.email.addEventListener('input', handleEmailInput);
// formElements.phoneNumber.addEventListener('input', handlePhoneNumberInput);
// formElements.applicationBtn.addEventListener('click', handleApplicationBtnClick);