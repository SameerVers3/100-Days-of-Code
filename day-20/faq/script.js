let accordians = document.querySelectorAll(".acordian");

accordians.forEach(acc => {
    const icon = acc.querySelector(".icon");
    const answer = acc.querySelector(".answer");

    acc.addEventListener("click", () => {
        if (icon.classList.contains("active")){
            icon.classList.remove("active");
            answer.style.maxHeight = null;
        }
        else{
            icon.classList.add("active");
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    })
})