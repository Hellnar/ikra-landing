const cards = [
    "ВIЗИТКИ",
    "НАЛIПКИ",
    "ЛИСТIВКИ",
    "БIРКИ",
    "ПОДАРУНКОВI СЕРТИФIКАТИ",
    "БЛОКНОТИ",
    "МАГНIТИ",
    "КАТАЛОГИ",
    "ПЛАСТИКОВI КАРТИ",
    "КОНВЕРТИ",
    "БЛОКИ ДЛЯ ЗАПИСIВ",
    "КАЛЕНДАРI",
    "ВИВIСКИ",
    "БАНЕРИ",
    "ПОСТЕРИ",
    "ТАБЛИЧКИ",
    "ПЛIВКА",
    "НАЛIПКИ НА АВТО",
    "МОБIЛЬНI СТЕНДИ",
    "КАРТИНИ",
    "МЕТАЛЕВI ТАБЛИЧКИ",
    "ЧАШКИ",
    "ФУТБОЛКИ",
    "КЕПКИ"
]

addCards()
popup()

function createCards() {
    let list = ""
    let iter = 1
    for(const card of cards) {
        list += `
        <div class="w-[100%] h-[8rem] relative">
            <img class="w-[100%] h-[8rem] object-cover" src="./img/${iter}.jpg">
            <p class="absolute top-[0.5rem] left-[0.5rem] right-[0.5rem] text-center font-bold bg-black bg-opacity-70 text-white">${card}</p>
        </div>
        `
        iter++
    }
    return list
}

function addCards() {
    document.getElementById("cards").innerHTML = createCards()
}

function popup() {
    const window = document.createElement("div")
    window.className = "w-[100vw] h-[100vh] fixed top-0 left-0 flex justify-center items-center"
    window.innerHTML = `
    <div class="w-[60%] bg-white rounded-lg flex flex-col items-center p-6">
        <div class="flex items-center">
            <p>Напишiть нам у: </p>
            <div class="flex gap-4 items-center">
                <img class="w-8 h-8" src="./img/w_insta.png">   
                <img class="w-8 h-8" src="./img/w_tg.png">   
                <img class="w-8 h-8" src="./img/w_viber.png">   
                <img class="w-8 h-8" src="./img/w_whatsapp.png">   
            </div>
        </div>
        <div class="flex items-center gap-4">
            <p>Або залиште свiй номер </p>
            <input type="text" class="border">
            <p>ми Вам зателефонуємо</p>
        </div>
    </div>
    `
    document.body.appendChild(window)
}