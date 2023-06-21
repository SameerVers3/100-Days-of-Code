const items = document.querySelectorAll(".card")
const list = document.querySelector(".container")


items.forEach(item => {
    item.addEventListener("dragstart", () => {
        setTimeout(() => item.classList.add("dragging"), 0)
    });
    item.addEventListener("dragend", () => {
        item.classList.remove("dragging")
    })
});

const sort = (e) => {
     const draggingItem = list.querySelector(".dragging");
 
     const siblings = [...list.querySelectorAll(".card:not(.dragging)")];

     let nextSibling = siblings.find(sibling =>{
        return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
     });
    list.insertBefore(draggingItem, nextSibling);
}

list.addEventListener("dragover", sort);