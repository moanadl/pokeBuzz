import './PokeCard.css'

function PokeCard ({name, image, type1, type2, habitat, height, weight}) {

    let leftScreenBG = '';

    if (habitat === 'cave') {
        leftScreenBG = 'cave.jpg'
    } else if (habitat === 'forest' || habitat === 'grassland') {
        leftScreenBG = 'forest.jpg';
    } else if (habitat === 'mountain') {
        leftScreenBG = 'mountain.jpg';
    } else if (habitat === 'rough-terrain') {
        leftScreenBG = 'rough-terrain.jpg';
    } else if (habitat === 'sea') {
        leftScreenBG = 'sea.png';
    } else if (habitat === 'urban') {
        leftScreenBG = 'urban.jpg';
    } else {
        leftScreenBG = 'water-edges.jpg';
    }

	return (
        <div className='pokeCard' >
            <div className='pokeCard-img' style={{ backgroundImage: `url("/images/${leftScreenBG}")`}}>
                <img className='pokemon-img' src={image} alt={name}/>
            </div>
            <div className='pokeCard-attributes'>
                <p>Name: <span className='pokemon-attribute'>{name}</span></p>
                <p>Type: <span className='pokemon-attribute'>{type1}</span></p>
                <p>Habitat: <span className='pokemon-attribute'>{habitat}</span></p>
            </div>

        </div>
    );
}

export default PokeCard;
