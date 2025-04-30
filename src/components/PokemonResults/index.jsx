import PokeCard from "../PokeCard";

// ---------- Finds the final 6 pokemons and render them ---------- //
function PokemonResults (props) {
    
    let chosenPokemon = [];
    const chosenPokemonControl = [];
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

        for (let pokemonIndex in possiblePokemonShuffled) {
            // console.log('pokemonIndex', pokemonIndex)
            let currentPokemon = possiblePokemonShuffled[pokemonIndex].name;
            // console.log(currentPokemon);
            let evolutionsIndex = props.evolutionsGroups.findIndex(evolution => evolution.first === currentPokemon || evolution.second === currentPokemon || evolution.third === currentPokemon );
            // console.log('índice da evolução', evolutionsIndex);
            // console.log('chosenPokemonControl', props.evolutionsGroups[evolutionsIndex])
            // console.log('chosenPokemonControl second', props.evolutionsGroups[evolutionsIndex].second)
            if (chosenPokemonControl.includes(props.evolutionsGroups[evolutionsIndex].first || props.evolutionsGroups[evolutionsIndex].second || props.evolutionsGroups[evolutionsIndex].third)) {
                //console.log('Já tem uma evolução!')
                continue
            }

            if (chosenPokemon.length >= 6) {
                break
            }
            
            // !!!!! Ajeitar condicional para jolteon, vaporeon, etc.
            chosenPokemon = [...chosenPokemon, possiblePokemonShuffled[pokemonIndex]]

            chosenPokemonControl.push(possiblePokemonShuffled[pokemonIndex].name)
    
        }
        indexFinalScore++
    }


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
