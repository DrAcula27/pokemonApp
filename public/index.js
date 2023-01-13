const togglePokeListBtn = document.getElementById("toggle-poke-list-btn");
const deleteElements = document.getElementById("delete-container");

const route = "http://localhost:5000/get_pokemon_data";

togglePokeListBtn.addEventListener("click", async () => {

  let res = await fetch(route);
  let pokemon = await res.json();

  let pokemonNames = pokemon.map((el) => `${el.name}: Choose!`);
  let list = document.querySelector(".list");

  if (togglePokeListBtn.innerText.toLowerCase().includes("show")) {

    togglePokeListBtn.innerText = `Hide Pokemon List`;

    for (let i = 0; i < pokemonNames.length; i++) {

      const listItem = document.createElement("li");
      listItem.id = `pokemon${i}`;
      listItem.className = "showImgAge";
      listItem.textContent = `${pokemonNames[i]}`;
      list.appendChild(listItem);

    }
    
    deleteElements.classList.remove("hidden");

    const pokemonElements = document.getElementsByClassName("showImgAge");
    const pokemonElementsArray = [...pokemonElements];

    pokemonElementsArray.forEach((element, i) => {

      element.addEventListener("click", () => {

        if (element.innerHTML.toLowerCase().includes("choose")) {
          element.innerHTML = `
            ${pokemon[i].name}
            <br />
            Age: ${pokemon[i].age}
            <br />
            <img src="${pokemon[i].img}.jpg" />`;

        } else {
          element.innerHTML = `${pokemon[i].name}: Choose!`;
        }
      });
    });

    deleteBtn = document.getElementById("delete-btn");
    deleteBtn.addEventListener("click", () => {
      const userInput = document.getElementById("delete-input");
      
    });

  } else {

    togglePokeListBtn.innerText = `Show Pokemon List`;

    deleteElements.classList.add("hidden");

    for (let i = 0; i < pokemonNames.length; i++) {
      let removePokemon = document.getElementById(`pokemon${i}`);
      list.removeChild(removePokemon);
    }
  }
});
