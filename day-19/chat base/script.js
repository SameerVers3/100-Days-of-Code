const logBtn = document.getElementById("logBtn");
const logInput = document.getElementById("log-input");
const header = document.getElementById("heading");

const bdy = document.getElementById("bdy");

const renderLoginPage = () => {
    console.log(header);
    bdy.innerHTML = "";

    let login = document.createElement("div");
    login.classList.add("login");
    let p = document.createElement("p");
    p.textContent = "Enter the chat room with cool name: ";
    
    let logInput = document.createElement("div");
    logInput.classList.add("login-input");

    let txt = document.createElement("input");
    txt.type = "text";
    txt.placeholder =  "name";
    txt.classList.add("log-input");
    txt.maxLength = "15";
    txt.id = "log-input";
    
    let log_btn = document.createElement("button");
    log_btn.innerText = "Enter";
    log_btn.classList.add("logBtn");
    log_btn.id = "logBtn";

    logInput.appendChild(txt);
    logInput.appendChild(log_btn);

    login.appendChild(p);
    login.appendChild(logInput);

    bdy.appendChild(login);

}

const checkSession = () => {
    if (localStorage.getItem("name") === null){
        renderLoginPage();
    }
    else{
        console.log("loged in")
        renderLoginPage();
    }
}

const setUser = (value) => {
    console.log("clicked")
    let userName = value;
    localStorage.setItem("name", userName);
    // console.log(header);
    // header.style.height = "100px";
    // console.log(header.style.height);
}

checkSession();
// logBtn.addEventListener("click", setUser)

setTimeout(() => {
    const logBtn = document.getElementById("logBtn");
    const logInput = document.getElementById("log-input");

    logBtn.addEventListener("click", setUser(logInput.value))
}, 1000);