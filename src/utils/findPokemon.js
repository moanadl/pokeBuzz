import questionOptions from '../data/questionOptions.json';

export const findPokemon = (props) => {

    const { finalScore, formAnswers, pokemonAttributes, evolutionsGroups } = props;
 
    let chosenPokemon = [];
    const chosenEvolutions = new Set();
    const forbiddenIDs = new Set([144, 145, 146, 149]); // Articuno, Zapdos, Moltres, Dragonite
    const colors = questionOptions.colorOptions.map(color => color.toLowerCase());
    const primaryColor = formAnswers.color.toLowerCase();

    const getRandomAltColor = () => {
        const altColorOptions = colors.filter(color => color !== primaryColor);
        let rdmIndex = Math.floor(Math.random() * altColorOptions.length);
        return altColorOptions[rdmIndex];
    }

    const shuffle = (myArray) => { 
        const array = [...myArray];

        for (let i = array.length - 1; i > 0; i--) { 
            const j = Math.floor(Math.random() * (i + 1)); 
            [array[i], array[j]] = [array[j], array[i]]; 
        };

        return array; 
    }; 
    
    let scoreIndex = 0;

    // ----- While the number of pokemon is smaller than 6, do the loop -----
    while (chosenPokemon.length < 6 ) {

        const targetType = finalScore[scoreIndex].type;
        let altColor = getRandomAltColor();

        const candidates = pokemonAttributes.filter(attr => 
            (attr.type1 === targetType || attr.type2 === targetType || attr.habitat === targetType) && 
            (attr.color === primaryColor || attr.color === altColor))

        const shuffledCandidates = shuffle(candidates);

        for (const pokemon of shuffledCandidates) { // Não executa caso array venha vazio
            const { id, name } = pokemon;

            // Checks for rare Pokémon
            if (forbiddenIDs.has(id)) continue;

            // Checks for repeated Pokémon or Pokémon from the same evolution group
            const evolutionsIndex = evolutionsGroups.findIndex(
                evolution => evolution.first === name || 
                evolution.second === name || 
                evolution.third === name
            );

            const evolutionKey = evolutionsIndex !== -1 ? `evol-${evolutionsIndex}` : `poke-${name}`;

            if (chosenEvolutions.has(evolutionKey)) continue;

            chosenPokemon.push(pokemon);
            chosenEvolutions.add(evolutionKey);
            
            if (chosenPokemon.length === 6) break

        }
        scoreIndex++
    }

	return chosenPokemon;
}
