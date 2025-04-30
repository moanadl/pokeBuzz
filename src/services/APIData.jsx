import axios from "axios";

export const GetAPIData = async () => {
        try {
            const APIData = {
                pokemon: [],
                species: [],
                evolutions: [],
            };

            const endpointsPokemon = [];
            const endpointsSpecies = [];
            const endpointsEvolutions = [];
            
            for (let i = 1; i <= 149; i++) {
                endpointsPokemon.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
                endpointsSpecies.push(`https://pokeapi.co/api/v2/pokemon-species/${i}`)
            }
            
            for (let i = 1; i <= 76; i++) {
                endpointsEvolutions.push(`https://pokeapi.co/api/v2/evolution-chain/${i}`)
            }

            const axiosPokemon = await axios.all(endpointsPokemon.map(endpointPokemon => axios.get(endpointPokemon)));
            const axiosSpecies = await axios.all(endpointsSpecies.map(endpointSpecies => axios.get(endpointSpecies)));
            const axiosEvolutions = await axios.all(endpointsEvolutions.map(endpointEvolutions => axios.get(endpointEvolutions)));
            
            APIData.pokemon.push(axiosPokemon);
            APIData.species.push(axiosSpecies);
            APIData.evolutions.push(axiosEvolutions);
            
            return APIData;
            
        } catch (error) {
            console.log('An error occurred:', error);
        }

  };
