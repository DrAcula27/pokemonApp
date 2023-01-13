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
  } else {
    togglePokeListBtn.innerText = `Show Pokemon List`;

    deleteElements.classList.add("hidden");

    for (let i = 0; i < pokemonNames.length; i++) {
      let removePokemon = document.getElementById(`pokemon${i}`);
      list.removeChild(removePokemon);
    }
  }
});

const deleteBtn = document.getElementById("delete-btn");

deleteBtn.addEventListener("click", async () => {
  let res = await fetch(route);
  let pokemon = await res.json();
  let list = document.querySelector(".list");
  let userInput = document.getElementById("delete-input").value;

  if (userInput.toLowerCase() === "bulbasaur") {
    pokemon.forEach((el, i) => {
      if (el.name === "bulbasaur") {
        pokemon.splice(i, 1);
      }
    });
    let removePokemon = document.getElementById(`pokemon0`);
    list.removeChild(removePokemon);
  } else if (userInput.toLowerCase() === "ivysaur") {
    pokemon.forEach((el, i) => {
      if (el.name === "ivysaur") {
        pokemon.splice(i, 1);
      }
    });
    let removePokemon = document.getElementById(`pokemon1`);
    list.removeChild(removePokemon);
  } else if (userInput.toLowerCase() === "venusaur") {
    pokemon.forEach((el, i) => {
      if (el.name === "venusaur") {
        pokemon.splice(i, 1);
      }
    });
    let removePokemon = document.getElementById(`pokemon2`);
    list.removeChild(removePokemon);
  } else if (userInput.toLowerCase() === "charmander") {
    pokemon.forEach((el, i) => {
      if (el.name === "charmander") {
        pokemon.splice(i, 1);
      }
    });
    let removePokemon = document.getElementById(`pokemon3`);
    list.removeChild(removePokemon);
  } else if (userInput.toLowerCase() === "charizard") {
    pokemon.forEach((el, i) => {
      if (el.name === "charizard") {
        pokemon.splice(i, 1);
      }
    });
    let removePokemon = document.getElementById(`pokemon4`);
    list.removeChild(removePokemon);
  } else if (userInput.toLowerCase() === "squirtle") {
    pokemon.forEach((el, i) => {
      if (el.name === "squirtle") {
        pokemon.splice(i, 1);
      }
    });
    let removePokemon = document.getElementById(`pokemon5`);
    list.removeChild(removePokemon);
  } else if (userInput.toLowerCase() === "wartortle") {
    pokemon.forEach((el, i) => {
      if (el.name === "wartortle") {
        pokemon.splice(i, 1);
      }
    });
    let removePokemon = document.getElementById(`pokemon6`);
    list.removeChild(removePokemon);
  } else {
    console.log(`Please type the name of a pokemon in the list to delete`);
  }
});
