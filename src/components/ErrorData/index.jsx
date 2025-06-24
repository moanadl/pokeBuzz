import { Link } from 'react-router-dom';
import './ErrorData.css'

function ErrorData () {

	return (
        <>
        <div className='black-background'>
            <div className="error-container">
                    <p>Oops! Something went wrong with our pokedex!<br/><br/>Please, come back a bit later and try again!</p>
                    
                    <Link to="/"><button className='error-button'>Back to home</button></Link>
                    
                    <img src="/images/psyduck.png" alt="" />
            </div>
        </div>
        </>
    );
}

export default ErrorData;
