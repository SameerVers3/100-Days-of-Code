const input = document.getElementById("input");
const searchBtn = document.getElementById("btn");
const body = document.getElementById("body");
const play = document.getElementById("ad");

const baseApi = `https://api.dictionaryapi.dev/api/v2/entries/en/`

let audio;

async function render(){
    let word = input.value;
    
    let load = document.createElement("div")
    laod.innerHTML =`<i class="fa-solid fa-bars-progress fa-bounce"></i>`
    load.classList.add("load")
    
    const data = await fetch(`${baseApi}${word}`).then(response => response.json());

    console.log(data);

    // displaying head
    let head = document.createElement("div");
    head.classList.add("head");
    let wrd = document.createElement("h2");
    let p = document.createElement("p")
    let ad = document.createElement("div");
    ad.classList.add("audio")
    ad.id = "ad"
    ad.innerHTML = `<button onclick="audio.play()"><i class="fa-solid fa-headphones"></i></button>`

    wrd.textContent = data[0].word;
    p.textContent = data[0].phonetics[1].text;

    if (data[0].phonetics[0].audio === ""){
        audio = new Audio(data[0].phonetics[1].audio);
    }
    else {
        audio = new Audio(data[0].phonetics[0].audio);
    }

    head.appendChild(wrd);
    head.appendChild(p);
    head.appendChild(ad);

    body.appendChild(head);
    // displaying body 

    for(let i=0; i<data[0].meanings.length; i++){
        let def = document.createElement("div");
        def.classList.add("def");

        let nTitle = document.createElement("h2")
        nTitle.textContent = data[0].meanings[i].partOfSpeech

        def.appendChild(nTitle)
        let title = document.createElement("p")
        title.textContent = "Defination: "
        title.classList.add("ex-title")
        def.appendChild(title)
        for (let j=0; j<data[0].meanings[i].definitions.length; j++){
            let defination = document.createElement("p");
            defination.classList.add("defination");
            defination.textContent = `- "${data[0].meanings[i].definitions[j].definition}"`
            console.log(defination)
            def.appendChild(defination);
        }


        if (!(data[0].meanings[i].synonyms.length === 0)){
            title.textContent = "Synonyms: "
            def.appendChild(title)

            let synonyms = document.createElement("p");
            for (let j=0; j<data[0].meanings[i].synonyms.length ; j++){
                synonyms.textContent += `"${data[0].meanings[i].synonyms[j]}" , `
            }

            def.appendChild(synonyms);
        }

        if (data[0].meanings[i].antonyms.length > 0){
            let at = document.createElement("p")
            at.classList.add("ex-title")

            at.textContent = "Antonyms: "
            def.appendChild(at)

            let antonyms = document.createElement("p");
            for (let j=0; j<data[0].meanings[i].antonyms.length ; j++){
                antonyms.textContent += `"${data[0].meanings[i].antonyms[j]}" , `
            }

            def.appendChild(antonyms);
        }
        
        body.appendChild(def);
    }

}

searchBtn.addEventListener("click", render);

searchBtn.addEventListener("keypress", function(e){
    if (e.key === "Enter"){
        e.preventDefault();
        render();
    }
})