import './pokeCard.css'

function PokeCard ({name, image}) {

	return (
        <div className='pokeCard'>
            <h1>{name}</h1>
            <img src={image} alt={name} />
        </div>
    );
}

export default PokeCard;
