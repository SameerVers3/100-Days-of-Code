const searchBox = document.getElementById("searchBox")
const searchBtn = document.getElementById("searchBtn")
const bdy = document.getElementById("bdy")

// const box = document.getElementById("box")
// box.style.display = "none"

const base = `https://www.themealdb.com/api/json/v1/1/filter.php?i=`
const base_re = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=`

const buttonGroup = document.getElementById("button-group");

searchBtn.addEventListener("click", function(){
    let query = searchBox.value;
    render(query);
})

const buttonPressed = e => {
  console.log(e.target.id);  // Get ID of Clicked Element
}

async function render(query){
const recipe_data = await fetch(`${base}${query}`).then(response => response.json());
    console.log(recipe_data)
    console.log(recipe_data.meals.length)

    if (recipe_data.meals != null){
        console.log("2345678")
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
            thumbnail.style.background = `url(${recipe_data.meals[i].strMealThumb})`
            text.textContent = `${recipe_data.meals[i].strMeal}`
            btn.id = `${recipe_data.meals[i].idMeal}`

            card.appendChild(thumbnail)
            card.appendChild(text)
            card.appendChild(btn)

            bdy.appendChild(card)
        }
    }
    else{
        bdy.innerHTML = ""
        bdy.style.background = `url{404.png}`
    }
}

render("")

const buttonGroupPressed = e => { 
  
    const isButton = e.target.nodeName === 'BUTTON';
    
    if(!isButton) {
      return
    }
    
    console.log(e.target.id);

    getRecipe(e.target.id)
    
  }
  buttonGroup.addEventListener("click", buttonGroupPressed);

  async function getRecipe(query){
    const r_data = await fetch(`${base_re}${query}`).then(response => response.json());
    console.log(r_data)
    console.log(r_data.meals.length)

    // let recipiBox = document.createElement("div")
    // recipiBox.classList.add("recipe")
    // recipiBox.id = "box"
    // recipiBox += `<div class="close-box" id="cl">
    //                 <button class="cross"><i class="fa-sharp fa-solid fa-xmark"></i></button>
    //             </div>`
    

    // recipiBox += `<h2>Ingredients</h2>` 
    // recipiBox += `<p>`

    // for (let i=1 ; r_data[0].meals.strIngredient+i != "" ; i++){
    //     recipiBox += "- " + r_data[0].meals.strIngredient+i + "   " +(r_data[0].meals.strMeasure+i) + "<br>"
    // }

    // recipiBox += "</p>"
    // recipiBox += `<p>${ r_data[0].meals.strInstructions}</p>`    

    // buttonGroup.appendChild(recipiBox)

    const titleElement = document.createElement("h1");
      titleElement.textContent = recipeTitle;
      recipeContainer.appendChild(titleElement);
      
      const ingredientsList = document.createElement("ul");
      ingredients.forEach(ingredient => {
        const listItem = document.createElement("li");
        listItem.textContent = ingredient;
        ingredientsList.appendChild(listItem);
      });
      .appendChild(ingredientsList);
    
}
