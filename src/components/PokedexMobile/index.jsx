import '../Pokedex/Pokedex.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronRight, faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons'

function PokedexMobile ({leftScreenContent, pokemonHabitat, attributesScreenContent, changePokemon}) {
    
    const arrowRight = <FontAwesomeIcon icon={faCircleChevronRight} />
    const arrowLeft = <FontAwesomeIcon icon={faCircleChevronLeft} />

    const habitat = pokemonHabitat;
    let leftScreenBG = '';

    if (habitat === 'cave') {
        leftScreenBG = 'cave.jpg'
    } else if (habitat === 'forest' || habitat === 'grassland') {
        leftScreenBG = 'forest.jpg';
    } else if (habitat === 'mountain') {
        leftScreenBG = 'mountain.jpg';
    } else if (habitat === 'rough-terrain') {
        leftScreenBG = 'rough-terrain.jpg';
    } else if (habitat === 'sea') {
        leftScreenBG = 'sea.png';
    } else if (habitat === 'urban') {
        leftScreenBG = 'urban.jpg';
    } else {
        leftScreenBG = 'water-edges.jpg';
    }


	return (
        <div className='pokedex'>
            <div className="pokedex__left">
                <div className='red-frame'>
                    <div className='red-frame-outline-black'></div>
                    <div className='red-frame-outline-red'></div>
                    <div className='camera-wrapper'>
                        <div className='camera'>
                            <div className='camera__frame'></div>
                            <div className='camera__lenz'>
                                <div className='camera__shade'></div>
                                <div className='camera__regular-color'></div>
                                <div className='camera__light'></div>
                            </div>
                        </div>
                        <div className='lights'>
                            <div className="light light--red">
                                <div className="light__shade light__shade--red"></div>
                                <div className="light__regular-color light__regular-color--red"></div>
                                <div className="light__light light__light--red"></div>
                            </div>
                            <div className="light light--yellow">
                                <div className="light__shade light__shade--yellow"></div>
                                <div className="light__regular-color light__regular-color--yellow"></div>
                                <div className="light__light light__light--yellow"></div>
                            </div>
                            <div className="light light--green">
                                <div className="light__shade light__shade--green"></div>
                                <div className="light__regular-color light__regular-color--green"></div>
                                <div className="light__light light__light--green"></div>
                            </div>
                        </div>
                        <div className='camera-wrapper__top-portion'></div>
                        <div className='camera-wrapper__border-top-curve'></div>
                        <div className='camera-wrapper__shadow'></div>
                        <div className='camera-wrapper__border-bottom-curve'></div>
                    </div>
                    <div className='display-wrapper'>
                        <div className='button-prev-next'>
                            <button onClick={changePokemon} value='left'>{arrowLeft}</button>
                            <button onClick={changePokemon} value='right'>{arrowRight}</button>
                        </div>
                        <div className='display-wrapper__left'>
                            <div className='main-content-outline'>
                                <div className='white-frame-wrapper'>
                                    <div className='white-frame'>
                                        <div className='screen screen--left' style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/${leftScreenBG})`}}>
                                            {leftScreenContent}
                                        </div>
                                    </div>
                                    <div className='white-frame-shadow'></div>
                                </div>
                            </div>
                            <div className='screen-attributes'>{attributesScreenContent}</div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default PokedexMobile;
