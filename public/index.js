const togglePokeListBtn = document.getElementById("toggle-poke-list-btn");
const route = "http://localhost:5000/get_pokemon_data";

togglePokeListBtn.addEventListener("click", async () => {
  let res = await fetch(route);
  let pokemon = await res.json();
  let pokemonNames = pokemon.map((el) => `${el.name}: Choose!`);
  let body = document.querySelector("body");
  if (togglePokeListBtn.innerText.toLowerCase().includes("show")) {
    togglePokeListBtn.innerText = `Hide Pokemon List`;
    for (let i = 0; i < pokemonNames.length; i++) {
      const para = document.createElement("p");
      para.id = `pokemon${i}`;
      para.className = "showImgAge";
      para.textContent = `${pokemonNames[i]}`;
      body.appendChild(para);
    }
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
    for (let i = 0; i < pokemonNames.length; i++) {
      let remove = document.getElementById(`pokemon${i}`);
      body.removeChild(remove);
    }
  }
});
