const searchBox = document.getElementById("searchBox")
const searchBtn = document.getElementById("searchBtn")
const bdy = document.getElementById("bdy")
const box = document.getElementById("box")
box.style.display = "none"

const base = `https://www.themealdb.com/api/json/v1/1/filter.php?i=`
const base_re = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=`

const buttonGroup = document.getElementById("button-group");

const cross = document.getElementById("close")

const rec = document.getElementById("rec")

searchBtn.addEventListener("click", function(){
    let query = searchBox.value;
    render(query);
})

searchBox.addEventListener("keypress", function(e){
    if (e.key === "Enter"){
        e.preventDefault()
        render(searchBox.value)
    }
})

async function render(query){
const recipe_data = await fetch(`${base}${query}`).then(response => response.json());
    if (recipe_data.meals === null){
        bdy.innerHTML =`<div class="not-found">
                            <img src="404.png" alt="">
                            <h3>Recipe Not Found</h3>
                        </div>`
        return
    }
    else{
        bdy.innerHTML = ""
        for (let i=0; i<recipe_data.meals.length; i++){
            let card = document.createElement("div")
            card.classList.add("recipi-card")
            let thumbnail = document.createElement("div")
            thumbnail.classList.add("recipi-thumbnail")
            let text = document.createElement("p")
            text.classList.add("name")
            let btn = document.createElement("button")
            btn.innerHTML = `View Recipe`
            btn.classList.add("view-Recipi-btn")

            thumbnail.style.backgroundImage = `url(${recipe_data.meals[i].strMealThumb}) `
            text.textContent = `${recipe_data.meals[i].strMeal}`
            btn.id = `${recipe_data.meals[i].idMeal}`

            card.appendChild(thumbnail)
            card.appendChild(text)
            card.appendChild(btn)
            bdy.appendChild(card)
        }
    }
}

render("")

const buttonGroupPressed = e => { 
    const isButton = e.target.nodeName === 'BUTTON';
    if(!isButton) {
      return
    }
    getRecipe(e.target.id) 
  }
  buttonGroup.addEventListener("click", buttonGroupPressed);

  async function getRecipe(query){
    const r_data = await fetch(`${base_re}${query}`).then(response => response.json());

    box.style.display = "block"
    let recipiBox = ``

    recipiBox += `<button class="view-Recipi-btn"><a href="${r_data.meals[0].strYoutube}">Watch Video</a></button>`
    recipiBox += `<h2>Ingredients</h2>` 
    recipiBox += `<p>`

    for (let i=1 ; eval(`r_data.meals[0].strIngredient${i}`) != "" ; i++){
        recipiBox += "- " + eval(`r_data.meals[0].strIngredient${i}`) + "   " +eval(`r_data.meals[0].strMeasure${i}`) + "<br>"
        console.log(eval(`r_data.meals[0].strMeasure${i}`))
    }

    recipiBox += "</p>"
    recipiBox += `<h2>Instructions</h2>` 
    recipiBox += `<p>${ r_data.meals[0].strInstructions}</p>`
    
    rec.innerHTML = recipiBox
}

cross.addEventListener("click", function(){
    box.style.display = "none"
})