const direct = document.getElementById("direction")
const color1 = document.getElementById("color1")
const color2 = document.getElementById("color2")
const generateBtn = document.getElementById("generate")
let panel = document.getElementById("panel")
let result = document.getElementById("txt")
const copyBtn = document.getElementById("cpy")

generateBtn.addEventListener("click", function(){
    let gradient = `linear-gradient(${direct.value}, ${color1.value}, ${color2.value})`
    panel.style.background = gradient
    result.textContent = gradient
})

copyBtn.addEventListener("click", function(){
    let txt = result.textContent
    navigator.clipboard.writeText(txt).then(() => {
        alert("Copied")
    }), () => {
        alert("Failed to copy")
    }
})