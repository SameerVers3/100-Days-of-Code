const curr1 =document.getElementById("curr1");
const curr2 = document.getElementById("curr2");
const rate = document.getElementById("rate");
const btn = document.getElementById("btn");
const input = document.getElementById("in");
const result = document.getElementById("total");
const swapBtn = document.getElementById("swap-btn");

const cur_api = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json"
const base = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/`

renderOptions();

curr1.addEventListener("click", updateRate)
curr2.addEventListener("click", updateRate)
btn.addEventListener("click", calculate)
swapBtn.addEventListener("click", swap)


async function renderOptions(){
    const currency = await fetch(`${cur_api}`).then(response => response.json());    
    let currencyArr = Object.entries(currency);
    currencyArr.forEach(el => {
        let option = `<option value="${el[0]}">${el[1]}</option>`
        curr1.innerHTML += option;
        curr2.innerHTML += option;
    });
    updateRate();
}

async function updateRate(){
    let currency1 = curr1.options[curr1.selectedIndex].value;
    let currency2 = curr2.options[curr2.selectedIndex].value;
    let exchange = await fetch(`${base}/${currency1}/${currency2}.json`).then(response => response.json());

    rate.textContent = `1 ${currency1} = ${Math.round((exchange[currency2])*100)/100} ${currency2}`;
    calculate();
}

async function calculate(){

    let inputValue = input.value;
    let currency1 = curr1.options[curr1.selectedIndex].value;
    let currency2 = curr2.options[curr2.selectedIndex].value;
    let exchange = await fetch(`${base}/${currency1}/${currency2}.json`).then(response => response.json());
    let net = Math.round((inputValue * exchange[currency2])*100)/100
    result.textContent = `${inputValue} ${currency1} = ${net} ${currency2}`;
}

function swap(){
    let temp = curr1.selectedIndex;
    curr1.selectedIndex = curr2.selectedIndex;
    curr2.selectedIndex = temp;
    updateRate();
    calculate();
}

input.addEventListener("keypress", function(e){
    if (e.key === "Enter"){
        e.preventDefault();
        calculate();
    }
})
