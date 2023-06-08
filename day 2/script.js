let screenText = document.getElementById("screen-text")

let result = ""
let previousString = ""

function p1(){
    result += 1 + " "
    screenText.textContent = result;
}

function p2(){
    result += 2 + " "
    screenText.textContent = result;
}

function p3(){
    result += 3 + " "
    screenText.textContent = result;
}

function p4(){
    result += 4 + " "
    screenText.textContent = result;
}

function p5(){
    result += 5 + " "
    screenText.textContent = result;
}

function p6(){
    result += 6 + " "
    screenText.textContent = result;
}

function p7(){
    previousString = result;
    result += 7+ " "
    screenText.textContent = result;
}

function p8(){
    previousString = result;
    result += 8 + " "
    screenText.textContent = result;
}

function p9(){
    result += 9 + " "
    screenText.textContent = result;
}

function p0(){
    result += 0 + " "
    screenText.textContent = result;
}

function p00(){
    result += "0 0"+ " "
    screenText.textContent = result;
}

function pDot(){
    result += "." + " "
    screenText.textContent = result;
}

function pPlus(){
    result += "+" + " "
    screenText.textContent = result;
}

function pMinus(){
    result += "-" + " "
    screenText.textContent = result;
}

function pMultiply(){

    result += "*" + " "
    screenText.textContent = result;
}

function pDivide(){
    result += "/" + " "
    screenText.textContent = result;
}

function pPerc(){
    result += "%" + " "
    screenText.textContent = result;
}

function pAC(){
    result = ""
    screenText.textContent = "0";
}

function pDEL(){
    result = result.slice(0, -2);
    if (result == ""){
        result = "0 ";
    }
    screenText.textContent = result;
}

function pEqual(){
    result = result.replace(/ /g, '')
    try{
        result = eval(result);
        if (result === Infinity || result === -Infinity) {
            alert("Result is infinity!.....");
            result = "0"
        }
        result += " "
        screenText.textContent = result;

    } catch(error){
        alert("Incorrect input..... 🙃")
        result = "0"
        screenText.textContent = result;
    }
}
