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