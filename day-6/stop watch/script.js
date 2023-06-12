let milisecEl = document.getElementById("mili-sec")
let minuteEl = document.getElementById("minutes")
let secEl = document.getElementById("seconds")
let isRunning = false
let miliseconds = 0
let minutes = 0
let seconds = 0
let interval;

const startBtn = document.getElementById("start")
const stopBtn = document.getElementById("stop")
const flagBtn = document.getElementById("Lap")
const reset = document.getElementById("reset")
const lapContainer = document.getElementById("lap-container")

function updateTime(){
    miliseconds++

    if ( miliseconds === 100){
        miliseconds = 0
        seconds++
    } else if ( seconds === 60){
        seconds = 0
        minutes++
    }

    minuteEl.innerText = minutes<10?( "0" + minutes + " : "):(minutes + " : ")
    secEl.innerText = seconds<10?("0" + seconds + " : "):( seconds + " : ")
    milisecEl.innerText = miliseconds 
}

function start(){
    if (!isRunning){
        interval = setInterval(updateTime, 10)
        isRunning=true
    }
}

function stop(){
    clearInterval(interval)
    isRunning = false
}

startBtn.addEventListener("click", function(){
    start()
})

stopBtn.addEventListener("click", function(){
    stop()
})

flagBtn.addEventListener("click", function(){
    let li = document.createElement("li")
    li.innerHTML = `${minuteEl.innerHTML}  ${secEl.innerHTML}  ${milisecEl.innerHTML}`
    lapContainer.appendChild(li);

})

reset.addEventListener("click", function(){
    stop()
    isRunning = false
    miliseconds = 0
    minutes = 0
    seconds = 0

    minuteEl.innerText = "00 : "
    secEl.innerText = "00 : "
    milisecEl.innerText = "00"
    lapContainer.innerHTML = ""
})





