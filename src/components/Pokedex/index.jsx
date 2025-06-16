import './pokedex.scss'

function Pokedex ({leftScreenContent, rightScreenContent}) {

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
                                        <div className='screen screen--left'>
                                            {leftScreenContent}
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
            <div className='pokedex__right'>
                <div className="lid">
                    <div className="display-wrapper">
                        <div className="display-wrapper__left">
                            <div className="screen screen--right">
                                {rightScreenContent}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pokedex;
