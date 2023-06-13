const workBtn = document.getElementById("work")
const breakBtn = document.getElementById("break")
const reset = document.getElementById("reset")
const play = document.getElementById("play")
let isRunning = false
let interval
let secEl = document.getElementById("seconds")
let minEl = document.getElementById("minutes")

let minutes = 25
let seconds = 0

reset.style.display = "none"

function updateTimer(){
    seconds--
    if (seconds < 0){
        if (minutes === 0){
            stopTimer()
            return
        }
        seconds = 59
        minutes--

    }
    update()
}

function update(){
    secEl.textContent = seconds<=9?"0"+seconds:seconds
    minEl.textContent = minutes<=9?"0"+minutes:minutes
}

function stopTimer(){
    clearInterval(interval)
    isRunning = false
}

play.addEventListener("click", function(e){
    if(!isRunning){
        interval = setInterval(updateTimer, 1000)
        isRunning = true
        e.target.className = "pause";
        reset.style.display = 'block';
    } 
    else{
        stopTimer()
        e.target.className = "play";
    }
})

reset.addEventListener("click", function(){
    stopTimer()
    minutes = 25
    seconds = 0
    update()
    reset.style.display = "none"
})

workBtn.addEventListener("click", function(){
    stopTimer()
    minutes = 25
    seconds = 0
    update()
})

breakBtn.addEventListener("click", function(){
    console.log("working")
    stopTimer()
    minutes = 5
    seconds = 0
    update()
})