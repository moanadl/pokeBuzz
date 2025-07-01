import './pokedex.scss'

// don't need to take this test to know that I want to catch you :*
// TODO: break into smaller components
// TODO: add missing visual components
function Pokedex ({leftScreenContent, pokemonHabitat, rightScreenContent, changePokemon}) {

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
                        <div className='camera-wrapper__outline-outside-layer'></div>
                        <div className='camera-wrapper__outline-inside-layer'></div>
                    </div>
                    <div className='display-wrapper'>
                        <div className='display-wrapper__left'>
                            <div className='main-content-outline'>
                                <div className='white-frame-wrapper'>
                                    <div className='white-frame'> 
                                        <div className='screen screen--left' style={{ backgroundImage: `url("/images/${leftScreenBG}")`}}>
                                            {leftScreenContent}
                                        </div>
                                    </div>
                                    <div className='white-frame-shadow'></div>
                                </div>
                            </div>
                        </div>
                        <div className='display-wrapper__right'></div>
                    </div>
                    <div className='button-prev-next'>
                        <button onClick={changePokemon}>Prev</button>
                        <button onClick={changePokemon}>Next</button>
                    </div>
                </div>
            </div>
            <div className='pokedex__right'>
                <div className="lid-wrapper">
                    <div className="lid">
                        <div className="lid-top">
                            <div className="lid-top__layer lid-top__layer--1"></div>
                            <div className="lid-top__layer lid-top__layer--2"></div>
                            <div className="lid-top__layer lid-top__layer--3"></div>
                            <div className="lid-top__layer lid-top__layer--4"></div>
                        </div>
                        <div className="display-wrapper">
                            <div className="display-wrapper__left">
                                <div className="right-side-divisions">
                                    <div className="right-side-divisions__top">
                                        <div className="screen screen--right">
                                            {rightScreenContent}
                                        </div>
                                    </div>
                                    <div className="right-side-divisions__bottom">
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
