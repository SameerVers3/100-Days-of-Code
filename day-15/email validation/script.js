const input = document.getElementById("mail");
const icon = document.getElementById("icon");

let pattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/

input.addEventListener("keyup", () =>{
    if (input.value === ""){
        icon.innerHTML = `<i class="fa-regular fa-envelope"></i>`
        icon.style.color = "rgb(146, 146, 146)"
        return
    }
    if (input.value.match(pattern)){
        icon.innerHTML = `<i class="fa-regular fa-circle-check"></i>`
        return icon.style.color = "rgb(53, 134, 5)"
    }
    else{
        icon.innerHTML = `<i class="fa-regular fa-envelope"></i>`
        return icon.style.color = "rgb(190, 41, 41)"
    }
})