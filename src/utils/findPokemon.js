export const findPokemon = (props) => {
 
    console.log('FUNÇÃO RODOU!!')
    let chosenPokemon = [];
    const chosenPokemonEvolutionsIndex = [];
    let indexFinalScore = 0;
    let numOfColors = 9;
    const colors = ['Black', 'Blue', 'Brown', 'Gray', 'Green', 'Pink', 'Purple', 'Red', 'Yellow', 'White'];

    const randomColor = () => {
        let rdmNum = Math.floor(Math.random() * numOfColors);
        return colors[rdmNum];
    }
    
    // ----- While the number of pokemon is smaller than 6, do the loop -----
    while (chosenPokemon.length < 6 ) {

        let alternativeColor = randomColor().toLowerCase();

        while (alternativeColor === props.formAnswers.color) {
            alternativeColor = randomColor();
        }

        //console.log('attr', props.pokemonAttributes);
        console.log(alternativeColor)

        const possiblePokemon = props.pokemonAttributes.filter(
            attr => attr.type1 === props.finalScore[indexFinalScore].type_habitat || 
            attr.type2 === props.finalScore[indexFinalScore].type_habitat || 
            attr.habitat === props.finalScore[indexFinalScore].type_habitat)
            .filter(pokeColor => pokeColor.color === props.formAnswers.color ||
            pokeColor.color === alternativeColor);

            
    console.log('possiblePokemon', possiblePokemon)  

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
            console.log(chosenPokemon)
            
            if (chosenPokemon.length === 6) {
                break
            }

        }
        indexFinalScore++
    }
    console.log('SAIU DO WHILE!!!!!!!')


	return chosenPokemon;
}
