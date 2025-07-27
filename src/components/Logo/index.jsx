import './Logo.css'

function Logo (props) {

	return (
        <h1 className={props.logoHome === 'home' ? 'logo logo-home' : 'logo'}>
            Find out your team of <img src={process.env.PUBLIC_URL + "/images/logo-pokemon.png"} alt='Pokémon'/>
        </h1>
    );
}

export default Logo;
