import axios from "axios";

export const GetAPIData = async () => {
        try {
            const endpoints = {
                dataPokemon: [],
                dataSpecies: [],
                dataEvolution: [],
            };

            const endpointsPokemons = [];
            const endpointsSpecies = [];
            const endpointsEvolution = [];
            
            for (let i = 1; i <= 151; i++) {
                endpointsPokemons.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
                endpointsSpecies.push(`https://pokeapi.co/api/v2/pokemon-species/${i}`)
            }
            
            for (let i = 1; i <= 78; i++) { //78
                endpointsEvolution.push(`https://pokeapi.co/api/v2/evolution-chain/${i}`)
            }

            
            const resultsPokemon = await axios.all(endpointsPokemons.map(endpointPokemon => axios.get(endpointPokemon)));
            const resultsSpecies = await axios.all(endpointsSpecies.map(endpointSpecies => axios.get(endpointSpecies)));
            const resultsEvolution = await axios.all(endpointsEvolution.map(endpointEvolution => axios.get(endpointEvolution)));
            
            endpoints.dataPokemon.push(resultsPokemon);
            endpoints.dataSpecies.push(resultsSpecies);
            endpoints.dataEvolution.push(resultsEvolution);
            
            return endpoints;
            
        } catch (error) {
            console.log('An error occured:', error);
        }

  };
