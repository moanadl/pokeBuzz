import { useState } from "react";
import { findPokemon } from "../../utils/findPokemon";
import PokeCard from "../PokeCard";
import Pokedex from "../Pokedex";
import "./PokemonResults.css";

// ---------- Finds the final 6 pokemons and render them ---------- //
function PokemonResults (props) {

    const [chosenPokemon] = useState(() =>findPokemon(props)); // Lazy initialization
    const [index, setIndex] = useState(0);
    const [isPokedex, setIsPokedex] = useState(true);

    const changePokemon = (e) => {
        const command = e.target.innerText;
        
        if (command === 'Next') {
            setIndex((prevIndex) => (prevIndex + 1) % chosenPokemon.length); // Loop circular
        }

        if (command === 'Prev') {
            setIndex((prevIndex) => (prevIndex - 1) % chosenPokemon.length); // Loop circular
        }
    }

    const currentPokemon = chosenPokemon[index];

    const changeView = () => {
        isPokedex ? setIsPokedex(false) : setIsPokedex(true);
        console.log(isPokedex);
    }

	return (
		<section>
            {isPokedex ? 
            <div className="card-container">
                    <Pokedex 
                        changePokemon={changePokemon}
                        pokemonHabitat={currentPokemon.habitat}
                        leftScreenContent={<img className='pokemon-pokedex' src={currentPokemon.image} />}
                        rightScreenContent={
                            <div className="screen-attributes">
                                <div className="screen-attributes-1">
                                    <p>Name: <span className='pokemon-attribute'>{currentPokemon.name}</span></p>
                                    <p>1st type: <span className='pokemon-attribute'>{currentPokemon.type1}</span></p>
                                    {currentPokemon.type2 ? <p>2nd type: <span className='pokemon-attribute'>{currentPokemon.type2}</span></p> : <p>2nd type: <span className='pokemon-attribute'>-</span></p>}
                                </div>
                                <div className="screen-attributes-2">
                                    <p>Habitat: <span className='pokemon-attribute'>{currentPokemon.habitat}</span></p>
                                    <p>Height: <span className='pokemon-attribute'>{currentPokemon.height}</span></p>
                                    <p>Weight: <span className='pokemon-attribute'>{currentPokemon.weight}</span></p>
                                </div>
                            </div>
                            }
                    />
            </div> 
            :
            <div className="card-container">
                {chosenPokemon.map(attr => {
                return <PokeCard key={attr.name} name={attr.name} image={attr.image} habitat={attr.habitat}/>
                })}
            </div> }

            <button className="btn-check-cards" onClick={changeView}>{isPokedex ? 'Check all cards!' : 'Check Pokedex!'}</button>
		</section>
	)
}

export default PokemonResults;
