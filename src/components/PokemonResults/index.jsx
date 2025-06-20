import { findPokemon } from "../../utils/findPokemon";
import PokeCard from "../PokeCard";
import "./PokemonResults.css";

// ---------- Finds the final 6 pokemons and render them ---------- //
function PokemonResults (props) {

    const chosenPokemon = findPokemon(props);

	return (
		<section>
            <div className="card-container">
                {chosenPokemon.map(attr => {
                return <PokeCard key={attr.name} name={attr.name} image={attr.image}/>
                })}
            </div>
		</section>
	)
}

export default PokemonResults;
