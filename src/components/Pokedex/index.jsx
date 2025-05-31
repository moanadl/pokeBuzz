import './pokedex.scss'

function Pokedex ({children}) {

	return (
        <div className='pokedex'>
            <div className='red-frame'>
                <div className='camera-wrapper'>
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
                                    <div className='screen'>
                                        {children}
                                    </div>
                                </div>
                                <div className='white-frame-shadow'></div>
                            </div>
                        </div>
                    </div>
                    <div className='display-wrapper__right'></div>
                </div>
            </div>
        </div>
    );
}

export default Pokedex;
