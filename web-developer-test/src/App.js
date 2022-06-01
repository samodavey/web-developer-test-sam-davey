import React, {useState, useEffect} from 'react';
import PokemonList from './PokemonList'
import Pagination from './Pagination'
import axios from 'axios'
//This uses the axios library which allows async requests to the Poke API

function App() {
  const [pokemon, setPokemon] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextPageUrl, setnextPageUrl] = useState()
  const [prevPageUrl, setprevPageUrl] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    let cancel
    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setLoading(false)
      setnextPageUrl(res.data.next)
      setprevPageUrl(res.data.previous)
      setPokemon(res.data.results.map(p => p.name))
    })
    //Cancel a request everytime we make a new one, incase an old request finishes after a new one
    return () => { cancel()}
  }, [currentPageUrl])


  //Go to next page
  function gotoNextPage(){
    setCurrentPageUrl(nextPageUrl)
  }
  
  //Go to previous page
  function gotoPreviousPage(){
    setCurrentPageUrl(prevPageUrl)
  }

  //Generic loading message to display to the user
  if(loading) return "Loading..."

  return (
    <>
    <h1>Pokemon List</h1>
    <input type="text" placeholder="Search Pokemon..."></input>
    <PokemonList pokemon={pokemon}/>
    <Pagination 
    gotoNextPage = {nextPageUrl ? gotoNextPage : null}
    gotoPrevPage = {prevPageUrl ? gotoPreviousPage : null}
    />
    </>
  );
}

export default App;
