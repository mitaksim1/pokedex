import React, {useState} from "react";
import api from "./api";

function App() {
  const [pokemonInfo, setPokemonInfo] = useState([]);


  const getPokemon = async () =>{
    const list = [];
    const response = api.get("pokemon/pikachu");
    list.push(response.data);
    setPokemonInfo(list);
  }

  getPokemon();
  
  return (
    <div>
      {/* <h1>Insira seu pokemon</h1>
      <form>
        <input />
        <button>Procurar</button>
      </form> */}
      <p>{pokemonInfo}</p>
    </div>
  );
}

export default App;
