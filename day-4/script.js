let myleads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("save-btn")
const deleteBtn = document.getElementById("delete-btn")
const saveBtn = document.getElementById("saveTab-btn")

let ulEl = document.getElementById("ul-el")

if (localStorage.getItem("myleads")){
    myleads = JSON.parse(localStorage.getItem("myleads"))
    renderLeads();
}

inputBtn.addEventListener("click", function(){
    myleads.push(inputEl.value)
    console.log(myleads[myleads.length-1])
    inputEl.value = null
    localStorage.setItem("myleads", JSON.stringify(myleads))
    console.log(localStorage.getItem("myleads"))
    renderLeads()
})

deleteBtn.addEventListener("dblclick", function() {
    myleads = []
    localStorage.clear()
    renderLeads()
})

saveBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myleads.push(tabs[0].url)
        localStorage.setItem("myleads", JSON.stringify(myleads))
        renderLeads()
    })
})


function renderLeads(){
    let listItem = ""
    for (let i=0; i<myleads.length; i++){
        listItem += `<li>
                        <a href="${myleads[i]}" target="_blank">
                            ${myleads[i]}
                        </a>
                    </li>`
    }
    ulEl.innerHTML = listItem
}