let inputDir = {x: 0, y:0}
const foodSound = new Audio("music/food.mp3")
const moveSound = new Audio("music/move.mp3")
const gameOverSound = new Audio("music/gameover.mp3")
let board = document.getElementById("board")
let scoreEl = document.getElementById("score")
let hightScore = document.getElementById("hi-score")
let lastPaintTime = 0
let speed=12
let score = 0
let hiscoreval = 0

let snakeArr = [
    {x: 13, y:13}
]

let food = {x: 6, y: 7}

function main(ctime){
    window.requestAnimationFrame(main)
    // console.log(ctime)
    if((ctime - lastPaintTime)/1000 < 1/speed){
        return
    }
    lastPaintTime = ctime
    gameEngine()
}

function isCollide(sarr){
    for(let i=1; i<sarr.length; i++){
        if (sarr[0].x === sarr[i].x && sarr[0].y === sarr[i].y){
            return true
        }
    }
    if (sarr[0].x >= 18 || sarr[0].x <= 0 || sarr[0].y >= 18 || sarr[0].y <= 0){
        return true
    }
}

function gameEngine(){
    // if collide then game over
    if(isCollide(snakeArr)){
        gameOverSound.play() 
        inputDir = {x: 0, y:0}
        alert(`Game Over Score was ${score}`)
        snakeArr = [
            {x: 13, y:13}
        ]
        score = 0
        scoreEl.innerHTML = "Score: 0"
    }


    // Food
    if (snakeArr[0].y === food.y && snakeArr[0].x === food.x){
        snakeArr.unshift({x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y})
        foodSound.play()
        let a=2
        let b=16
        score++
        food.x = (Math.round(a+(b-a)*Math.random()))
        food.y = (Math.round(a+(b-a)*Math.random()))
        scoreEl.textContent = `Score: ${score}`
        if (score >= hiscoreval){
            hiscoreval = score
            localStorage.setItem("hiscore", JSON.stringify(hiscoreval))
            console.log(hiscoreval)
            hightScore.innerHTML = `High Score: ${hiscoreval}`
        }
    }

    // move the snake

    for (let i=snakeArr.length-2; i>=0; i--){
        snakeArr[i+1] = {...snakeArr[i]}
    }

    snakeArr[0].x += inputDir.x
    snakeArr[0].y += inputDir.y
    // Displaying the snake
    board.innerHTML = ""
    snakeArr.forEach((e, index)=>{
        snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = e.y
        snakeElement.style.gridColumnStart = e.x
        if (index === 0){
            snakeElement.classList.add("head")
        }
        else{
            snakeElement.classList.add("snake")
        }
        board.appendChild(snakeElement)
    })
    //Displaying the food
    foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add("food")
    board.appendChild(foodElement)
}


// main loop

let hiscore = localStorage.getItem("hiscore")
if (hiscore ===  null){
    hiscoreval = 0;
    localStorage.setItem("hiscore", JSON.stringify(hiscoreval))
} else{
    hiscoreval = JSON.parse(localStorage.getItem("hiscore"))
    hightScore.innerHTML = `High Score: ${hiscore}`
}


window.requestAnimationFrame(main)
// key detection
window.addEventListener("keydown", e=>{
    inputDir = {x: 0, y: 1}
    moveSound.play()
    if (e.key === "ArrowUp" || e.key === "w"){
        inputDir.x = 0
        inputDir.y = -1
    }
    else if(e.key === "ArrowDown" || e.key === "s"){
        inputDir.x = 0
        inputDir.y = 1
    }
    else if(e.key === "ArrowRight" || e.key === "d"){
        inputDir.x = 1
        inputDir.y = 0
    }
    else if(e.key === "ArrowLeft" || e.key === "a"){
        inputDir.x = -1
        inputDir.y = 0
    }
})