import React, {useState, useEffect} from "react";
import api from "./api";
import styles from "./styles.css";

function App() {
  const [pokemon, setPokemon] = useState([]);

  // Getting pokemons from the api
  useEffect(() => {
    api.get('pokemon?limit=10').then(response => {
      const results = response.data.results;
      setPokemon(results);
      console.log(results);
    }); 
  }, []);

  return (
    <div className="App">
      <h1>Insira seu pokemon</h1>
      <div className="homepage">
      <form>
        <input />
        <button>Procurar</button>
      </form>
     
      </div>
    </div>
  );
}

export default App;
