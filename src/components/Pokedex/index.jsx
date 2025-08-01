import './Pokedex.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronRight, faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons'

function Pokedex ({leftScreenContent, pokemonHabitat, attributesScreenContent, changePokemon}) {

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
                            <button onClick={changePokemon} value='left' aria-label='Previous Pokémon'>{arrowLeft}</button>
                            <button onClick={changePokemon} value='right' aria-label='Next Pokémon'>{arrowRight}</button>
                        </div>
                        <div className='display-wrapper__left'>
                            <div className='main-content-outline'>
                                <div className='white-frame-wrapper'>
                                    <div className='white-frame'> 
                                        <div className='screen screen--left' style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/${leftScreenBG})` }}>
                                            {leftScreenContent}
                                        </div>
                                    </div>
                                    <div className='white-frame-shadow'></div>
                                </div>
                            </div>

                            <div className='bottom-details-wrapper'>
                                <div className="dark-circle-wrapper">
                                    <div className='dark-circle'></div>
                                </div>
                                <div className="central-elements">
                                    <div className="leds-wrapper">
                                        <div className="led led--red"></div>
                                        <div className="led led--blue"></div>
                                    </div>
                                    <div className="green-element"></div>
                                </div>
                                <div className="directional">
                                    <div className="horizontal-element-wrapper">
                                        <div className="horizontal-element"></div>
                                    </div>
                                    <div className="vertical-element-wrapper">
                                        <div className="vertical-element"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='display-wrapper__right'></div>
                    </div>
                </div>
            </div>
            <div className='pokedex__right'>
                <div className="lid-wrapper">                   
                    <div className='lid-top__eraser--black'></div>
                    <div className='lid-top__eraser--white'></div>
                    <div className="lid">
                        <div className='red-frame-outline-black'></div>
                        <div className='red-frame-outline-red'></div>
                        <div className="lid-top">
                            <div className="lid-top__layer lid-top__layer--1"></div>
                            <div className="lid-top__layer lid-top__layer--2"></div>
                            <div className="lid-top__layer lid-top__layer--3"></div>
                            <div className="lid-top__layer lid-top__layer--4"></div>
                        </div>
                        <div className="display-wrapper">
                            <div className="display-wrapper__right">
                                <div className="right-side-divisions">
                                    <div className="right-side-divisions__top">
                                        <div className="screen screen--right screen-attributes">
                                            {attributesScreenContent}
                                        </div>
                                    </div>
                                    <div className="right-side-divisions__bottom">
                                        <div className="right-side-divisions__row">
                                            <div className="blue-buttons-grid-wrapper">
                                                <div className="blue-buttons-grid">
                                                    <div className="blue-buttons-grid__button b-1"></div>
                                                    <div className="blue-buttons-grid__button b-2"></div>
                                                    <div className="blue-buttons-grid__button b-3"></div>
                                                    <div className="blue-buttons-grid__button b-4"></div>
                                                    <div className="blue-buttons-grid__button b-5"></div>
                                                    <div className="blue-buttons-grid__button b-6"></div>
                                                    <div className="blue-buttons-grid__button b-7"></div>
                                                    <div className="blue-buttons-grid__button b-8"></div>
                                                    <div className="blue-buttons-grid__button b-9"></div>
                                                    <div className="blue-buttons-grid__button b-10"></div>
                                                    <div className="blue-buttons-grid__button b-11"></div>
                                                    <div className="blue-buttons-grid__button b-12"></div>
                                                </div>
                                            </div>
                                            <div className="small-rubber-wrapper">
                                                <div className="small-rubber"></div>
                                                <div className="small-rubber"></div>
                                            </div>
                                        </div>
                                        <div className="right-side-divisions__row right-light-wrapper">
                                            <div className="white-buttons-grid-wrapper">
                                                <div className="white-buttons-grid">
                                                    <div className="white-buttons-grid__button b-1"></div>
                                                    <div className="white-buttons-grid__button b-2"></div>
                                                </div>
                                            </div>
                                            <div className="light light--yellow">
                                                <div className="light__shade light__shade--yellow"></div>
                                                <div className="light__regular-color light__regular-color--yellow"></div>
                                                <div className="light__light light__light--yellow"></div>
                                            </div>
                                        </div>
                                        <div className="right-side-divisions__row">
                                            <div className="rubber-wrapper">
                                                <div className="rubber"></div>
                                                <div className="rubber"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pokedex;
