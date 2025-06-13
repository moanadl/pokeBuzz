import axios from "axios";

export const GetAPIData = async () => {
        try {
            const APIData = {};

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
            console.log('An error occurred:', error);
            return null;
        };

  };
