const slider = document.getElementById("rangeElement")
const valueEl = document.getElementById("valueElement")

const isLower = document.getElementById("isLower")
const isUper = document.getElementById("isUpper")
const isNum = document.getElementById("isNum")
const isSpecial = document.getElementById("isSpecial")
const gen = document.getElementById("generate")
const copyBtn = document.getElementById("cpy")

isLower.checked = true
isUper.checked = true
isNum.checked = true
isSpecial.checked = true

const pass = document.getElementById("pass")

let lower = "abcdefghijklmnopqrstuvwxyz"
let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let number = "0123456789"
let special = "!#$%^&*"

slider.addEventListener("input", function(){
    valueEl.textContent = `Length: ${slider.value}` 
})


gen.addEventListener("click", function(){
    
    let length = slider.value;
    let password = ""
    let charracters = ""

    charracters += isUper.checked ? upper : ""
    charracters += isLower.checked ? lower : ""
    charracters += isNum.checked ? number : ""
    charracters += isSpecial.checked ? special : ""

    for(let i=0; i<length; i++){
        password += charracters.charAt(Math.floor(Math.random()*charracters.length))
    }
    
    pass.textContent = password
})

function getRandom(str){
    return str.chartAt(Math.floor(Math.random()*str.length))
}

copyBtn.addEventListener("click", function(){
    let txt = pass.textContent
    navigator.clipboard.writeText(txt).then(() => {
        alert("Copied")
    }), () => {
        alert("Failed to copy")
    }
})




