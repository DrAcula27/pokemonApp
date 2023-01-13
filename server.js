const express = require("express");
const app = express();

const PORT = 5000;

app.use(express.static("public"));

// simulate data gotten from database
let pokemon = [
    {name: "bulbasaur", img: "http://img.pokemondb.net/artwork/bulbasaur", age: 3},
    {name: "ivysaur", img: "http://img.pokemondb.net/artwork/ivysaur", age: 4},
    {name: "venusaur", img: "http://img.pokemondb.net/artwork/venusaur", age: 5},
    {name: "charmander", img: "http://img.pokemondb.net/artwork/charmander", age: 2},
    {name: "charizard", img: "http://img.pokemondb.net/artwork/charizard", age: 7},
    {name: "squirtle", img: "http://img.pokemondb.net/artwork/squirtle", age: 8},
    {name: "wartortle", img: "http://img.pokemondb.net/artwork/wartortle", age: 6}
];

app.delete('/delete/:pokemonToDelete', (req, res) => {
  // let pokemonToDelete = req.params.pokemonToDelete;
  // pokemon.forEach((el, i)=>{
  //     if (el.name === pokemonToDelete) {
  //         pokemon.splice(i, 1);
  //     }
  // })
  res.send(`Deleted`);
});

app.get("/get_pokemon_data", (req, res) => {
    res.send(pokemon);
});

app.listen(PORT, () => {
  console.log(`Server is Listening on ${PORT}`);
});
