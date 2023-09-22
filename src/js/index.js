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


let im = new Inputmask("+\\9\\96 (999) 99-99-99");

let formTel = document.querySelector('#tel')

im.mask(formTel);
