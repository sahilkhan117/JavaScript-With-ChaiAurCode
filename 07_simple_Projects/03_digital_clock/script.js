const clock = document.querySelector("#clock")

setInterval(() => {
    d = new Date()
    clock.innerHTML = d.toLocaleTimeString()
}, 1000)