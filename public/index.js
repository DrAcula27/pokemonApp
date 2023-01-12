const showPokemonBtn = document.getElementById("show-pokemon-btn");
const route = "http://localhost:5000/get_pokemon_data";

showPokemonBtn.addEventListener("click", async () => {
  let res = await fetch(route);
  let pokemon = await res.json();
  let pokemonNames = pokemon.map((el) => el.name);

  let body = document.querySelector("body");
  for (let i = 0; i < pokemonNames.length; i++) {
    const para = document.createElement("p");
    para.id = "my-paragraph";
    para.textContent = `${pokemonNames[i]}`;
    body.appendChild(para);
  }
});
