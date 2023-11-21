document.addEventListener("DOMContentLoaded", function () {
    const accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach(function (header) {
        header.addEventListener("click", function () {
            const content = this.nextElementSibling;
            if (content.style.display === 'block') {
                content.style.display = 'none';
                this.classList.remove("open");
            } else {
                closeAllAccordionItems();
                content.style.display = 'block';
                this.classList.add("open");
            }
        });
    });

    function closeAllAccordionItems() {
        const accordionContents = document.querySelectorAll(".accordion-content");
        const accordionHeaders = document.querySelectorAll(".accordion-header");
        accordionContents.forEach(function (content) {
            content.style.display = 'none';
        });
        accordionHeaders.forEach(function (header) {
            header.classList.remove("open");
        });
    }
});


let im = new Inputmask("\\9\\96 (999) 99-99-99");

let phones = document.querySelectorAll('.phone')
phones.forEach((phone) => im.mask(phone))

// const scriptURL = 'https://script.google.com/macros/s/AKfycby8W01J_BF29dc57pzZE5FzAW993gyrHiSaoNSjWVyqN7nw96ugqFv7OE-ylJTGVUKWDw/exec'
// const form = document.forms['submit-to-google-sheet']

// form.addEventListener('submit', e => {
//     e.preventDefault()
//     fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//         .then(response => console.log('Success!', response))
//         .catch(error => console.error('Error!', error.message))
// })
//
//


let overlay = document.querySelector('.overlay')
let btnForm = document.querySelector('.lang-begin_s')
let btnClose = document.querySelector('.form__close')

btnForm.addEventListener('click', () => {
    overlay.style.display = 'flex'
})

btnClose.addEventListener('click', () => {
    overlay.style.display = 'none'
})

overlay.addEventListener('click', (e) => {
    if (e.target.className === 'overlay') {
        overlay.style.display = 'none'
    }
})

let burger = document.querySelector('.header__burger')
let headerMenu = document.querySelector('.header__right')
burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    headerMenu.classList.toggle('active')
})