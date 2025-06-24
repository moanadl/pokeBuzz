import { Link } from 'react-router-dom';
import './WelcomeMessage.css';

function WelcomeMessage () {

   	return (
        <>
            <div className="welcome-container">
                    <p>Want to find out which Pokémon you'd carry with you if you're on your adventure to become a Pokémon Master? <br/><br/>Hit the button and let's have fun!</p>
                    
                    <Link to="/pokeBuzz"><button className='home-button'>Start quizz!</button></Link>
                    
                    <img src="/images/pikachu.png" alt="" />
            </div>
        </>
    );
}



export default WelcomeMessage;
