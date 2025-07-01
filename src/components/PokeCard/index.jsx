import './PokeCard.css'

function PokeCard ({name, image, habitat}) {

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
            <p>{name}</p>
        </div>
    );
}

export default PokeCard;
