const rockBtn = document.getElementById("rock")
const paperBtn = document.getElementById("paper")
const sisBtn = document.getElementById("scissors")
let result = document.getElementById("result")

function getRandom(){
    return (Math.floor(Math.random()*3)+1)
}

rockBtn.addEventListener("click", function(){
    let ai = getRandom()
    if (ai === 1){
        render("👊", "👊", "It's a tie! ", "Rock!")
    } else if (ai === 2){
        render("👊", "🤚", "You Lose 😱", "Paper!")
    } else if ( ai === 3){
        render("👊", "✌", "You won!!! 🥳🥳", "Scissors")
    }
})

paperBtn.addEventListener("click", function(){
    let ai = getRandom()
    if (ai === 1){
        render("🤚", "👊", "You won!!! 🥳🥳", "Rock!")
    } else if (ai === 2){
        render("🤚", "🤚", "It's a tie! ", "Paper!")
    } else if ( ai === 3){
        render("🤚", "✌", "You Lose 😱", "Scissors")
    }
})

sisBtn.addEventListener("click", function(){
    let ai = getRandom()
    if (ai === 1){
        render("✌", "👊", "You Lose 😱", "Rock!")
    } else if (ai === 2){
        render("✌", "🤚", "You won!!! 🥳🥳", "Paper!")
    } else if ( ai === 3){
        render("✌", "✌", "It's a tie! ", "Scissors")
    }
})

function render(your, ai, message, choice){
    result.innerHTML = `
        <p><u>AI choice:</u></p>
        <div class="card">
            <center><button>
                <p>"${ai}"</p>
                    ${choice}
            </button></center>
        </div>
        <p>${your} vs ${ai}</p>
        <p>${message}</p>
    `
}