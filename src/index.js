const dropdownBtn = document.getElementById('insurance__wrapper');
const dropdownContainer = document.getElementById('insurance__dropdown-menu');
const chevronDownIcon = document.getElementById('chevronDown');
const hamMenu = document.getElementById('hamburger__menu');
const navMenu = document.getElementById('header__navs');
const header = document.querySelector('header');
const navLinks = document.querySelectorAll('.links__header');
const faqBoxAccordionItemHeader = document.querySelectorAll('.faq__box-accordion-item-header');



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
    console.log(`scrollPos is  ${scrollPosition}`)
    if (scrollPosition > 40) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
})



// HERO IMAGE CAROUSEL





// OUR SERVICE HOLDERS CAROUSEL

let scrollContainer = document.querySelector('.carousel__wrapper');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

scrollContainer.addEventListener('wheel', e => {
    e.preventDefault()
    scrollContainer.scrollLeft += e.deltaY;
    scrollContainer.style.scrollBehavior = 'auto';
})

prevBtn.addEventListener('click', () => {
    scrollContainer.style.scrollBehavior = 'smooth';
    scrollContainer.scrollLeft -= 500;
})

nextBtn.addEventListener('click', () => {
    scrollContainer.style.scrollBehavior = 'smooth';
    scrollContainer.scrollLeft += 500;
})



// FAQ DROPDOWN

faqBoxAccordionItemHeader.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener('click', e => {
        const currentlyActiveAccordionItemHeader = document.querySelector('.faq__box-accordion-item-header.active'); 
        if (currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader !== accordionItemHeader) {
            currentlyActiveAccordionItemHeader.classList.toggle('active');
            currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0; 
        }

        accordionItemHeader.classList.toggle('active');

        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if (accordionItemHeader.classList.contains('active')) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 'px';
        } else {
            accordionItemBody.style.maxHeight = 0;
        }
    })
})

// FOOTER YEAR

const yearPlaceholder = document.getElementById('year');

let date = new Date();
let year = date.getFullYear();
yearPlaceholder.innerText = year;


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