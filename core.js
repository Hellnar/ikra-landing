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
    <div class="w-[40%] bg-white">
        <p>Hello</p>
    </div>
    `
    document.body.appendChild(window)
}