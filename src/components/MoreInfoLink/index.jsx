// import './WelcomeMessage.css'
import { useState } from 'react';
import MoreInfo from "../MoreInfo";
import './MoreInfoLink.css'

function MoreInfoLink () {

    const [isMoreInfo, setIsMoreInfo] = useState(false);

    const toggleMoreInfo = (e) => {

        if (e.key !== "Enter" && e.key !== ' ' && e.type !== 'click') {
            return
        }

        isMoreInfo ? setIsMoreInfo(false) : setIsMoreInfo(true);

    };

	return (
        <>
            {isMoreInfo ? (<MoreInfo toggleMoreInfo={toggleMoreInfo} />) : ''}
            <div className='more-info-link' onClick={toggleMoreInfo} onKeyDown={toggleMoreInfo} role='button' tabIndex={0} aria-label='Click fore more info about this app' >

                <img src={process.env.PUBLIC_URL + "/images/pokebola-cor.png"} aria-hidden='true' className='pokebola-info'/>

                <div className='more-info-span'>
                    <span>Learn more about</span><span>this project</span>
                </div>
                
            </div>
        </>

    );
}

export default MoreInfoLink;
