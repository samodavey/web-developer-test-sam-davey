import React, {useState, useEffect} from 'react';
import "./App.css"
import PokemonList from './PokemonList'
import Pagination from './Pagination'
import axios from 'axios'
//This uses the axios library which allows async requests to the Poke API

function App() {
  const [pokemonChosen, setPokemonChosen] = useState(false);
  const [pokemon, setPokemon] = useState({
    name: "", 
    species: "", 
    img: "",
    hp: "",
    attack: "",
    defense: "",
    type: ""
  })
  const [searchTerm, setSearchTerm] = useState("");
  const pokemonDetails = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`).then((response) => {
      console.log(response)
      setPokemon({
        name: searchTerm, 
        species: response.data.species.name, 
        img: response.data.sprites.other.dream_world.front_default,
        hp: response.data.stats[0].base_stat,
        attack: response.data.stats[1].base_stat,
        defense: response.data.stats[2].base_stat,
        type: response.data.types[0].type.name})
    });
    setPokemonChosen(true);
  } 

  return (
    <div className="App">
    <h1>Pokemon List</h1>
    <input type="text" placeholder="Search Pokemon..." onChange={(event) => {setSearchTerm(event.target.value.toLowerCase())}}></input>
    <button onClick={pokemonDetails}>Search Pokemon</button>
    <div className="displayArea">
      {!pokemonChosen ? (
      <h1>Please choose a Pokemon</h1>
      ) : (
      <>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.img}></img>
      <h3>Species: {pokemon.species}</h3>
      <h3>Type: {pokemon.type}</h3>
      <h4>HP: {pokemon.hp}</h4>
      <h4>Attack: {pokemon.attack}</h4>
      <h4>Defense: {pokemon.defense}</h4>
      </>
      )}
    </div>
    </div>
  );
}

export default App;
