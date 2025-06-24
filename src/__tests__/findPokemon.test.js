import { findPokemon } from "../utils/findPokemon";
import mockPokemonAttributes from "../__mocks__/pokemonAttributes";
import mockFinalScore from "../__mocks__/finalScore";
import mockEvolutionsGroups from "../__mocks__/evolutionsGroups";
import mockFormAnswers from "../__mocks__/formAnswers";

describe('findPokemon', () => {

	const fakeProps = {
		finalScore: mockFinalScore,
		formAnswers: mockFormAnswers,
		pokemonAttributes: mockPokemonAttributes,
		evolutionsGroups: mockEvolutionsGroups
	};
	
	let resultado;

	beforeAll(() => {
		try {
		  resultado = findPokemon(fakeProps);
		} catch (e) {
		  console.error('Erro ao executar findPokemon:', e);
		};
	  });
	
  	test ('must return array of length 6 (6 Pokémon)', () => {
		console.log('resultado', resultado)  
		expect(resultado).toHaveLength(6);
	});

	test ('elements returned must not be null', () => {
		resultado.forEach(pokemon => {
			expect(pokemon.name).toBeTruthy();
        });
	});

	test ('there must not be repeated Pokémon', () => {
		const pokemonNames = resultado.map(p => p.name);
		const pokemonNamesUnique = new Set(pokemonNames); // Creates an object with unique values
		expect(pokemonNames.length).toBe(pokemonNamesUnique.size);
	});

	test ('there must not be two or more Pokémon from the same evolution group', () => {
		const evolutionsIndex = [];
		const pokemonNames = resultado.map(p => p.name);

		pokemonNames.forEach((pokemon) => {
            const index = fakeProps.evolutionsGroups.findIndex(evolution => evolution.first === pokemon || evolution.second === pokemon || evolution.third === pokemon);
            evolutionsIndex.push(index);
		});

		const evolutionsIndexUnique = new Set(evolutionsIndex);
		expect(evolutionsIndex.length).toBe(evolutionsIndexUnique.size);
	});

});
