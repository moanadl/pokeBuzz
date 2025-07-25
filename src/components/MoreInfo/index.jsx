import { useEffect, useRef } from 'react';
import './MoreInfo.css'

function MoreInfo (props) {

    const firstFocusable = useRef(null);

    useEffect(() => {
        firstFocusable.current?.focus();
    }, []);

	return (
        <div className="more-info-message black-background">
            <div className='more-info-p'>
                <p>This website was created as a study project. Studying doesn't have to be boring.</p>
                <p>Develop fun apps to enhance my skills while building a strong portfolio is one of my favortie activities. Check more on the following links.</p>
            </div>
            <div className='contact-links'>
                <a href="https://github.com/moanadl" ref={firstFocusable}>Github</a>
                <a href="https://www.linkedin.com/in/moana-lopes/">Linkedin</a>
            </div>

            <button aria-label='Close button' onClick={props.toggleMoreInfo} onKeyDown={props.toggleMoreInfo}><span>X</span></button>
        </div>
    );
}

export default MoreInfo;
