import { useEffect, useState } from "react";
import { GetAPIData } from "../services/APIData";
import Form from "../components/Form";
import PokemonResults from "../components/PokemonResults";
import './Home.css'
import Loading from "../components/Loading";

// ---------- Renders the Form and the final results ---------- //
function Home () {    
    
    // ----- Creating the state for the constants that will be used -----
    const [evolutionsGroups, setEvolutionsGroups] = useState([]);
    const [pokemonAttributes, setPokemonAttributes] = useState([]);
    const [finalScore, setfinalScore] = useState([]);
    const [formAnswers, setFormAnswers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isProcessing, setIsProcessing] = useState(false);
    
    // ----- On page load -----
    useEffect (() => {
        
        const fetchData = async () => {
            
            try {

                // Gets the data from the API
                const { APIPokemon, APISpecies, APIEvolutions } = await GetAPIData();

                // ----- If the data returned alright... -----
                if (APIPokemon.length && APISpecies.length && APIEvolutions.length) {

                    // ----- Creates an array with information/attributes of all pokemon -----
                    const attributes = APIPokemon.map((data,index) => {
                        const pokemonData = data.data;
                        const speciesData = APISpecies[index]?.data || {};

                        return {
                            id: pokemonData.id,
                            name: pokemonData.name,
                            height: pokemonData.height,
                            weight: pokemonData.weight,
                            type1: pokemonData.types[0]?.type.name || null,
                            type2: pokemonData.types[1]?.type.name || null,
                            image: pokemonData.sprites?.other?.dream_world?.front_default,
                            color: speciesData.color?.name || null,
                            habitat: speciesData.habitat?.name || null
                        };

                    });
                    // ----- Creates an array grouping all evolutions of an especies -----
                    const evolutions = APIEvolutions.map(data => {
                        const evolutionsData = data.data;

                        return {
                            first: evolutionsData.chain.species.name || null,
                            second: evolutionsData.chain.evolves_to?.[0]?.species?.name || null,
                            third: evolutionsData.chain.evolves_to?.[0]?.evolves_to?.[0]?.species?.name || null
                        };

                    });

                    setPokemonAttributes(attributes);
                    setEvolutionsGroups(evolutions);

                } else {
                    console.warn('Some API data could not be loaded correctly')
                };

                setIsLoading(false);
            } catch (error) {
                console.error('Error loading the API data', error);
                setIsLoading(false);
            };
        };

        fetchData();

    }, []);

    // ----- Sets the form anwsers and the calculated results for type/habitat received from the Form component -----
    const handleFormSubmit = async (finalScore, formAnswers) => {
        setIsProcessing(true);
        setfinalScore(finalScore);
        setFormAnswers(formAnswers);

        setTimeout(() => {
            setIsProcessing(false);
        }, 1000);
    };

    // ----- If the form hasn't been submitted, return Form. If it has, return results. -----
	return (
        <> 
        {isLoading || isProcessing ? (
            <Loading /> 
        ) : finalScore.length > 0 ? (
            <PokemonResults 
                finalScore={finalScore} 
                pokemonAttributes={pokemonAttributes} 
                evolutionsGroups={evolutionsGroups} 
                formAnswers={formAnswers}
            />
        ) : (
            <Form 
                getFormResults={handleFormSubmit} 
            />
        )}
        </>
    );

};

export default Home;
