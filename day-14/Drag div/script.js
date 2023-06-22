const div_drag = document.querySelector(".drag-div")

function drag({movementX, movementY}){
    let style = window.getComputedStyle(div_drag)
    let top = parseInt(style.top)
    let left = parseInt(style.left)
    div_drag.style.top = `${top + movementY}px`
    div_drag.style.left = `${left + movementX}px`

}

div_drag.addEventListener("mousedown", ()=>{
    div_drag.classList.add("active")
    div_drag.addEventListener("mousemove", drag)
})

document.addEventListener("mouseup", ()=>{
    div_drag.classList.remove("active")
    div_drag.removeEventListener("mousemove", drag)
})