export const filterPokemon = (pokemonAttributes, targetType, primaryColor, altColor) => {
    return pokemonAttributes.filter(attr => 
            (attr.type1 === targetType || attr.type2 === targetType || attr.habitat === targetType) && 
            (attr.color === primaryColor || attr.color === altColor)
    );
};
        
       