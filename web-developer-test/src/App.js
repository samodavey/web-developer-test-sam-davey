import React, {useState, useEffect} from 'react';
import PokemonList from './PokemonList'
import axios from 'axios'
//This uses the axios library which allows async requests to the Poke API

function App() {
  const [pokemon, setPokemon] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextPageUrl, setnextPageUrl] = useState()
  const [prevPageUrl, setprevPageUrl] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get(currentPageUrl).then(res => {
      setLoading(false)
      setnextPageUrl(res.data.next)
      setprevPageUrl(res.data.previous)
      setPokemon(res.data.results.map(p => p.name))
    });
  }, [currentPageUrl])

  return (
    <PokemonList pokemon={pokemon}/>
  );
}

export default App;
