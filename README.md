# Morning Exercise - First _almost_ Full-Stack Application

## Per Scholas - Week 7 - Front-end & Express - Assignment: pokemonApp

### Minimum Viable Product (MVP)

1. Create an express server that serves your `index.html` from the `public` folder.
    1. HTML file should include an `<h1>` title and a button labeled “get pokemon”.
1. When you click the button, your `index.js` (sent with `index.html`) should send a fetch request to route `/get_pokemon_data` which should send the following data:

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

When you get the data, display just the names in a list.

### BONUS FEATURES

- When a name is clicked, also display the image and age of the clicked pokemon.
    + _Hint_: You will need to programmatically add `.jpg` to the end of the `img` strings.
- Add ability to toggle showing/hiding pokemon.
- Style the page.

### Extension:

- Add an input and a button. When the button is clicked, the name of the pokemon typed into the input should be sent to a DELETE route `/delete_pokemon`. The route should remove that pokemon from the array, and send back the new array.
    + The new array should be displayed on the page.
