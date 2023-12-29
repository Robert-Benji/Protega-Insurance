const getElement = (id) => document.getElementById(id);
const querySelector = (className) => document.querySelector(className);

const fullName = getElement('name');
const email = getElement('email');
const phoneNumber = getElement('phone__number');
const errorMsg1 = querySelector('.error__message1');
const errorMsg2 = querySelector('.error__message2');
const errorMsg3 = querySelector('.error__message3');
const errorMsgSsn = querySelector('.error__message-ssn');
const applicationBtn = getElement('application__btn');
const generalErrorMsg = querySelector('.btn__error-message');
const inputVal = querySelector('input');

const emailCheckRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneNumberCheckRegex = /^\+\d{1,4}\s?(\(\d{1,}\))?[.\s-]?\d{1,}[.\s-]?\d{1,}$/;
const nameCheckRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;

const validateFullName = (value) => {
    errorMsg1.innerText = !nameCheckRegex.test(value) ? 'Full name required' : '';
    generalErrorMsg.innerText = '';
};

const validateEmail = (value) => {
    errorMsg2.innerText = !emailCheckRegex.test(value) ? 'Invalid email' : '';
    generalErrorMsg.innerText = '';
};

// function formatPhoneNumber() {
//     const inputValue = phoneNumber.value.replace(/\D/g, '');
   
//     if (inputValue.length === 0) {
//        phoneNumber.value = '';
//        return;
//     }
   
//     const formattedPhoneNumber = `+${inputValue.substring(0, 1)} (${inputValue.substring(3)}) ${inputValue.substring(3)}-${inputValue.substring(4)}`;
//     phoneNumber.value = formattedPhoneNumber;
// }

const validateInput = (element, validator) => {
    element.addEventListener('input', (e) => validator(e.target.value));
};

validateInput(fullName, validateFullName);
validateInput(email, validateEmail);
validateInput(phoneNumber, validatePhoneNumber);

const form = getElement('form');

applicationBtn.addEventListener('click', (e) => {
    const allInputs = form.querySelectorAll('input');
    const allFilled = Array.from(allInputs).every((input) => input.value.trim() !== '');

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
