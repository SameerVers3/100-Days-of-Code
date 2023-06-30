const logBtn = document.getElementById("logBtn");
const header = document.getElementById("heading");

const bdy = document.getElementById("bdy");

// paste your firebase config here

firebase.initializeApp(firebaseConfig);
let db = firebase.database();
 


const renderLoginPage = () => {
    header.style.height = "200px";
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

const renderChatPage = () => {
    header.style.height = "80px"

    bdy.innerHTML = "";
    let chatBox = document.createElement("div");
    chatBox.classList.add("chat-box");

    let sendBox = document.createElement("div");
    sendBox.classList.add("send")
    let input = document.createElement("input");
    input.placeholder = `${localStorage.getItem("name")} type something`;
    input.classList.add("send-txt");
    input.id = "txt-box"

    let sendIcon = document.createElement("div");
    sendIcon.classList.add("send-icon");
    sendIcon.innerHTML = `<i class="fa-solid fa-paper-plane"></i>`;
    sendIcon.id = "sendBtn"

    sendBox.appendChild(input);
    sendBox.appendChild(sendIcon);

    let logout = document.createElement("div");
    logout.classList.add("logout");
    logout.id = "logout";
    logout.textContent = `${localStorage.getItem("name")} ~ logout`

    bdy.appendChild(chatBox);
    bdy.appendChild(sendBox);
    bdy.appendChild(logout);
}

const renderMessage = () => {

}

const sendMessage = (message) => {
    if (localStorage.getItem("name") === null || message === null) {
      console.log("null");
      return;
    }
  
    console.log("sending");
    db.ref('chats/').once('value', function(message_object) {
      var index = parseFloat(message_object.numChildren()) + 1;
      var messageRef = db.ref('chats/' + `message_${index}`);
      messageRef.set({
        name: localStorage.getItem("name"),
        message: message,
        index: index
      })
      .then(renderMessage);
    });
  };
  

const checkSession = () => {
    // localStorage.clear();
    if (localStorage.getItem("name") === null){
        renderLoginPage();
    }
    else{
        console.log("loged in")
        renderChatPage();
    }
}

const setUser = (value) => {
    if (value.length >= 3){
        let userName = value;
        localStorage.setItem("name", userName);
        renderChatPage();
    }
    else{
        alert("Name should be at least 3 characters")
    }

}

const logout = () => {
    localStorage.clear();
    renderLoginPage();
}

checkSession();

document.addEventListener("click", function(e){
    if (e.target.id === "logBtn"){
        const logInput = document.getElementById("log-input");
        setUser(logInput.value);
    }
})

document.addEventListener("click", function(e){
    if (e.target.id === "logout"){
        logout();
    }
})

document.addEventListener("click", function(e){
    if (e.target.id === "sendBtn"){
        let input = document.getElementById("txt-box");
        let message = input.value;
        
        console.log(message);
        sendMessage(message);
    }
})