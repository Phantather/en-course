let select = document.querySelector('.change-lang');
let allLang = ['ru', 'en'];
select.addEventListener('change', changeLanguage);

function changeLanguage() {
    let lang = select.value;
    location.href = window.location.pathname + "#" + lang;
    updatePageLanguage(lang);
}

function updatePageLanguage(lang) {
    // Здесь вы должны обновить тексты на странице в соответствии с выбранным языком (lang).
    // Например, используя объект с переводами langArr.
    for (let key in langArr) {
        let elem = document.querySelector('.lang-' + key);
        if (elem) {
            if (elem.classList.contains('footer__card-field')) {
                // Если элемент является полем ввода, обновите его placeholder
                elem.placeholder = langArr[key][lang];
            } else {
                // В противном случае, обновите текст элемента
                elem.innerHTML = langArr[key][lang];
            }
        }
    }
}

// Функция для инициализации языка при загрузке страницы
function initializeLanguage() {
    let hash = window.location.hash;
    hash = hash.substr(1);
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + "#ru";
        hash = 'ru'; // Если хэш был недопустимым, устанавливаем русский как язык по умолчанию
    }
    select.value = hash;
    updatePageLanguage(hash);
}

initializeLanguage();
