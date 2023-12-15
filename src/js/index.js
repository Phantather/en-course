let arrPrepods = [
    {
        id: 1,
        job: "Grammar instructor",
        name: "Miss Aidana",
        education: "* Магистратура в Области Филологического Образования БГУ имени К.Карасаева 2021-2023 Бакалавр в Филологическом <br> * Образовании КГУ имени И.Арабаева 2015-2019",
        experience: "* Преподаватель Английского Языка Государственных школах города Бишкек 2019-2022 <br> * Преподаватель Английского Языка по грамматике Образовательный Центр Bright Future 2022-По настоящее время",
        Qualities: "* Улыбчивость: Позитивный настрой и радушие в общении. <br> * Доброта: Внимание и забота к каждому студенту. <br> * Мотивация: Стремление вдохновлять студентов на успешное обучение.",
        Professionalskills: null,
        PersonalInterests: null,
        img: "./src/assets/Miss Aidana.jpeg"
    },
    {
        id: 2,
        job: "Grammar instructor",
        name: "Miss Gul’zar",
        education: "* Магистратура в Области Филологического Образования БГУ имени К.Карасаева 2021-2023 <br> * Бакалавр в Филологическом Образовании КГУ имени И.Арабаева 2015-2019",
        experience: "* Преподаватель Английского ЯзыкаЧастных школах БишкекаИюнь 2021 - Январь 2023 <br> * Разработка и проведение уроков, ориентированных на эффективное изучение английского языка. Онлайн ПреподаваниеФевраль 2022 - По настоящее время <br> * Ведение уроков в формате онлайн, использование современных методов обучения через веб-платформы",
        Professionalskills: "* Преподавание: Эффективная передача знаний, адаптированная под различные уровни студентов. <br> * Онлайн Обучение: Уверенное владение веб-технологиями для эффективного онлайн обучения.",
        PersonalInterests: "Чтение: Преданность классической литературе елизаветинского и викторианского периода.  Корейские Сериалы: Увлечение просмотром кинематографа из Южной Кореи. Аниме: Интерес к мировой анимационной культуре. * Музыка: Страсть к разнообразным жанрам музыки.",
        Qualities: null,
        img: "./src/assets/Miss Gul’zar.jpeg"
    },
    {
        id: 3,
        job: "Talking Club instructor",
        name: "Mr.Teo",
        education: "В 2009 году с отличием окончил специальную международную научную школу в Дубае. - окончил Международный университет JUST в 2013 году по специальности преподаватель английского языка. -много работал по всему миру учителем английского языка офлайн и онлайн в Анкаре, Дубае и Центральной Азии. -Имеет сертификаты по HR, тайм-менеджменту и саморазвитию международной американской организации. - сертификат по русскому языку в международном советском университете. -Любит играть в баскетбол и шахматы. - Интересуется рисованием и графическим дизайном. - обожает читать книги по английской науке, саморазвитию, истории и здоровью.",
        experience: "Преподаватель Английского Языка Частных школах Бишкека Июнь 2021 - Январь 2023 * Разработка и проведение уроков, ориентированных на эффективное изучение английского языка. Онлайн Преподавание Февраль 2022 - По настоящее время * Ведение уроков в формате онлайн, использование современных методов обучения через веб-платформы.",
        Professionalskills: "Отличное владение английским языком как родным. Глубокие знания английской грамматики и лексики. Эффективное использование современных методик преподавания. Коммуникативные навыки, способность вдохновлять и мотивировать студентов.",
        PersonalInterests: null,
        Qualities: null,
        img: "./src/assets/Mr.Teo.jpeg"
    },
    {
        id: 4,
        job: "Основатель и СЕО",
        name: "Mr.Esen",
        education: "* Германский Университет Международных Отношений Мюнхен, Германия 2012-2016 Диплом по Международным Отношениям",
        experience: "* Практика по Международному Делу Лондон, Великобритания 2016-2017 <br> * Погружение в международные дела, разработка стратегий сотрудничества. Работа в Сфере Туризма Анкара, Турция 2018 <br> * Развитие туристических программ и управление клиентскими отношениями. Опыт в Ближнем востоке: Saudi Arabia, Qatar, UAE, Kuwait * Участие в международных проектах, координация бизнес-инициатив. Основал компании «KöchMan Travel Company” «KöchMan Honey”",
        Professionalskills: "Английский: Свободно  Немецкий: Свободно  Арабский: Свободно  Турецкий: Свободно",
        PersonalInterests: null,
        Qualities: "* Стратегическое Мышление Опыт разработки и реализации стратегий в различных областях. <br> * Международные Отношения: Глубокое понимание международных рынков и взаимоотношений. <br> * Лидерство Успешное управление многонациональными командами. * Культурная Гибкость: Адаптация к разнообразным культурным контекстам.",
        img: "./src/assets/Mr.Esen.jpeg"
    }
]
let swiperWrapper = document.querySelector(".swiper-wrapper")
const getUser = () => {
    arrPrepods.map(item => {
        swiperWrapper.innerHTML += `
        <div class="swiper-slide">
        <div class="teacher__card">
            <div class="teacher__card-imgs">
                <img class="teacher__card-img" src="${item.img}" alt="">
                <div class="teacher__job"> 
                    
                    <p class="teacher__job-name">
                        ${item.name}    
                    </p>
                    <p>
                        ${item.job}    
                    </p>
                </div>
                
            </div>

            <div class="teacher__card-menus">
                ${item.education ? 
                `<div class="teacher__card-menu">
                    <h2 class="teacher__card-menu-title">
                        Образование
                    </h2>
                    <p class="teacher__card-menu-desc">
                        ${item.education}
                    </p>
                </div>
                `: ""
                }
                 ${ item.experience ? 
                `<div class="teacher__card-menu">
                    <h2 class="teacher__card-menu-title">
                        Опыт Работы
                    </h2>
                    <p class="teacher__card-menu-desc">
                        ${item.experience}
                    </p>
                </div>
                ` : "" }
                ${  
                    item.Qualities !== null ? 
                    `<div class="teacher__card-menu">
                    <h2 class="teacher__card-menu-title">
                        Личные Качества
                    </h2>
                    <p class="teacher__card-menu-desc">
                        ${item.Qualities}
                    </p>
                    </div>` 
                    : ""
                }
                ${  
                    item.Professionalskills !== null ? 
                    `<div class="teacher__card-menu">
                    <h2 class="teacher__card-menu-title">
                        Профессиональные навыки
                    </h2>
                    <p class="teacher__card-menu-desc">
                        ${item.Professionalskills}
                    </p>
                    </div>` 
                    : ""
                }
                ${  
                    item.PersonalInterests !== null ? 
                    `<div class="teacher__card-menu">
                    <h2 class="teacher__card-menu-title">
                        Личный интерес
                    </h2>
                    <p class="teacher__card-menu-desc">
                        ${item.PersonalInterests}
                    </p>
                    </div>` 
                    : ""
                }
                

            </div>
        </div>
    </div>
        `
    })
}
getUser()
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
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    spaceBetween: 20,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next-el',
        prevEl: '.swiper-button-prev-el',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
let burger = document.querySelector('.header__burger')
let headerMenu = document.querySelector('.header__right')
burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    headerMenu.classList.toggle('active')
})
