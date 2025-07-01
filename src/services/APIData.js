import axios from "axios";

export const GetAPIData = async (testNumPokemon, testNumEvolution) => {
        try {

            const numPokemon = testNumPokemon ? testNumPokemon : 149;
            const numEvolution = testNumEvolution ? testNumEvolution : 76;

            const APIData = {};

            const endpointsPokemon = [];
            const endpointsSpecies = [];
            const endpointsEvolutions = [];
            
            // for (let i = 1; i <= numPokemon || 149; i++) {
            for (let i = 1; i <= numPokemon; i++) {
                endpointsPokemon.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
                endpointsSpecies.push(`https://pokeapi.co/api/v2/pokemon-species/${i}`)
            }
            
            // for (let i = 1; i <= numEvolution || 76; i++) {
            for (let i = 1; i <= numEvolution; i++) {
                endpointsEvolutions.push(`https://pokeapi.co/api/v2/evolution-chain/${i}`)
            }

            const [axiosPokemon, axiosSpecies, axiosEvolutions] = await Promise.all([
                Promise.all(endpointsPokemon.map((url) => axios.get(url))),
                Promise.all(endpointsSpecies.map((url) => axios.get(url))),
                Promise.all(endpointsEvolutions.map((url) => axios.get(url))),  
            ]);
            
            APIData.APIPokemon = axiosPokemon;
            APIData.APISpecies = axiosSpecies;
            APIData.APIEvolutions = axiosEvolutions;
            
            return APIData;
            
        } catch (error) {
            const APIData = {};

            APIData.APIPokemon = '';
            APIData.APISpecies = '';
            APIData.APIEvolutions = '';

            return APIData;
        };

  };
