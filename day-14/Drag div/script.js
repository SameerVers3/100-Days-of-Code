const div = document.querySelector(".drag-div")
const header = document.querySelector("header")

function drag(){
    let style = window.getComputedStyle(div)
    let top = parseInt(style.top)
    let left = parseInt(style.left)
    console.log(top, left)
}

div.addEventListener("mousedown", ()=>{
    header.addEventListener("mousemove", drag)
})