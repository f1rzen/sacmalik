document.addEventListener("DOMContentLoaded", () => {
    const recipeList = document.getElementById("recipeList");
    const hamburgerMenu = document.querySelector(".hamburger-menu");
  const navList = document.querySelector(".nav-list");

    // Fetch the JSON file containing the recipes
    fetch("./recipes/all.json")
      .then(response => response.json())
      .then(recipes => {
        recipes.forEach(recipe => {
          // Create a recipe card div
          const recipeCard = document.createElement("div");
          recipeCard.classList.add("recipe-card", "box");
  
          // Create the image element
          const image = document.createElement("img");
          image.src = recipe.image;
          image.alt = recipe.title;
          recipeCard.appendChild(image);
  
          // Create the recipe title
          const title = document.createElement("h2");
          title.textContent = recipe.title;
          recipeCard.appendChild(title);
  
          const desc = document.createElement("p");
          desc.textContent = recipe.desc;
          recipeCard.appendChild(desc);

          const button = document.createElement("button")
          function visitPage(){
            window.location=recipe.link
          }
          button.textContent = "View Recipe".toUpperCase()
          button.onclick = visitPage
          recipeCard.appendChild(button)
          
  
          // Append the recipe card to the recipeList container
          recipeList.appendChild(recipeCard);
        });
      })

      
      .catch(error => {
        console.error("Error fetching recipes:", error);
      });
  });
  