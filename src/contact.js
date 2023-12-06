const dropdownBtn = document.getElementById('insurance__wrapper');
const dropdownContainer = document.getElementById('insurance__dropdown-menu');
const chevronDownIcon = document.getElementById('chevronDown');
const hamMenu = document.getElementById('hamburger__menu');
const navMenu = document.getElementById('header__navs');
const header = document.querySelector('header');
const navLinks = document.querySelectorAll('.links__header');
const backToTopBtn = document.getElementById('back__to-top');



// DROPDOWN

dropdownBtn.addEventListener('click', e => {
    e.preventDefault();
    if (!dropdownContainer.classList.contains('active')) {
        dropdownContainer.classList.add('active');
        chevronDownIcon.classList.add('bi-chevron-up');
        chevronDownIcon.classList.remove('bi-chevron-down');
    } else {
        dropdownContainer.classList.remove('active');
        chevronDownIcon.classList.remove('bi-chevron-up');
        chevronDownIcon.classList.add('bi-chevron-down');
    }
})


// HAMBURGER TOGGLE-MENU

const toggleHamMenu = () => {
    hamMenu.addEventListener('click', () => {
        navMenu.classList.toggle('nav-show');

        const rotateHamMenu = () => {
            hamMenu.classList.toggle('rotate');
        }
        rotateHamMenu();
    })
}
toggleHamMenu();



const clickedLinkAction = () => {
    navMenu.classList.remove('nav-show');
    hamMenu.classList.toggle('rotate');
}

navLinks.forEach(navLink => {
    navLink.addEventListener('click', clickedLinkAction);
})



// HEADER BOX-SHADOW/BG DISPLAY

window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;
    // console.log(`scrollPos is  ${scrollPosition}`)
    if (scrollPosition > 40) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
})




// BACK TO TOP BUTTON

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



// FOOTER YEAR

const yearPlaceholder = document.getElementById('year');

let date = new Date();
let year = date.getFullYear();
yearPlaceholder.innerText = year;


// CONTACT FORM VALIDATION

const fullName = document.getElementById('full__name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const formBtn = document.getElementById('form__btn');
const errorMsg1 = document.querySelector('.error__message1');
const errorMsg2 = document.querySelector('.error__message2');
const errorMsg3 = document.querySelector('.error__message3');
const topErrorMsg = document.querySelector('.header__error-msg');
const nameIcon = document.querySelector('.full__name-icon');
const emailIcon = document.querySelector('.email__icon');

const emailCheckRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const nameCheckRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;



const validateFullName = (value) => {
    if (!nameCheckRegex.test(value)) {
        errorMsg1.innerText = 'Full name required';
        nameIcon.style.color = '#c4c4c4';
    } else {
        errorMsg1.innerText = '';
        nameIcon.style.color = '#7aa65f';
        topErrorMsg.innerText = '';
    }
}

const validateEmail = (value) => {
    if (!emailCheckRegex.test(value)) {
        errorMsg2.innerText = 'Invalid email';
        emailIcon.style.color = '#c4c4c4';
    } else {
        errorMsg2.innerText = '';
        emailIcon.style.color = '#7aa65f';
    }
}

const validateMessage = (value) => {
    if (value.length < 30) {
        errorMsg3.innerText = 'Your message is too short';
    } else {
        errorMsg3.innerText = '';
    }
}

fullName.addEventListener('input', e => validateFullName(e.target.value));
email.addEventListener('input', e => validateEmail(e.target.value));
message.addEventListener('input', e => validateMessage(e.target.value));

formBtn.addEventListener('click', e => {
    if (fullName.value === '' || email.value === '' || message.value === '') {
        e.preventDefault();
        topErrorMsg.innerText = 'Some or all fields are empty';
    }
})
