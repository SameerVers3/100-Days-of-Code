let hours = document.getElementById("hours")
let minutes = document.getElementById("minute")
let seconds = document.getElementById("seconds")

currentTime()

function currentTime(){
    let d = new Date()

    let hour = d.getHours()
    let min = d.getMinutes()
    let sec = d.getSeconds()

    hours.textContent = hour + " : "
    minutes.textContent = min + " : "
    seconds.textContent = sec

    var t = setTimeout(function(){ currentTime() }, 1000); 
}


