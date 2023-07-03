let api = `62961a8919ea409e84029eefff95f6a9`
let baseURL = `https://newsapi.org/v2/everything?q=`

window.addEventListener("load", () => {
    fetchNews("pakistan");
});

async function fetchNews(query) {
    const res = await fetch(`${baseURL}${query}&apiKey=${api}`)
    const data = await res.json();
    bindData(data.articles);
}

function bindData(articles) {
    const cardsContainer =  document.getElementById("cards-contanier");
    const newsCardTemplate = document.getElementById("template-news-card");

    cardsContainer.innerHTML = "";

    articles.forEach((articles) => {
    if (!articles.urlToImage) return
        const cardClone = newsCardTemplate.content.cloneNode(true);
        fillDataInCard(cardClone, articles);
        cardsContainer.appendChild(cardClone);
    });
}

// function fillDataInCard(cardClone, article){
//     const newImg = cardClone.querySelle
// }