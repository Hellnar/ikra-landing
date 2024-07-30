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
openPopup()

function createCards() {
    let list = ""
    let iter = 1
    for(const card of cards) {
        list += `
        <div class="card w-[100%] h-[8rem] relative hover:cursor-pointer">
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

function openPopup() {
    document.querySelectorAll(".card").forEach(card => card.addEventListener("click", () => popup()))
}

function closePopup() {
    document.getElementById("close-popup").addEventListener("click", () => document.getElementById("popup").remove())
    document.getElementById("popup").addEventListener("click", (e) => {
        if(e.target === e.currentTarget) document.getElementById("popup").remove()
    })
}

function trackSubmission() {
    document.getElementById("submit").addEventListener("click", () => {
        setTimeout(() => {
            document.getElementById("popup").remove()
        }, 1000)
    })
}

function popup() {
    const window = document.createElement("div")
    window.id = "popup"
    window.className = "w-[100vw] h-[100vh] fixed top-0 left-0 flex justify-center items-center bg-black bg-opacity-80"
    window.innerHTML = `
    <div class="md:w-[60%] sm:w-[80%] bg-white rounded-lg flex flex-col gap-4 items-center relative p-6">
        <button id="close-popup" class="absolute top-2 right-2 font-bold text-xl px-4 py-2 hover:bg-gray-200 rounded-lg">x</button>
        <div class="flex items-center gap-4">
            <p>Напишiть нам у: </p>
            <div class="flex gap-4 items-center">
                <a href="https://www.instagram.com/direct/t/103694637697525"><img class="w-8 h-8" src="./img/w_insta.png"></a>
                <a href="https://t.me/raikra"><img class="w-8 h-8" src="./img/w_tg.png"></a>
                <a href="viber://+380955201515"><img class="w-8 h-8" src="./img/w_viber.png"></a>  
                <a href="https://wa.me/+380955201515"><img class="w-8 h-8" src="./img/w_whatsapp.png"></a>   
            </div>
        </div>
        <div class="flex flex-col items-center gap-4">
            <p>Або залиште свiй номер </p>
            <p>ми Вам зателефонуємо!</p>
            <!-- modify this form HTML and place wherever you want your form -->
            <form target="_blank" action="https://formspree.io/f/xanwoqwv" method="POST">
                <input type="phone" name="phone" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                <!-- your other form fields go here -->
                <div class="flex justify-center mt-4">
                    <button id="submit" type="submit" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Вiдправити</button>
                </div>
            </form>
        </div>
    </div>
    `
    document.body.appendChild(window)
    closePopup()
    trackSubmission()
}