import WelcomeMessage from '../../components/WelcomeMessage';
import Logo from "../../components/Logo"
import MoreInfoLink from '../../components/MoreInfoLink';
import './Home.css'
import Loading from '../../components/Loading/index'
import ErrorData from '../../components/ErrorData';


function Home () {    

	return (
        <div className='home-container'>
            <Logo logoHome='home'/> 
            <MoreInfoLink />
            <WelcomeMessage  />
        </div>
    );

};

export default Home;
