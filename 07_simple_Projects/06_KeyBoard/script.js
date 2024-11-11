let i = document.querySelector("#in")
let color = randomColor()

function randomColor() {
    let hex = "456789ABCDEF"
    let c = "#"
    for (let i = 0; i < 6; i++) c += hex[Math.floor(Math.random() * 12)]

    return c
}