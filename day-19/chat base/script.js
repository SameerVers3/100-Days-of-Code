const logBtn = document.getElementById("logBtn");
const logInput = document.getElementById("log-input");

const checkSession = () => {
    if (localStorage.getItem("name") === null){
        console.log("not loged in")
    }
    else{
        console.log("loged in")
    }
}

const setUser = () => {
    let userName = logInput.value;
    localStorage.setItem("name", userName);
}

checkSession();
logBtn.addEventListener("click", setUser)