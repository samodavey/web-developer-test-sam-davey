import React, {useState, useEffect} from 'react';
import "./App.css"

export default function PokemonList({pokemon}) {
  const [searchTerm, setSearchTerm] = useState("")
  return (
    <>
    <input type="text" placeholder="Search Pokemon..." onChange={(event) => {setSearchTerm(event.target.value)}}></input>
    <div>
      {pokemon.filter(p => p.includes(searchTerm)).map(p => (
          <div className="pokemonList" key={p}>{p} <button>Favourite</button></div>
      ))}
    </div>
    </>
  )
}
