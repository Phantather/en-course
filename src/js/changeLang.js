let select = document.querySelector('.change-lang')
let allLang = ['ru', 'en']
select.addEventListener('change', changeUrlLanguage)

function changeUrlLanguage(){
    let lang = select.value
    location.href = window.location.pathname + "#" + lang
    location.reload()
}

function changeLanguage () {
    let hash = window.location.hash
    hash = hash.substr(1)
    if (!allLang.includes(hash)){
        location.href = window.location.pathname + "#ru"
        location.reload()
    }
    select.value = hash
    // document.querySelector('.lang-header').innerHTML = langArr['header'][hash]
    for (let key in langArr) {
        let elem = document.querySelector('.lang-' + key);
        console.log(key)
        if (elem) {
            elem.innerHTML = langArr[key][hash];
        }
    }
}


changeLanguage()