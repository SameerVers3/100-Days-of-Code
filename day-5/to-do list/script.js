const inputBox = document.getElementById("input-box")
const addBtn = document.getElementById("add-btn")
const listContatiner = document.getElementById("task-list")

renderData()
addBtn.addEventListener("click", function(){
    if(inputBox.value === ""){
        alert("text box is empty")
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = inputBox.value
        listContatiner.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    inputBox.value = ""
    saveData()
})

listContatiner.addEventListener("click", function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveData()
    }
}, false)

function saveData(){
    localStorage.setItem("data", listContatiner.innerHTML)
}

function renderData(){
    listContatiner.innerHTML = localStorage.getItem("data")
}