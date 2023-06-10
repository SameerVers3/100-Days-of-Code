let myleads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("save-btn")
let ulEl = document.getElementById("ul-el")


inputBtn.addEventListener("click", function(){
    myleads.push(inputEl.value)
    console.log(myleads[myleads.length-1])
    inputEl.value = null
    renderLeads()
})

function renderLeads(){
    let listItem = ""
    for (let i=0; i<myleads.length; i++){
        listItem += '<li><a href="'+ myleads[i] + '">' + myleads[i] + '</a></li>'
    }
    ulEl.innerHTML = listItem
}