import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { findPokemon } from "../../utils/findPokemon";
import PokeCard from "../PokeCard";
import Pokedex from "../Pokedex";
import PokedexMobile from "../PokedexMobile";
import "./PokemonResults.css";
import useWindowDimensions from "../../utils/getViewport";


// ---------- Finds the final 6 pokemons and render them ---------- //
function PokemonResults (props) {

    const [chosenPokemon] = useState(() =>findPokemon(props)); // Lazy initialization
    const [index, setIndex] = useState(0);
    const [isPokedex, setIsPokedex] = useState(true);
    const widthViewport = useWindowDimensions().width;
    console.log("Viewport atual:", widthViewport);
    console.log(typeof widthViewport)

    const changePokemon = (e) => {
        const command = e.currentTarget.value;
        
        if (command === 'right') {
            setIndex((prevIndex) => (prevIndex + 1) % chosenPokemon.length); // Loop circular
        }

        if (command === 'left') {
            setIndex((prevIndex) => (prevIndex - 1 + chosenPokemon.length) % chosenPokemon.length); // Loop circular
        }
    }

    const currentPokemon = chosenPokemon[index];

    const changeView = () => {
        isPokedex ? setIsPokedex(false) : setIsPokedex(true);
    }

	return (
		<section>
            {isPokedex ? 
            
            <div className="card-container">
                
                {widthViewport >= 768 ? 
                    <Pokedex 
                        changePokemon={changePokemon}
                        pokemonHabitat={currentPokemon.habitat}
                        pokemonWeight={currentPokemon.weight/10}
                        pokemonHeight={currentPokemon.height*10}
                        leftScreenContent={<img className='pokemon-pokedex' src={currentPokemon.image} />}
                        attributesScreenContent={
                            <div className="attributes">
                                    <p><b>Name:</b> <span className='pokemon-attribute-name'>{currentPokemon.name}</span></p>
                                    <p><b>1<sup>st</sup> type:</b> <span className='pokemon-attribute'>{currentPokemon.type1}</span></p>
                                    {currentPokemon.type2 ? <p><b>2<sup>nd</sup> type:</b> <span className='pokemon-attribute'>{currentPokemon.type2}</span></p> : <p><b>2<sup>nd</sup> type:</b> <span className='pokemon-attribute'>-</span></p>}
                                    <p><b>Habitat:</b> <span className='pokemon-attribute'>{currentPokemon.habitat}</span></p>
                                    <p><b>Height:</b> <span className='pokemon-attribute'>{currentPokemon.height*10} cm</span> </p>
                                    <p><b>Weight:</b> <span className='pokemon-attribute'>{currentPokemon.weight/10} kg</span> </p>
                            </div>
                            }
                    />
                    :
                    <PokedexMobile changePokemon={changePokemon}
                        pokemonHabitat={currentPokemon.habitat}
                        pokemonWeight={currentPokemon.weight/10}
                        pokemonHeight={currentPokemon.height*10}
                        leftScreenContent={<img className='pokemon-pokedex' src={currentPokemon.image} />}
                        attributesScreenContent={
                            <div className="attributes">
                                    <p><b>Name:</b> <span className='pokemon-attribute-name'>{currentPokemon.name}</span></p>
                                    <p><b>1<sup>st</sup> type:</b> <span className='pokemon-attribute'>{currentPokemon.type1}</span></p>
                                    {currentPokemon.type2 ? <p><b>2<sup>nd</sup> type:</b> <span className='pokemon-attribute'>{currentPokemon.type2}</span></p> : <p><b>2<sup>nd</sup> type:</b> <span className='pokemon-attribute'>-</span></p>}
                                    <p><b>Habitat:</b> <span className='pokemon-attribute'>{currentPokemon.habitat}</span></p>
                                    <p><b>Height:</b> <span className='pokemon-attribute'>{currentPokemon.height*10} cm</span> </p>
                                    <p><b>Weight:</b> <span className='pokemon-attribute'>{currentPokemon.weight/10} kg</span> </p>
                                </div>
                                }
                    />
                        
                    }
            </div> 
            :
            <div className="card-container">
                {chosenPokemon.map(attr => {
                return <PokeCard key={attr.name} name={attr.name} image={attr.image} type1={attr.type1} type2={attr.type2} habitat={attr.habitat} height={attr.height} weight={attr.weight}/>
                })}
            </div> }

            <div className='results-btn'>
                <button className="btn-change-view" onClick={changeView}>{isPokedex ? 'Check all cards' : 'Check Pokedex'}</button>
                <Link to="/"><button className="btn-try-again" onClick={changeView}>Try again!</button></Link>
                
            </div>

		</section>
	)
}

export default PokemonResults;
