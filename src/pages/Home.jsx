import { useEffect, useState } from "react";
import PokeCard from "../components/PokeCard";
import './Home.css'
import { GetAPIData } from "../services";
import Form from "../components/Form";

function Home () {    
    
    const [pokemonEndpoints, setPokemonEndpoints] = useState([]);
    const [speciesEndpoints,setSpeciesEndpoints] = useState([]);
    const [evolutionsEndpoints, setEvolutionEndpoints] = useState([]);
    const [attributes, setAttributes] = useState([]);
    
    useEffect(() => {
            const fetchData = async () => {
            const dataAPI = await GetAPIData();
            setPokemonEndpoints(dataAPI.dataPokemon[0]);
            setSpeciesEndpoints(dataAPI.dataSpecies[0]);
            // const pokeEvolutions = dataAPI.dataEvolution[0].map(groups => {
            //     return (
            //         {
            //             first: groups.data.chain.species.name ? groups.data.chain.species.name : null,
            //             second: groups.data.chain.evolves_to[0].species.name ? groups.data.chain.evolves_to[0].species.name : null,
            //             third: groups.data.chain.evolves_to[0].evolves_to[0] ? groups.data.chain.evolves_to[0].evolves_to[0].species.name : null
            //         }
            //     )
            // })
            // setEvolutionGroups(pokeEvolutions);
            setEvolutionEndpoints(dataAPI.dataEvolution[0])
        };

        fetchData();
    }, [])

    useEffect(() => {
        if (pokemonEndpoints.length > 0 
            && speciesEndpoints.length > 0 
            && evolutionsEndpoints.length > 0) {
                getAttributes();
        }
    }, [pokemonEndpoints, speciesEndpoints, evolutionsEndpoints]);

    const getAttributes = () => {

        const pokemonAttributes = pokemonEndpoints.map((endpoint) => {
            const pokemonData = endpoint.data;
            return {
                id: pokemonData.id,
                name: pokemonData.name,
                height: pokemonData.height,
                weight: pokemonData.weight,
                type1: pokemonData.types[0].type.name,
                type2: pokemonData.types[1] ? pokemonData.types[1].type.name : null,
                image: pokemonData.sprites.other.dream_world.front_default,
            }
        })

        const speciesAttributes = speciesEndpoints.map(endpoint => {
            const speciesData = endpoint.data;
            return {
                color: speciesData.color.name,
                habitat: speciesData.habitat.name
            }
        })

        const attr = pokemonAttributes.map((pokemonAttr, index) => {
            const speciesAttr = speciesAttributes[index] || {};
            return {
                ...pokemonAttr,
                ...speciesAttr,
            }
        })

        setAttributes(attr);

    }

	return (
        <>
        {/* <div className="card-container">
            {attributes.map(pokeAttributes => {
                return <PokeCard key={pokeAttributes.name} name={pokeAttributes.name} image={pokeAttributes.image}/>
            })}
        </div> */}

        </>
    );
}

export default Home;
