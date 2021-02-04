import React, {useState, useEffect} from 'react';
import api from '../../services/api';
import './styles.css'

const Home =()=>{
    const [pokemonInfo, setPokemonInfo] = useState([]);
    const [pokemonSpritesInfo, setPokemonSprites] = useState([]);

    useEffect(() => {
        api.get("pokemon/articuno").then(response => {
        console.log(response.data);
        setPokemonInfo(response.data);
        setPokemonSprites(response.data.sprites)
        })
    }, []);

  return (
    <>
    <div className="container">
        <div className="content">
            <strong> Nome: {pokemonInfo.name}</strong>
            <span> Altura: {pokemonInfo.height}</span>
            <div>
                <img src={pokemonSpritesInfo.front_default} alt="sprites"/>
                <img src={pokemonSpritesInfo.back_default} alt="sprites"/>
                <img src={pokemonSpritesInfo.front_shiny} alt="sprites"/>
                <img src={pokemonSpritesInfo.back_shiny} alt="sprites"/>
            </div>
                
        </div>
    </div>
    </>

  );
}

export default Home;