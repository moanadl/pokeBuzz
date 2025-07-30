import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './ErrorData.css'

function ErrorData () {

    const firstFocusable = useRef(null);
    
        useEffect(() => {
            firstFocusable.current?.focus();
        }, []);

	return (
        <>
            <div className='black-background'>
                <div className="error-container" role='alert'>
                    <div>
                        <p>Oops! Something went wrong with our pokedex!</p>
                        <p>Please, come back a bit later and try again!</p>
                    </div>
                        
                        <Link to="/" className='error-button' ref={firstFocusable}>Back to home</Link>
                        
                        <img src={`${process.env.PUBLIC_URL}/images/psyduck.png`} aria-hidden='true' />
                </div>
            </div>
        </>
    );
}

export default ErrorData;
