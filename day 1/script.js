let count = 0

function increment(){
    count++;
    document.getElementById("count").innerText = count;
}

function decrement(){
        count--;
        if (count>=0){
            document.getElementById("count").innerText = count;
        } 
        else{
            alert("Negative numbers are not allowed... 🙃")
        }
}

function setZero(){
    console.log("working");
    count = 0;
    document.getElementById("count").innerText = count;
}

function save(){
    console.log(count);
}
