// This function is for grabbing a random recipe when user clicks on "Random Recipe button"
document.querySelector('button').addEventListener('click', getRandomRecipe)

function getRandomRecipe(){
  fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
  .then(res => res.json())
  .then(data => {
    console.log(data.meals[0].strMeal)
    document.querySelector('.recipeName').innerText = data.meals[0].strMeal
    document.querySelector('.recipeImg').src = data.meals[0].strMealThumb
    document.querySelector('.recipeIng').innerText = data.meals[0].strIngredient1
    document.querySelector('.recipeInstr').innerText = data.meals[0].strInstructions
    document.querySelector('#ingTitle').classList.toggle('hidden')
    document.querySelector('#instrTitle').classList.toggle('hidden')

    // add list of recipe ingredients

  })
  .catch(err => {
    console.log(`error${err}`)
  })
}




// This function is for grabbing the recipes user enters into the form. Create a form
document.querySelector('.test-button').addEventListener('click', getRecipe)

function getRecipe(){
  let recipe = document.querySelector('input').value
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${recipe}`)

  .then(res => res.json())
  .then(data => {
    console.log(data.meals[0])
    document.querySelector('.recipe-card h2').innerText = data.meals[0].strMeal
    document.querySelector('.test-recipeImg').src = data.meals[0].strMealThumb
  })
  .catch(err => {
    console.log(`error ${err}`)
  });
}

