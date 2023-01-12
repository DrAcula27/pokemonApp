# Morning Exercise - Full Stack Application

## Per Scholas - Week 7 - Assignment: First Full-Stack Web App

### Minimum Viable Product (MVP)

1. Create an express server that serves your index.html from the ‘public’ folder.
    1. HTML file should include an H1 title and a button “get pokemon”.
1. When you click the button, your index.js (sent with index.html) should send a fetch request to route “/get_pokemon_data” which should send the following data:

    ```
    const pokemon = [

        {name: "bulbasaur", img: "http://img.pokemondb.net/artwork/bulbasaur", age: 3},

        {name: "ivysaur", img: "http://img.pokemondb.net/artwork/ivysaur", age: 4},

        {name: "venusaur", img: "http://img.pokemondb.net/artwork/venusaur", age: 5},

        {name: "charmander", img: "http://img.pokemondb.net/artwork/charmander", age: 2},

        {name: "charizard", img: "http://img.pokemondb.net/artwork/charizard", age: 7},

        {name: "squirtle", img: "http://img.pokemondb.net/artwork/squirtle", age: 8},

        {name: "wartortle", img: "http://img.pokemondb.net/artwork/wartortle", age: 6}

    ];
    ```

When you get the data, display JUST the names in in a list.

### BONUS FEATURES

- When a name is clicked, also display the image and age of the clicked pokemon.
    + _Hint_: You will need to programmatically add `.jpg` to the end of the `img` strings.
- Add ability to toggle showing/hiding pokemon.
- Style the page.

### Attributions

- Background image is from: [Wikimedia Commons](https://commons.wikimedia.org/wiki/Category:Pok%C3%A9_Balls#/media/File:Pokebola-pokeball-png-0.png).