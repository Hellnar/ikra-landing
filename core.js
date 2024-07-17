const cards = [
    {name: "adsa", img: ""},
    {name: "adsa", img: ""},
    {name: "adsa", img: ""},
    {name: "adsa", img: ""},
    {name: "adsa", img: ""},
    {name: "adsa", img: ""},
    {name: "adsa", img: ""},
    {name: "adsa", img: ""},
    {name: "adsa", img: ""},
    {name: "adsa", img: ""},
    {name: "adsa", img: ""},
    {name: "adsa", img: ""},
    {name: "adsa", img: ""},
    {name: "adsa", img: ""},
    {name: "adsa", img: ""},
    {name: "adsa", img: ""},
    {name: "adsa", img: ""},
    {name: "adsa", img: ""},
    {name: "adsa", img: ""},
    {name: "adsa", img: ""},
    {name: "adsa", img: ""},
    {name: "adsa", img: ""},
    {name: "adsa", img: ""},
    {name: "adsa", img: ""}
]

addCards()

function createCards() {
    let list = ""
    for(const card of cards) {
        list += `
        <div class="w-[100%] h-[7rem] relative">
            <img class="w-[100%] h-[7rem] object-cover" src="https://picsum.photos/300/200">
            <p class="absolute top-[0.5rem] left-[0.5rem] right-[0.5rem] text-center bg-black bg-opacity-70 text-white">${card.name}</p>
        </div>
        `
    }
    return list
}

function addCards() {
    document.getElementById("cards").innerHTML = createCards()
}