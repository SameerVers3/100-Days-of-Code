const pallet = document.getElementById("pallet")
const generateBtn = document.getElementById("btn")
generate()

function getRandomColor(){
    let red = Math.floor(Math.random()*255)
    let green = Math.floor(Math.random()*255)
    let blue = Math.floor(Math.random()*255)

    return `rgb(${red}, ${green}, ${blue})`
}

function generate(){
    pallet.innerHTML = ""
    for(let i=0; i<5; i++){
        let div = document.createElement("div")
        div.style.backgroundColor = getRandomColor()
        div.classList.add("col")
        let copy = document.createElement("div")
        copy.innerHTML = `<br> <p>${div.style.backgroundColor}</p>`
        copy.classList.add("copy")
        div.appendChild(copy)
        pallet.appendChild(div)
    }
    console.log("hellp")
}

generateBtn.addEventListener("click", function(){
    generate()
})