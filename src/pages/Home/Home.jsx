import WelcomeMessage from '../../components/WelcomeMessage';
import './Home.css'
import Logo from "../../components/Logo"
import MoreInfoLink from '../../components/MoreInfoLink';
import Loading from '../../components/Loading/index'
import MoreInfo from '../../components/MoreInfo';
import ErrorData from '../../components/ErrorData';
import Pokedex from '../../components/Pokedex';

function Home () {    

	return (
        <div className='home-container'>
            {/* <Pokedex 
                leftScreenContent={<WelcomeMessage />}
                rightScreenContent={<WelcomeMessage />}
            /> */}
            <Logo logoHome='home'/>
            <MoreInfoLink />
            <Pokedex />
            {/* <Loading /> */}
            {/* <ErrorData /> */}
            {/* <MoreInfo /> */}
            <WelcomeMessage  />
        </div>
    );

};

export default Home;
