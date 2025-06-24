// import './WelcomeMessage.css'
import { useState } from 'react';
import MoreInfo from "../MoreInfo";
import './MoreInfoLink.css'

function MoreInfoLink () {

    const [isMoreInfo, setIsMoreInfo] = useState(false);

    const toggleMoreInfo = () => {
        isMoreInfo ? setIsMoreInfo(false) : setIsMoreInfo(true);
    };

	return (
        <>
            {isMoreInfo ? (<MoreInfo toggleMoreInfo={toggleMoreInfo} />) : ''}

            <div className='more-info-link' onClick={toggleMoreInfo}>
                <img src='images/pokebola-cor.png' alt='' className='pokebola-info'/>
                <p>Learn more about<br/> this project</p>
            </div>
        </>

    );
}

export default MoreInfoLink;
