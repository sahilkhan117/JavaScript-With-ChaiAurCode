const colors = document.querySelectorAll(".p-10")

let body = document.querySelector("body")

// console.log(colors);

colors.forEach( i => {
    i.addEventListener('click', e => {
        // console.log(e);
        // console.log(e.target);

        let col = e.target.id
        console.log(col);
        body.style.backgroundColor = col
    });
})