const joke = document.getElementById("joke");
const btn = document.getElementById("btn");


const baseAPI = `https://geek-jokes.sameerkumar.website/api?format=json`

const render = async () => {
    let data = await fetch(baseAPI).then(response => response.json());
    if (data !== null){
        joke.textContent = data.joke;
    }
}

render();

btn.addEventListener("click", render);