import PokeCard from "../PokeCard";

// ---------- Finds the final 6 pokemons and render them ---------- //
function PokemonResults (props) {
    
    let chosenPokemon = [];
    const chosenPokemonEvolutionsIndex = [];
    let indexFinalScore = 0;
    
    // ----- While the number of pokemon is smaller than 6, do the loop -----
    while (chosenPokemon.length < 6 ) {

        const possiblePokemon = props.pokemonAttributes.filter(
            attr => attr.type1 === props.finalScore[indexFinalScore].type_habitat || 
            attr.type2 === props.finalScore[indexFinalScore].type_habitat || 
            attr.habitat === props.finalScore[indexFinalScore].type_habitat)
            .filter(pokeColor => pokeColor.color === props.formAnswers.color ||
            pokeColor.color === 'yellow');

        // colocar para shuffle cores tbm

        let possiblePokemonCopy = possiblePokemon.map((x) => x);
           
        const shuffle = (myArray) => { 
            for (let i = myArray.length - 1; i > 0; i--) { 
                const j = Math.floor(Math.random() * (i + 1)); 
                [myArray[i], myArray[j]] = [myArray[j], myArray[i]]; 
            } 
            return myArray; 
        }; 

        const possiblePokemonShuffled = shuffle(possiblePokemonCopy);
        console.log('possiblePokemonShuffled', possiblePokemonShuffled)

        for (let pokemonIndex in possiblePokemonShuffled) {
            let currentPokemon = possiblePokemonShuffled[pokemonIndex].name;
            let pokemonID = possiblePokemonShuffled[pokemonIndex].id;
            console.log('currentPokemon', currentPokemon);
            let evolutionsIndex = props.evolutionsGroups.findIndex(evolution => evolution.first === currentPokemon || evolution.second === currentPokemon || evolution.third === currentPokemon );
  
            if (pokemonID === 144 || pokemonID === 145 || pokemonID === 146 || pokemonID === 149) {
                console.log('Pokemon muito raro!!');
                continue
            }

            if (evolutionsIndex !== -1) { 
                if (chosenPokemonEvolutionsIndex.includes(evolutionsIndex)) {
                    console.log('Já tem uma evolução!')
                    continue
                }
            } else {
                if (chosenPokemonEvolutionsIndex.includes(currentPokemon)) {
                    console.log('Já tem esse Pokémon!')
                    continue
                }
            }

            chosenPokemon = [...chosenPokemon, possiblePokemonShuffled[pokemonIndex]]
            chosenPokemonEvolutionsIndex.push(evolutionsIndex);
            
            if (chosenPokemon.length === 6) {
                break
            }

        }
        indexFinalScore++
    }
    console.log('SAIU DO WHILE!!!!!!!')


	return (
		<section>
                <div className="card-container">
                {chosenPokemon.map(pokeAttributes => {
                return <PokeCard key={pokeAttributes.name} name={pokeAttributes.name} image={pokeAttributes.image}/>
                })}
                </div>
		</section>
	)
}

export default PokemonResults;
