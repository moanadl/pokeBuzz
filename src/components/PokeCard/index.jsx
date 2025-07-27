import './PokeCard.css'

function PokeCard ({name, image, type1, habitat}) {

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
        <div className='pokeCard'>

            <div className='pokeCard-img' style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/${leftScreenBG})`}}>
                <img className='pokemon-img' src={image} alt={name}/>
            </div>
            
            <div className='pokeCard-attributes'>
                <p><b>Name:</b> <span className='pokemon-attribute-name'>{name}</span></p>
                <p><b>Type:</b> <span className='pokemon-attribute'>{type1}</span></p>
                <p><b>Habitat:</b> <span className='pokemon-attribute'>{habitat}</span></p>
            </div>

        </div>
    );
}

export default PokeCard;
