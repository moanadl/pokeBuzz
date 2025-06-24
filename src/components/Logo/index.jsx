import './Logo.css'

function Logo (props) {

	return (
        <h1 className={props.logoHome == 'home' ? 'logo logo-home' : 'logo'}>
            Find out your six
            <img className="logo-img" src="images/logo-pokemon.png" alt="Pokémon logo" />
        </h1>
    );
}

export default Logo;
