let btn = document.querySelector(".change-lang")
let value = ""
let arrPrepods = [
    {
        id: 1,
        job: "Основатель и СЕО",
        name: "Mr.Esen",
        nameEN: "Mr.Esen",
        education: "* Германский Университет Международных Отношений Мюнхен, Германия 2012-2016 Диплом по Международным Отношениям",
        experience: "* Практика по Международному Делу Лондон, Великобритания 2016-2017 <br> * Погружение в международные дела, разработка стратегий сотрудничества. Работа в Сфере Туризма Анкара, Турция 2018 <br> * Развитие туристических программ и управление клиентскими отношениями. Опыт в Ближнем востоке: Saudi Arabia, Qatar, UAE, Kuwait * Участие в международных проектах, координация бизнес-инициатив. Основал компании «KöchMan Travel Company” «KöchMan Honey”",
        Professionalskills: "Английский: Свободно  Немецкий: Свободно  Арабский: Свободно  Турецкий: Свободно",
        PersonalInterests: null,
        Qualities: "* Стратегическое Мышление Опыт разработки и реализации стратегий в различных областях. <br> * Международные Отношения: Глубокое понимание международных рынков и взаимоотношений. <br> * Лидерство Успешное управление многонациональными командами. * Культурная Гибкость: Адаптация к разнообразным культурным контекстам.",
        educationEN: "* German University of International Relations Munich, Germany 2012-2016 Diploma in International Relations",
        experienceEN: "* International Affairs Practice London, UK 2016-2017 <br> * Immersion in the development of cases, development of cooperation strategies. Work in the Tourism Sector Ankara, Turkey 2018 <br> * Development of tourism programs and management of client relationships. Experience of influencing in the east: Saudi Arabia, Qatar, UAE, Kuwait * Participation in international projects, coordination of business initiatives. Founded the company \"KöchMan Travel Company\" \"KöchMan Honey\"",
        QualitiesEN: "* Smiling: Positive attitude and cordiality in communication. <br> * Kindness: Attention and care for each student. <br> * Motivation: The desire to inspire students to succeed in their studies.",
        ProfessionalskillsEN: "* Strategic Thinking Experience developing and implementing strategies in various areas. <br> * International Relations: Deep understanding of international markets and relationships. <br> * Leadership Successfully managing multinational teams. * Cultural Flexibility: Adaptation to diverse cultural contexts.\n",
        PersonalInterestsEN: null,
        img: "./src/assets/Mr.Esen.jpeg",
        InternationalExperienceEn:null,

        InternationalExperience: null
    },
    {
        id: 2,
        job: "Supervisor",
        name: "Mr.Teo",
        nameEN: "Mr.Teo",
        education: "В 2009 году с отличием окончил специальную международную научную школу в Дубае. - окончил Международный университет JUST в 2013 году по специальности преподаватель английского языка. -много работал по всему миру учителем английского языка офлайн и онлайн в Анкаре, Дубае и Центральной Азии. -Имеет сертификаты по HR, тайм-менеджменту и саморазвитию международной американской организации. - сертификат по русскому языку в международном советском университете. -Любит играть в баскетбол и шахматы. - Интересуется рисованием и графическим дизайном. - обожает читать книги по английской науке, саморазвитию, истории и здоровью.",
        experience: "Преподаватель Английского Языка Частных школах Бишкека Июнь 2021 - Январь 2023 * Разработка и проведение уроков, ориентированных на эффективное изучение английского языка. Онлайн Преподавание Февраль 2022 - По настоящее время * Ведение уроков в формате онлайн, использование современных методов обучения через веб-платформы.",
        Professionalskills: "Отличное владение английским языком как родным. Глубокие знания английской грамматики и лексики. Эффективное использование современных методик преподавания. Коммуникативные навыки, способность вдохновлять и мотивировать студентов.",
        PersonalInterests: null,
        Qualities: null,
        educationEN: "In 2009, he graduated with honors from a special international scientific school in Dubai. - Graduated from JUST International University in 2013 with a degree in English language teaching. - worked a lot around the world as an English teacher offline and online in Ankara, Dubai and Central Asia. -Has certificates in HR, time management and self-development of an international American organization. - Certificate in Russian language at the International Soviet University. -Loves playing basketball and chess. - Interested in drawing and graphic design. - loves reading books on English science, self-development, history and health.",
        experienceEN: "* English Language Teacher in Bishkek Public Schools 2019-2022 <br> * English Grammar Teacher at Bright Future Educational Center 2022-Present",
        QualitiesEN: "",
        ProfessionalskillsEN: "Excellent command of English as a native language. Deep knowledge of English grammar and vocabulary. Effective use of modern teaching methods. Communication skills, ability to inspire and motivate students.",
        PersonalInterestsEN: null,
        InternationalExperience: null,
        InternationalExperienceEn:null,

        img: "./src/assets/Mr.Teo.jpeg"
    },

    {
        id: 3,
        job: "Grammar instructor",
        name: "Мисс Айдана",
        nameEN: "Miss Aidana",
        education: "* Магистратура в Области Филологического Образования БГУ имени К.Карасаева 2021-2023 Бакалавр в Филологическом <br> * Образовании КГУ имени И.Арабаева 2015-2019",
        experience: "* Преподаватель Английского Языка Государственных школах города Бишкек 2019-2022 <br> * Преподаватель Английского Языка по грамматике Образовательный Центр Bright Future 2022-По настоящее время",
        Qualities: "* Улыбчивость: Позитивный настрой и радушие в общении. <br> * Доброта: Внимание и забота к каждому студенту. <br> * Мотивация: Стремление вдохновлять студентов на успешное обучение.",
        Professionalskills: null,
        InternationalExperience: null,
        PersonalInterests: null,
        educationEN: "* Master's degree in Philological Education BSU named after K. Karasaev 2021-2023 Bachelor's degree in Philological <br> * Education KSU named after I. Arabaev 2015-2019",
        experienceEN: "* English Language Teacher in Bishkek Public Schools 2019-2022 <br> * English Grammar Teacher at Bright Future Educational Center 2022-Present",
        QualitiesEN: "* Smiling: Positive attitude and cordiality in communication. <br> * Kindness: Attention and care for each student. <br> * Motivation: The desire to inspire students to succeed in their studies.",
        ProfessionalskillsEN: null,
        PersonalInterestsEN: null,
        InternationalExperienceEn:null,

        img: "./src/assets/MissAidana.jpeg"
    },
    {
        id: 4,
        job: "Grammar instructor",
        name: "Мисс Гульзар",
        nameEN: "Miss Gul’zar",
        education: "* Кыргызско-Турецкий Университет «Манас» Гуманитарный Факультет, Отделение Западных Языков Программа: Английский Язык и Литература Июнь 2023",
        experience: "* Преподаватель Английского ЯзыкаЧастных школах БишкекаИюнь 2021 - Январь 2023 <br> * Разработка и проведение уроков, ориентированных на эффективное изучение английского языка. Онлайн ПреподаваниеФевраль 2022 - По настоящее время <br> * Ведение уроков в формате онлайн, использование современных методов обучения через веб-платформы",
        Professionalskills: "* Преподавание: Эффективная передача знаний, адаптированная под различные уровни студентов. <br> * Онлайн Обучение: Уверенное владение веб-технологиями для эффективного онлайн обучения.",
        PersonalInterests: "Чтение: Преданность классической литературе елизаветинского и викторианского периода.  Корейские Сериалы: Увлечение просмотром кинематографа из Южной Кореи. Аниме: Интерес к мировой анимационной культуре. * Музыка: Страсть к разнообразным жанрам музыки.",
        Qualities: null,
        InternationalExperience: null,
        educationEN: "Kyrgyz-Turkish Manas UniversityFaculty of Humanities, Department of Western LanguagesProgram: English Language and LiteratureJune 2023",
        experienceEN: "* English Language Teacher at Private Schools in Bishkek June 2021 - January 2023 <br> * Development and delivery of lessons focused on effective learning of the English language. Online TeachingFebruary 2022 - Present <br> * Conducting lessons online, using modern teaching methods through web platforms",
        QualitiesEN: null,
        InternationalExperienceEn:null,

        ProfessionalskillsEN: "* Teaching: Effective transfer of knowledge, adapted to different levels of students. <br> * Online Learning: Confident use of web technologies for effective online learning.",
        PersonalInterestsEN: "Reading: Devotion to the classic literature of the Elizabethan and Victorian periods. Korean TV Series: Passion for watching cinema from South Korea. Anime: Interest in world animation culture. * Music: Passion for a variety of genres of music.",
        img: "./src/assets/MissGul'zar.jpg"
    },
    {
        id: 5,
        job: "Grammar instructor",
        name: "Мисс Алина",
        nameEN: "Miss Alina",
        education: "* Бишкекский Государственный Университет им. К. Карасаева Факультет Европейских Цивилизаций, Лингвистика, Теория и Методика Преподавания Иностранных Языков и Культур\n <br> * Специализация: Английский Язык",
        educationEN: "* Bishkek State University named after K. Karasaeva Faculty of European Civilizations, Linguistics, Theory and Methodology of Teaching Foreign Languages ​​and Cultures <br> * Specialization: English Language",
        experience: "* Средняя Общеобразовательная Школа Годы работы\n <br> * Ведение эффективного делопроизводства.\n International Language House Годы работы\n <br> * Преподавание английского языка с фокусом на индивидуальный подход к каждому студенту.\n <br> * Активное участие в Talking Club для стимулирования разговорных навыков",
        experienceEN: "* Middle School Years of work\n <br> * Conducting effective document flow.\n International Language House Years of work\n <br> * Teaching English with a focus on an individual approach to each student.\n <br> * Active participation in Talking Club to stimulate conversational skills",
        Professionalskills: null,
        ProfessionalskillsEN: null,
        PersonalInterests: null,
        PersonalInterestsEN: null,
        Qualities: null,
        InternationalExperienceEn:null,

        InternationalExperience: null,
        QualitiesEN: null,
        img: "./src/assets/Alina.jpeg"
    },
    {
        id: 6,
        job: "Talking Club instructor",
        name: "Mr. Jerry Orphe",
        nameEN: "Mr. Jerry Orphe",
        education: "* Сертификат Международной академии TEFL, Чикаго, Иллинойс [США] по обучению EFL (TESOL)<br>* Технологический колледж Фонтанхед, Ноксвилл, Теннесси [США] Степень младшего специалиста в области веб-разработки.<br>* Средняя школа Алкоа, Алкоа, Теннесси [США] Аттестат средней школы",
        experience: "* Сентябрь 2022 — Октябрь 2023 Международная Арктическая школа Якутск, RU artic-school.com<br>учитель английского<br>Меня назначили проводить языковые инструкции и репетиторство по подготовке к экзаменам для определенных лиц/групп в этой государственной школе; первичный с трудностями в аудировании/говорении. Иногда я использую различные дисциплины и формулы, чтобы преодолеть трудности, возникающие у ученика при аудировании/говорении. Мы также использовали учебники в течение года. Также несколько раз в месяц провожу внеклассные мероприятия.<br>Август 2021 г. – настоящее время<br>Британский центр (языковой центр ESL и онлайн-школа)",
        Professionalskills: null,
        PersonalInterests: null,
        Qualities: null,
        educationEN: "* TEFL International Academy Certificate, Chicago, Illinois, USA in EFL (TESOL) Teaching<br>* Fontanhead Technical College, Knoxville, Tennessee, USA Associate degree in web development<br>* Alcoa High School, Alcoa, Tennessee, USA High School Diploma",
        experienceEN: "* September 2022 – October 2023 International Arctic School Yakutsk, RU artic-school.com<br>English teacher<br>Appointed to conduct language instructions and tutoring for exam preparation for specific individuals/groups in this public school; primary with difficulties in listening/speaking. Sometimes I use various disciplines and formulas to overcome the difficulties that students face in listening/speaking. We also used textbooks throughout the year. Also, several times a month, I conduct extracurricular activities.<br>August 2021 – Present British Center (ESL Language Center and Online School)<br><br>November 2020 - Present AngloMania (Online School)<br>June 2020 - Present Anglochanka (Online School)<br>March 2019 — May 2020 Level Eleven (formerly part of London Express) Novosibirsk, RU leveleleven.ru<br>English teacher<br>Appointed to conduct language instructions and tutoring for exam preparation for specific individuals/groups in several branches throughout the city.",
        QualitiesEN: null,
        InternationalExperience: null,
        InternationalExperienceEn:null,

        ProfessionalskillsEN: null,
        PersonalInterestsEN: null,
        img: "./src/assets/Mr.%20Jerry%20Orphe.jpeg"  // Замените на путь к изображению преподавателя, если доступно
    },
    {
        id: 7,
        job: "Talking Club instructor",
        name: "Mr.Prince",
        nameEN: "Mr.Prince ",
        education: "Магистратура в Области лингвистики  «Стэнфордский Университет», Америка Бакалавр в Университете «Джос», Нигерия",
        experience: "Центральной Азии <br>* Работал в «Оксфордской международной школе». <br> * Задачи включали разработку и внедрение образовательных программ, координацию международных образовательных проектов. Алматы, Казахстан «Международной школе «Мира» в Алматы. <br> * Ответственность за обучение английскому языку, разработку учебных материалов, и ведение образовательных мероприятий. Преподавал Английский Язык, Китае <br> * Преподавание английского языка студентам различных уровней.",
        Professionalskills: null,
        PersonalInterests: null,
        InternationalExperience: "Многолетний Опыт Работы по Всему Миру: <br> * Работа в различных культурных средах, что способствовало разностороннему пониманию образовательных потребностей студентов. ",
        InternationalExperienceEn: "Many Years of Experience Around the World: <br> * Working in different cultural environments, which contributed to a diverse understanding of the educational needs of students.",
        Qualities: null,
        experienceEN: "Central Asia <br> * Worked at Oxford International School. <br> * Tasks included the development and implementation of educational programs, coordination of international educational projects. Almaty, Kazakhstan “International School “Peace” in Almaty. <br> * Responsible for teaching English, developing teaching materials, and leading educational activities. Taught English Language, China <br> * Teaching English to students of various levels. <br> * Participation in extraural educational and cultural events. <br> International  experience <br> Many Years of Experience Around the World: <br> * Working in different cultural environments, which contributed to a diverse understanding of the educational needs of students.",
        QualitiesEN: null,
        ProfessionalskillsEN: null,
        PersonalInterestsEN: null,
        img: "./src/assets/Mr.Prince.jpeg"  // Замените на путь к изображению преподавателя, если доступно
    }

]
let swiperWrapper = document.querySelector(".swiper-wrapper")
const swiperContainer = document.querySelector('.swiper-container');

