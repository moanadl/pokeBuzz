import { findPokemon } from "../utils/findPokemon";
import mockPokemonAttributes from "../__mocks__/pokemonAttributes";
import mockFinalScore from "../__mocks__/finalScore";
import mockEvolutionsGroups from "../__mocks__/evolutionsGroups";
import mockFormAnswers from "../__mocks__/formAnswers";

describe('findPokemon', () => {

	const fakeProps = {
		finalScore: mockFinalScore,
		pokemonAttributes: mockPokemonAttributes,
		evolutionsGroups: mockEvolutionsGroups,
		formAnswers: mockFormAnswers
	};
	
	let resultado;

	beforeAll(() => {
		try {
		  resultado = findPokemon(fakeProps);
		} catch (e) {
		  console.error('Erro ao executar findPokemon:', e);
		}
	  });
	
	//   console.log('formAnswers', fakeProps.formAnswers)

	
  	it('deve retornar um array com 6 pokémon', () => {
		console.log('finalScore', fakeProps.finalScore)  
		expect(resultado).toHaveLength(6);
	});

	it('os pokémon retornados devem ser não nulos', () => {
		resultado.forEach(pokemon => {
			expect(pokemon.name).toBeTruthy();
			})
	});

	it('não deve haver Pokémon repetido', () => {
		const pokemonNames = resultado.map(p => p.name);
		const pokemonNamesUnique = new Set(pokemonNames); // Creates an object with unique values
		//console.log('pokemonNames', pokemonNames, '- pokemonNamesUnique', pokemonNamesUnique);
		expect(pokemonNames.length).toBe(pokemonNamesUnique.size);
	});

	it('não deve haver dois ou mais Pokémon de um mesmo grupo de evolução', () => {
		const evolutionsIndex = [];
		const pokemonNames = resultado.map(p => p.name);
		pokemonNames.forEach((pokemon) => {
		const index = fakeProps.evolutionsGroups.findIndex(evolution => evolution.first === pokemon || evolution.second === pokemon || evolution.third === pokemon);
		evolutionsIndex.push(index);
		})
		const evolutionsIndexUnique = new Set(evolutionsIndex);
		//console.log('evolutionsIndex', evolutionsIndex, '- evolutionsIndexUnique', evolutionsIndexUnique);
		expect(evolutionsIndex.length).toBe(evolutionsIndexUnique.size);
	})

})

