import { Link } from 'react-router-dom';
import './WelcomeMessage.css';

function WelcomeMessage () {

   	return (
        <>
            <div className="welcome-container">
                <div>
                    <p>Want to find out which Pokémon you'd carry with you if you're on your adventure to become a Pokémon Master?</p> 
                    <p>Hit the button and let's have fun!</p>
                </div>
                
                <Link to="/pokeBuzz" className='home-button'>Start quizz!</Link>
                
                <img src={`${process.env.PUBLIC_URL}/images/pikachu.png`} aria-hidden='true' />
            </div>
        </>
    );
}

export default WelcomeMessage;
