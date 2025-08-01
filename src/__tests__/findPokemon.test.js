import { findPokemon } from "../utils/findPokemon";
import { filterPokemon } from "../utils/filterPokemon";
import mockPokemonAttributes from "../__mocks__/pokemonAttributes";
import mockEvolutionsGroups from "../__mocks__/evolutionsGroups";
import mockFinalScore from "../__mocks__/finalScore";
import mockFormAnswers from "../__mocks__/formAnswers";

describe('Final results', () => {

	const fakeProps = {
		finalScore: mockFinalScore,
		formAnswers: mockFormAnswers,
		pokemonAttributes: mockPokemonAttributes,
		evolutionsGroups: mockEvolutionsGroups
	};

	describe ('When findPokemon is called', () => {

		test ('must return array of length 6 (6 Pokémon)', () => {
			const resultado = findPokemon(fakeProps);
			expect(resultado).toHaveLength(6);
		});

		test ('elements returned must not be null', () => {

			const resultado = findPokemon(fakeProps);
			resultado.forEach(pokemon => {
				expect(pokemon.name).toBeTruthy();
			});
		});

		test ('there must not be repeated Pokémon', () => {

			const resultado = findPokemon(fakeProps);
			const pokemonNames = resultado.map(p => p.name);
			const pokemonNamesUnique = new Set(pokemonNames); // Creates an object with unique values
			expect(pokemonNames.length).toBe(pokemonNamesUnique.size);
		});

		test ('there must not be two or more Pokémon from the same evolution group', () => {

			const resultado = findPokemon(fakeProps);
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

	describe('When filterPokemon is called', () => {

		test('return one or more Pokémon when it is supposed to', () => {
			const filtered = filterPokemon(mockPokemonAttributes, 'grassland', 'black', 'green');
			expect(filtered.length).toBeGreaterThan(0);
		});

		test('return one or more Pokémon when it is not supposed to (e.g. impossible combinations)', () => {
			const filtered = filterPokemon(mockPokemonAttributes, 'grassland', 'black', 'white');
			expect(filtered.length).toBe(0);
		});

		test('Pokémon filtered must contained attributes used in filter', () => {
			const filtered = filterPokemon(mockPokemonAttributes, 'grassland', 'black', 'green');
			filtered.forEach(pokemon => {
				expect(
					pokemon.type1 === 'grassland' || pokemon.type2 === 'grassland' || pokemon.habitat === 'grassland'
				).toBeTruthy();

				expect(
					pokemon.color === 'black' || pokemon.color === 'green'
				).toBeTruthy();
			});

		});

	});

	describe('Given irregular input', () => {

		test('returns [] if finalScore is empty', () => {
			const resultado = findPokemon({
				finalScore: [],
				formAnswers: mockFormAnswers,
				pokemonAttributes: mockPokemonAttributes,
				evolutionsGroups: mockEvolutionsGroups
			});

			expect(resultado.length).toBe(0);
		});

		test('returns [] if pokemonAttributes is empty', () => {
			const resultado = findPokemon({
				finalScore: mockFinalScore,
				formAnswers: mockFormAnswers,
				pokemonAttributes: [],
				evolutionsGroups: mockEvolutionsGroups
			});

			expect(resultado.length).toBe(0);
		});

		test('returns [] if evolutionsGroups is empty', () => {
			const resultado = findPokemon({
				finalScore: mockFinalScore,
				formAnswers: mockFormAnswers,
				pokemonAttributes: mockPokemonAttributes,
				evolutionsGroups: []
			});

			expect(resultado.length).toBe(0);
		});

	});

});