const getUser = () => {

    swiperWrapper.innerHTML = ""
    arrPrepods.map((item) => {
        swiperWrapper.innerHTML += `
        <div class="swiper-slide">
        <div class="teacher__card">
            <div class="teacher__card-imgs">
                <img class="teacher__card-img" src="${item.img}" alt="">
                <div class="teacher__job"> 
                    
                    <p class="teacher__job-name">
                        ${value === 'en' ? item.nameEN : item.name}    
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
                        ${value === "en" ? `Education` : "Оброзавание"}
                    </h2>
                    <p class="teacher__card-menu-desc">
                        ${value === "en" ? item.educationEN : item.education}
                    </p>
                </div>
                `: ""
                }
                 ${ item.experience ? 
                `<div class="teacher__card-menu">
                    <h2 class="teacher__card-menu-title">
                       
                        ${value === "en" ? "Experience" : "Опыт Работы"}
                    </h2>
                    <p class="teacher__card-menu-desc">
                        ${value === "en" ? item.experienceEN : item.experience}
                    </p>
                </div>
                ` : "" }
                ${  
                    item.Qualities !== null ? 
                    `<div class="teacher__card-menu">
                    <h2 class="teacher__card-menu-title">
                        
                        ${value === "en" ? "Qualities" : "Личные Качества"}
                    </h2>
                    <p class="teacher__card-menu-desc">
                        ${value === "en" ? item.QualitiesEN : item.Qualities}
                    </p>
                    </div>` 
                    : ""
                }
                ${  
                    item.Professionalskills !== null ? 
                    `<div class="teacher__card-menu">
                    <h2 class="teacher__card-menu-title">
                    ${value === "en" ? "Professional-skills" : "Профессиональные навыки"}
                        
                    </h2>
                    <p class="teacher__card-menu-desc">
                        ${value === "en" ? item.ProfessionalskillsEN : item.Professionalskills}
                    </p>
                    </div>` 
                    : ""
                }
                ${  
                    item.PersonalInterests !== null ? 
                    `<div class="teacher__card-menu">
                    <h2 class="teacher__card-menu-title">
                    ${value === "en" ? "Personal-Interests" : "Личный интерес"}
                        
                    </h2>
                    <p class="teacher__card-menu-desc">
                        ${value === "en" ? item.PersonalInterestsEN : item.PersonalInterests}
                    </p>
                    </div>` 
                    : ""
                }
                ${  
                    item.InternationalExperience !== null ? 
                    `<div class="teacher__card-menu">
                    <h2 class="teacher__card-menu-title">
                    ${value === "en" ? "International experience" : "Международный Опыт"}
                        
                    </h2>
                    <p class="teacher__card-menu-desc">
                        ${value === "en" ? item.InternationalExperienceEn : item.InternationalExperience}
                    </p>
                    </div>` 
                    : ""
                }
                

            </div>
        </div>
    </div>
        `
    })
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        loop: true,
        spaceBetween: 20,
        center:true,
        // autoplay: {
        //     delay: 5000,
        //   },
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


}

getUser()
btn.addEventListener("change",(e) => {
    value = e.target.value
    getUser()
})



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


