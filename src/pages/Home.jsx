import { useEffect, useState } from "react";
import { GetAPIData } from "../services/APIData";
import Form from "../components/Form";
import PokemonResults from "../components/PokemonResults";
import './Home.css'

// ---------- Renders the Form and the final results ---------- //
function Home () {    
    
    // ----- Creating the state for the constants that will be used -----
    const [APIDataPokemon, setAPIDataPokemon] = useState([]);
    const [APIDataSpecies, setAPIDataSpecies] = useState([]);
    const [APIDataEvolutions, setAPIDataEvolutions] = useState([]);
    const [evolutionsGroups, setEvolutionsGroups] = useState([]);
    const [pokemonAttributes, setPokemonAttributes] = useState([]);
    const [finalScore, setfinalScore] = useState([]);
    const [formAnswers, setFormAnswers] = useState([]);
    
    // ----- On page load -----
    useEffect(() => {
        // ----- Calls the function GetAPIData imported from APIData.jsx to set pokemon, species and evolution data -----
        const fetchData = async () => {
            const APIData = await GetAPIData();

            setAPIDataPokemon(APIData.pokemon[0]);
            setAPIDataSpecies(APIData.species[0]);
            setAPIDataEvolutions(APIData.evolutions[0]);
        };

        fetchData();
    }, []);

    // ----- On APIDataPokemon, APIDataSpecies or APIDataEvolutions update... -----
    useEffect(() => {
        // ----- If the data returned alright... -----
        if (APIDataPokemon.length > 0 && APIDataSpecies.length > 0 && APIDataEvolutions.length > 0) {
            // ----- Creates an array with information/attributes of all pokemon -----
            getPokemonAttributes();

            // ----- Creates an array grouping all evolutions of an especies -----
            const evolutions = APIDataEvolutions.map(groups => {
                return {
                        first: groups.data.chain.species.name ? groups.data.chain.species.name : null,
                        second: groups.data.chain.evolves_to.length > 0 ? groups.data.chain.evolves_to[0].species.name : null,
                        third: groups.data.chain.evolves_to.length > 0 && groups.data.chain.evolves_to[0].evolves_to.length > 0 ? groups.data.chain.evolves_to[0].evolves_to[0].species.name : null
                    }
                
            })
            setEvolutionsGroups(evolutions);
            
        } else {
            console.log('No data available yet.');
        }
    }, [APIDataPokemon, APIDataSpecies, APIDataEvolutions]);

    // ----- Gathers information on each pokemon and species on one single array -----
    const getPokemonAttributes = () => {

        const dataExtractionPokemon = APIDataPokemon.map((data) => {
            return {
                id: data.data.id,
                name: data.data.name,
                height: data.data.height,
                weight: data.data.weight,
                type1: data.data.types[0].type.name,
                type2: data.data.types[1] ? data.data.types[1].type.name : null,
                image: data.data.sprites.other.dream_world.front_default,
            }
        })

        const dataExtractionSpecies = APIDataSpecies.map(data => {
            return {
                color: data.data.color.name,
                habitat: data.data.habitat.name
            }
        })

        const attributesAll = dataExtractionPokemon.map((pokemonInfo, index) => {
            const speciesInfo = dataExtractionSpecies[index] || {};
            return {
                ...pokemonInfo,
                ...speciesInfo
            }
        })

        setPokemonAttributes(attributesAll);
        
    }

    // ----- Sets the form anwsers and the calculated results for type/habitat received from the Form component -----
    const getFormResults = (finalScore, formAnswers) => {
        setfinalScore(finalScore);
        setFormAnswers(formAnswers)
        console.log(formAnswers)
    }

    // ----- If the form hasn't been submitted, return Form. If it has, return results. -----
	return (
        <> 
        {finalScore.length > 0 ? 
            <PokemonResults 
                finalScore={finalScore} 
                pokemonAttributes={pokemonAttributes} 
                evolutionsGroups={evolutionsGroups} 
                formAnswers={formAnswers} 
            /> 
                :
            <Form 
                getFormResults={getFormResults} 
            />
        }
        </>
    );
}

export default Home;
