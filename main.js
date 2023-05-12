// Current Issues
// 1. light box showing where the img is showing, where is this comming from? this is due to having img tag w/ so image (at first load), need to change to a div
// 2. any items appended, don't get deleted when button is clicked. How to clear this?

// CURRENTLY WORKING ON
// 1. adding a recipe to the DOM in the random recipe page

// FINISHED
// 1. Adding multiple ingredients to meals

// This function is for grabbing a random recipe when user clicks on "Random Recipe button"
document.querySelector('#randomRecipeButton').addEventListener('click', getRandomRecipe)
document.querySelector('addRecipe').addEventListener('click', addRecipe)

function getRandomRecipe(){
  fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
  .then(res => res.json())
  .then(data => {
    console.log(data.meals[0].strMeal)
    document.querySelector('.recipeName').innerText = data.meals[0].strMeal
    document.querySelector('.recipeImg').src = data.meals[0].strMealThumb
    document.querySelector('.recipeInstr').innerText = data.meals[0].strInstructions
    document.querySelector('#instrTitle').innerText = "Instructions"
    document.querySelector('#ingTitle').innerText = "Ingredients"

    // add a button - Add recipe to DOM
    let parentElement = document.querySelector('.recipeName');
    let addRecipe = document.createElement('button');
    addRecipe.textContent = "Add to Favorites";
    addRecipe.type = "button";
    addRecipe.id = "favoriteButton"

    // insertAfter(addRecipe, parentElement);
    parentElement.appendChild(addRecipe);

    // clear previous searches
    let mealIngredients = document.getElementById("recipeIng");
    mealIngredients.innerHTML = ""; 

    // checklist of ingredients
    for (let i = 1; i <= 20; i++) {
      // checks if length is greater than 0
      if(data.meals[0][`strIngredient${i}`].length){

        let checkbox = document.createElement('input')
        checkbox.type = "checkbox";
        checkbox.name = "name";
        checkbox.value = "value";
        checkbox.id = "id";

        var label = document.createElement('label')
        label.htmlFor = "id";

        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(data.meals[0][`strMeasure${i}`] + " " + data.meals[0][`strIngredient${i}`]));
        mealIngredients.appendChild(label);
      }
    }

  })
  .catch(err => {
    console.log(`error${err}`)
  })
}


// This function is for grabbing the recipes user enters into the form. Create a form
// document.querySelector('.test-button').addEventListener('click', getRecipe)

// function getRecipe(){
//   let recipe = document.querySelector('input').value
//   fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${recipe}`)

//   .then(res => res.json())
//   .then(data => {
//     console.log(data.meals[0])
//     document.querySelector('.recipe-card h2').innerText = data.meals[0].strMeal
//     document.querySelector('.test-recipeImg').src = data.meals[0].strMealThumb
//   })
//   .catch(err => {
//     console.log(`error ${err}`)
//   });
// }

